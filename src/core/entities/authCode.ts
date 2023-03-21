import { User } from '@core/entities/user'
import { Client } from '@core/entities/client'
import { Scope } from '@core/entities/scope'

type CodeChallengeMethod = 'S256' | 'plain';

export interface AuthCode {
  code: string
  redirectUri?: string
  codeChallenge?: string
  codeChallengeMethod?: CodeChallengeMethod
  expiresAt: Date
  user?: User
  client: Client
  scopes: Scope[]
}