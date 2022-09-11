import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as argon2 from 'argon2'

import { SecurityConfig } from '../common/config/config.interface'

@Injectable()
export class PasswordService {
  get bcryptSaltRounds(): string | number {
    const securityConfig = this.configService.get<SecurityConfig>('security')
    const saltOrRounds = securityConfig.bcryptSaltOrRound

    return Number.isInteger(Number(saltOrRounds)) ? Number(saltOrRounds) : saltOrRounds
  }

  constructor(private configService: ConfigService) {}

  validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return argon2.verify(hashedPassword, password)
  }

  async hashPassword(password: string): Promise<string> {
    return await argon2.hash(password, { hashLength: 48, saltLength: 32 })
  }
}
