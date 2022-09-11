import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { PrismaClientExceptionFilter, PrismaService } from 'nestjs-prisma'

import type { CorsConfig, NestConfig } from './common/config/config.interface'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  // Validation
  app.useGlobalPipes(new ValidationPipe())

  // enable shutdown hook
  const prismaService: PrismaService = app.get(PrismaService)
  prismaService.enableShutdownHooks(app)

  // Prisma Client Exception Filter for unhandled exceptions
  const { httpAdapter } = app.get(HttpAdapterHost)
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter))

  const configService = app.get<ConfigService>(ConfigService)
  const nestConfig = configService.get<NestConfig>('nest')
  const corsConfig = configService.get<CorsConfig>('cors')

  if (corsConfig?.enabled) {
    app.enableCors()
  }

  const PORT = process.env.PORT || nestConfig.port || 8000
  await app.listen(PORT)

  console.log(` 🚀 Server ready at: http://localhost:${PORT}/graphql`)
}

bootstrap()
