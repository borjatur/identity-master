import { Scope } from '@core/entities/scope'
import { GrantIdentifier } from '@core/entities/grantIdentifier'

export interface Client {
  id: string
  name: string
  secret?: string
  redirectUris: string[]
  allowedGrants: GrantIdentifier[]
  scopes: Scope[]
}