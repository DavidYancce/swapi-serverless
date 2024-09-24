import { ApiProperty } from '@nestjs/swagger';
import { StarshipInSpanish } from '../entity/startship.dto';

export class CreateStarshipDto implements Omit<StarshipInSpanish, 'creado' | 'editado'> {
  @ApiProperty() MGLT: string;
  @ApiProperty() capacidadCarga: string;
  @ApiProperty() consumibles: string;
  @ApiProperty() costoEnCreditos: string;
  @ApiProperty() tripulacion: string;
  @ApiProperty() calificacionHyperdrive: string;
  @ApiProperty() longitud: string;
  @ApiProperty() fabricante: string;
  @ApiProperty() velocidadMaximaAtmosferica: string;
  @ApiProperty() modelo: string;
  @ApiProperty() nombre: string;
  @ApiProperty() pasajeros: string;
  @ApiProperty() peliculas: string[];
  @ApiProperty() pilotos: string[];
  @ApiProperty() claseNaveEstelar: string;
  @ApiProperty() url: string;
}
