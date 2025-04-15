import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import  'querystring' 
import QueryString from 'qs';
import { ValidationPipe } from '@nestjs/common';
import compression from '@fastify/compress'


async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  app.useGlobalPipes(new ValidationPipe({transform:true, transformOptions:{enableImplicitConversion:true}}))
  app.enableCors({origin:["http://localhost:3001"]})
  await app.register(compression,  { encodings: ['gzip', 'deflate'] })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
