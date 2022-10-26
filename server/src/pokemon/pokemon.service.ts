import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  private defaultPage: number;
  private defaultLimit: number;
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly configService: ConfigService,
  ) {
    this.defaultPage = configService.get<number>('default_page');
    this.defaultLimit = configService.get<number>('default_limit');
  }

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLowerCase();
    try {
      const pokemonCreated = await this.pokemonModel.create(createPokemonDto);
      return pokemonCreated;
    } catch (err) {
      this.handleExceptions(err);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { page = this.defaultPage, limit = this.defaultLimit } =
      paginationDto;
    const skip = (page - 1) * limit;

    return await this.pokemonModel.find().limit(limit).skip(skip).sort();
  }

  async findOne(term: string) {
    let pokemon: Pokemon;
    //No
    if (!isNaN(+term)) {
      pokemon = await this.pokemonModel.findOne({ no: term });
    }
    //MongoID
    if (isValidObjectId(term)) {
      pokemon = await this.pokemonModel.findById({ _id: term });
    }
    //Name
    if (!pokemon) {
      pokemon = await this.pokemonModel.findOne({
        name: term.toLowerCase().trim(),
      });
    }
    //Validation
    if (!pokemon) {
      throw new NotFoundException(
        `Pokemon with id, name or no "${term}" not found`,
      );
    }

    return pokemon;
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {
    const pokemonFinded = await this.findOne(term);
    let { name, no } = updatePokemonDto;
    name = name?.toLowerCase().trim();
    try {
      const pokemonUpdated = await this.pokemonModel.findByIdAndUpdate(
        pokemonFinded.id,
        { name, no },
        { new: true },
      );
      return { message: 'Updated', pokemonUpdated };
    } catch (err) {
      this.handleExceptions(err);
    }
  }

  async remove(id: string) {
    const pokemonToDelete = await this.pokemonModel.findByIdAndDelete(id);
    if (!pokemonToDelete) {
      throw new BadRequestException(`Cannot find "${id}" in DataBase.`);
    }
    return { message: 'Deleted', pokemonToDelete };
  }

  private handleExceptions(err: any) {
    if (err.code === 11000) {
      throw new BadRequestException(
        `The pokemon already exist in the data base ${JSON.stringify(
          err.keyValue,
        )}`,
      );
    }
    console.error(err);
    throw new InternalServerErrorException(
      `The pokemon could not be created---Check sever logs.`,
    );
  }
}
