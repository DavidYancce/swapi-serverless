import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Starship } from '../../modules/starship/entity/startship.dto';

@Injectable()
export class SWAPIProvider {
  constructor(private readonly httpService: HttpService) {
    this.httpService.axiosRef.defaults.baseURL = 'https://swapi.py4e.com/api/';
  }

  async getAllStarships(): Promise<Starship[]> {
    const response = await firstValueFrom(this.httpService.get('starships'));
    return response.data.results;
  }

  async getStarshipById(id: number) {
    const response = await firstValueFrom(
      this.httpService.get(`starships/${id}`),
    );
    return response.data;
  }

  async getStarshipSchema() {
    const response = await firstValueFrom(
      this.httpService.get('starships/schema'),
    );
    return response.data;
  }
}
