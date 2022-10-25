import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    create(createPokemonDto: CreatePokemonDto): Promise<import("./entities/pokemon.entity").Pokemon & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(paginationDto: PaginationDto): Promise<(import("./entities/pokemon.entity").Pokemon & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(term: string): Promise<import("./entities/pokemon.entity").Pokemon>;
    update(term: string, updatePokemonDto: UpdatePokemonDto): Promise<{
        message: string;
        pokemonUpdated: import("./entities/pokemon.entity").Pokemon & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    remove(id: string): Promise<{
        message: string;
        pokemonToDelete: import("./entities/pokemon.entity").Pokemon & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
}
