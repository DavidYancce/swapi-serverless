import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarshipModule } from './modules/starship/starship.module';

@Module({
  imports: [StarshipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
