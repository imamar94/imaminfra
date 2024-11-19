terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=4.1.0"
    }
  }
  backend "azurerm" {
    resource_group_name  = "terraform-rg"
    storage_account_name = "terraformsgirah43"
    container_name       = "terraformstate-irah43"
    key                  = "terraform.tfstate"
  }
}

provider "azurerm" {
  features {}

  subscription_id = "acc1a474-0186-467e-bcc4-faf7c1ec601b"
  tenant_id       = "14a39b98-c680-458e-9e74-d766bec526bc"
}
