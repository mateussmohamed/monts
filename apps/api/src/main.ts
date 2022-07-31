import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'

import type { CorsConfig, NestConfig } from './common/config/config.interface'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  const configService = app.get(ConfigService)
  const nestConfig = configService.get<NestConfig>('nest')
  const corsConfig = configService.get<CorsConfig>('cors')

  if (corsConfig?.enabled) {
    app.enableCors()
  }

  const PORT = process.env.PORT || nestConfig?.port || 8000
  await app.listen(PORT)

  console.log(` 🚀 Server ready at: http://localhost:${PORT}/graphql`)
}

bootstrap()
