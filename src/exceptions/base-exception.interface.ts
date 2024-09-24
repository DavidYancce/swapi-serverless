import { HttpException } from '@nestjs/common';

export class BaseException extends HttpException {
  code: string;
  constructor(code: string, message: string, status = 500) {
    super(message, status);
    this.code = code;
  }
}
