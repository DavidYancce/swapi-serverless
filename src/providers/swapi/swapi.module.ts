import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { SWAPIProvider } from './swapi.provider';

@Global()
@Module({
  imports: [HttpModule],
  providers: [SWAPIProvider],
  exports: [SWAPIProvider],
})
export class SWAPIModule {}
