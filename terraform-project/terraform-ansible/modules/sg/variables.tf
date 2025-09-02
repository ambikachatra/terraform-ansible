variable "vpc_id" {
  type = string
}

variable "allowed_ports" {
  type        = list(number)
  default     = [22, 80]
  description = "List of inbound ports to allow"
}
