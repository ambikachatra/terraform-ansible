import React from 'react';
import '../App.css';
import profileImg from '../assets/2648938.jpg';

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">About Me</h2>

        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-circle shadow"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card shadow p-4 border-0 bg-white bg-opacity-75">
              <h4 className="text-dark mb-3">DevOps Engineer | Cloud Engineer</h4>
              <p className="text-muted">
                I’m <strong>Ambika Chatra</strong> Aspiring DevOps Engineer  <strong>Cloud Engineer</strong> with expertise in cloud platforms, automation, 
                and CI/CD pipelines. I specialize in designing and maintaining scalable, secure, and production-ready infrastructure, 
                ensuring smooth deployments and reliable operations.
              </p>
              <p className="text-muted">
               <strong>At MicroDegree Certification Programme</strong>
                • Gained hands-on experience with AWS, Ansible, Docker, Git, Kubernetes, Jenkins, Terraform, and Shell
                  Scripting through practical labs.
                • Built and automated infrastructure using Terraform and Ansible.
                • Containerized applications with Docker and orchestrated deployments using Kubernetes.
                • Implemented CI/CD pipelines with Jenkins and Git for automated builds and deployments.
                • Developed shell scripts for automation and system administration tasks.
                </p>
              <p className="text-muted">
                <strong>At Vinva Technologies Pvt Ltd </strong>
                  • Developed CI/CD pipelines for deploying web applications, built with various technologies like
                    NodeJs, Python etc.
                  • Setup EC2 servers for running the applications.
                  • Created multiple S3 buckets for use with production and testing deployments.
                  • Deployed multiple open source projects on on-premises servers.
                  • Deployed applications across multiple cloud providers like AWS, A
               
              </p>
                
              <p className="text-muted">
                <strong>Ellucian Higher Education Systems Pvt Ltd </strong>
                  • Gained practical experience with DevOps tools such as Docker, Jenkins, and Ansible while contributing
                    to the development of a CI/CD pipeline.
                  • Streamlined the deployment process for updates and patches by automating a previously manual
                    workflow, leading to enhanced productivity and reduced time for implementing changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
