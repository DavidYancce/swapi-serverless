import { HttpStatus } from '@nestjs/common';
import { BaseException } from '../base-exception.interface';

export class StarshipNotFoundException extends BaseException {
  constructor() {
    super('STARSHIP_NOT_FOUND', 'Nave no encontrada', HttpStatus.NOT_FOUND);
  }
}
