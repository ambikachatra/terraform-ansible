variable "region" {
  default = "us-east-1"
}

variable "instance_type" {
  default = "t2.micro"
}

variable "ami" {
  description = "Ubuntu 20.04 AMI"
  default     = "ami-0c55b159cbfafe1f0" # update for your region
}
