import { User } from '@core/entities/user'
import { Client } from '@core/entities/client'
import { Scope } from '@core/entities/scope'

export interface Token {
  accessToken: string
  accessTokenExpiresAt: Date
  refreshToken?: string | null
  refreshTokenExpiresAt?: Date | null
  client: Client
  user?: User | null
  scopes: Scope[]
  originatingAuthCodeId?: string
}