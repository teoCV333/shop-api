import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log('>>> Arrancando aplicación Nest en servidor...');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* app.enableCors({
    origin: '*',
  }); */
  app.enableCors({
    origin: 'https://zentrastorecol.com',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
