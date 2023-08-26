import { repl } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  repl(AppModule);
}

bootstrap();
