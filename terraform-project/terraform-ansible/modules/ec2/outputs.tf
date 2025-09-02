output "docker_public_ip" {
  value = aws_instance.docker.public_ip
}

output "web_public_ip" {
  value = aws_instance.web.public_ip
}
