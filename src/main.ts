import serverlessExpress from '@codegenie/serverless-express';
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module';

let server: Handler;

function setupSwagger(app: INestApplication) {
  const stage = process.env.STAGE || 'dev';

  const options = new DocumentBuilder()
    .setTitle('SWAPI API')
    .setDescription('SWAPI API REST API documentation')
    .setVersion('1.0.0')
    .addServer(`/${stage}`)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
}

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
