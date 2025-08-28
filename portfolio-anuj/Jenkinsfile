pipeline {
    agent any

    environment {
        APP_REPO = "git@github.com:vanuj447/portfolio-anuj.git"
        SERVER_IP = "98.87.120.70"
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Clone Repo on Server') {
            steps {
                sshagent(['ssh key']) {
                    sh '''
                    REPO_NAME=$(basename -s .git $APP_REPO)
                    ssh -o StrictHostKeyChecking=no ubuntu@$SERVER_IP "
                        if [ -d $REPO_NAME ]; then
                            rm -rf $REPO_NAME
                        fi
                        git clone $APP_REPO
                    "
                    '''
                }
            }
        }

        stage('Install & Build React App') {
            steps {
                sshagent(['ssh key']) {
                    sh '''
                    REPO_NAME=$(basename -s .git $APP_REPO)
                    ssh -o StrictHostKeyChecking=no ubuntu@$SERVER_IP "
                        cd $REPO_NAME
                        [ -f package-lock.json ] && rm -f package-lock.json
                        [ -d node_modules ] && rm -rf node_modules
                        npm install
                        npm run build
                    "
                    '''
                }
            }
        }

        stage('Deploy to Nginx') {
            steps {
                sshagent(['ssh key']) {
                    sh '''
                    REPO_NAME=$(basename -s .git $APP_REPO)
                    ssh -o StrictHostKeyChecking=no ubuntu@$SERVER_IP "
                        sudo rm -rf /var/www/html/*
                        sudo cp -r $REPO_NAME/build/* /var/www/html/
                        sudo systemctl restart nginx
                    "
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ Portfolio React app deployed successfully at http://$SERVER_IP"
        }
        failure {
            echo "❌ Deployment failed. Check Jenkins logs."
        }
    }
}
