import { Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
}
