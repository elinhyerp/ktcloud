import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

const hbs = require('hbs');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', 'views'));

  hbs.registerHelper('inc', (v) => Number(v) + 1);
  hbs.registerHelper('dec', (v) => Number(v) - 1);
  hbs.registerHelper('gt', (a, b) => Number(a) > Number(b));
  hbs.registerHelper('lt', (a, b) => Number(a) < Number(b));

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Server is running on port ${port}`);
}
bootstrap();
