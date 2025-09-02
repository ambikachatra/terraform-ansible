provider "aws" {
  region = var.region
}

# Fetch Ubuntu 20.04 AMI
data "aws_ami" "ubuntu" {
  most_recent = true
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
  owners = ["099720109477"]
}

# Modules
module "keypair" {
  source       = "./modules/keypair"
  key_name     = "tf-key"
  existing_key = ""
}

module "vpc" {
  source = "./modules/vpc"
}

module "sg" {
  source        = "./modules/sg"
  vpc_id        = module.vpc.vpc_id
  allowed_ports = [22, 80]
}

module "ec2" {
  source        = "./modules/ec2"
  sg_id         = module.sg.sg_id
  subnet_id     = module.vpc.subnet_id
  key_name      = module.keypair.key_name
  ami           = data.aws_ami.ubuntu.id
  instance_type = var.instance_type
}

# Generate dynamic Ansible inventory
resource "local_file" "ansible_inventory" {
  content = <<EOT
[docker]
${module.ec2.docker_public_ip} ansible_user=ubuntu ansible_ssh_private_key_file=${module.keypair.private_key_path}

[web]
${module.ec2.web_public_ip} ansible_user=ubuntu ansible_ssh_private_key_file=${module.keypair.private_key_path}
EOT
  filename = "${path.module}/inventory.ini"
}

# Run Ansible after infra is ready
resource "null_resource" "ansible_provisioner" {
  depends_on = [module.ec2, local_file.ansible_inventory]

  provisioner "local-exec" {
    command = "ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -i ${path.module}/inventory.ini playbook.yml"
  }
}
