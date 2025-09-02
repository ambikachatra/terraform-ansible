output "docker_instance_ip" {
  value = module.ec2.docker_public_ip
}

output "web_instance_ip" {
  value = module.ec2.web_public_ip
}

output "private_key_path" {
  value = module.keypair.private_key_path
}

output "key_name" {
  value = module.keypair.key_name
}


