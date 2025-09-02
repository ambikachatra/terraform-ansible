variable "key_name" {
  type        = string
  default     = "tf-key"
  description = "Name of the AWS key pair to create or use"
}

variable "existing_key" {
  type        = string
  default     = ""
  description = "Optional: Use an existing AWS key pair by name instead of creating a new one"
}
