[docker]
${docker_host} ansible_user=ubuntu ansible_ssh_private_key_file=${ssh_key}

[web]
${web_host} ansible_user=ubuntu ansible_ssh_private_key_file=${ssh_key}
