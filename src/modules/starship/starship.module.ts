import { Module } from '@nestjs/common';
import { SWAPIModule } from '../../providers/swapi/swapi.module';
import { StarshipController } from './starship.controller';
import { StarshipService } from './starship.service';

@Module({
  imports: [SWAPIModule],
  controllers: [StarshipController],
  providers: [StarshipService],
})
export class StarshipModule {}
