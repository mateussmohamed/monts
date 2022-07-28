import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  await app.listen(process.env.PORT || 8080)

  console.log(` 🚀 Server ready at: http://localhost:8080/graphql`)
}

bootstrap()
