output "key_name" {
  value = aws_key_pair.generated.key_name
}

output "private_key_path" {
  value = local_file.pem.filename
}
