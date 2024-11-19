variable "default_location" {
  type        = string
  default     = "westeurope"
  description = "Location of the resource group."
}

variable "project_prefix" {
    type        = string
    default     = "imaminfra"
    description = "Prefix for all resources in this project"
}

variable "default_username" {
  type        = string
  description = "Default username for most resources"
}

variable "default_password" {
  type        = string
  description = "Default username for most resources"
}
