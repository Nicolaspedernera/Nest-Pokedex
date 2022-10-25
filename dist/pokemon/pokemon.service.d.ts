import { Model } from 'mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
export declare class PokemonService {
    private readonly pokemonModel;
    constructor(pokemonModel: Model<Pokemon>);
    create(createPokemonDto: CreatePokemonDto): Promise<Pokemon & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(paginationDto: PaginationDto): Promise<(Pokemon & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(term: string): Promise<Pokemon>;
    update(term: string, updatePokemonDto: UpdatePokemonDto): Promise<{
        message: string;
        pokemonUpdated: Pokemon & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    remove(id: string): Promise<{
        message: string;
        pokemonToDelete: Pokemon & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    private handleExceptions;
}
