import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateStarshipDto } from './dto/create-starship.dto';
import { StarshipService } from './starship.service';

@Controller('starships')
@ApiTags('starships')
export class StarshipController {
  constructor(private readonly starshipService: StarshipService) {}


  @Get('/spanish')
  findAllInSpanish() {
    return this.starshipService.findAllInSpanish();
  }

  @Post('/spanish')
  create(@Body() createStarshipDto: CreateStarshipDto) {
    return this.starshipService.create(createStarshipDto);
  }

  @Get()
  findAll() {
    return this.starshipService.findAll();
  }
}
