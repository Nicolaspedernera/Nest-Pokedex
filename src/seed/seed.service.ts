import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import nodeTest from 'node:test';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      `https://pokeapi.co/api/v2/pokemon?limit=10`,
    );

    const no = data.results.map((result) => {
      const segments = result.url.split('/');
      const no: number = +segments[segments.length - 2];
      return no;
    });

    return { data: data.results, no };
  }
}
