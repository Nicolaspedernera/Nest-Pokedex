"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const pokemon_entity_1 = require("./entities/pokemon.entity");
let PokemonService = class PokemonService {
    constructor(pokemonModel) {
        this.pokemonModel = pokemonModel;
    }
    async create(createPokemonDto) {
        createPokemonDto.name = createPokemonDto.name.toLowerCase();
        try {
            const pokemonCreated = await this.pokemonModel.create(createPokemonDto);
            return pokemonCreated;
        }
        catch (err) {
            this.handleExceptions(err);
        }
    }
    async findAll(paginationDto) {
        const { page = 1, limit = 0 } = paginationDto;
        const skip = (page - 1) * limit;
        return await this.pokemonModel.find().limit(limit).skip(skip).sort();
    }
    async findOne(term) {
        let pokemon;
        if (!isNaN(+term)) {
            pokemon = await this.pokemonModel.findOne({ no: term });
        }
        if ((0, mongoose_2.isValidObjectId)(term)) {
            pokemon = await this.pokemonModel.findById({ _id: term });
        }
        if (!pokemon) {
            pokemon = await this.pokemonModel.findOne({
                name: term.toLowerCase().trim(),
            });
        }
        if (!pokemon) {
            throw new common_1.NotFoundException(`Pokemon with id, name or no "${term}" not found`);
        }
        return pokemon;
    }
    async update(term, updatePokemonDto) {
        const pokemonFinded = await this.findOne(term);
        let { name, no } = updatePokemonDto;
        name = name === null || name === void 0 ? void 0 : name.toLowerCase().trim();
        try {
            const pokemonUpdated = await this.pokemonModel.findByIdAndUpdate(pokemonFinded.id, { name, no }, { new: true });
            return { message: 'Updated', pokemonUpdated };
        }
        catch (err) {
            this.handleExceptions(err);
        }
    }
    async remove(id) {
        const pokemonToDelete = await this.pokemonModel.findByIdAndDelete(id);
        if (!pokemonToDelete) {
            throw new common_1.BadRequestException(`Cannot find "${id}" in DataBase.`);
        }
        return { message: 'Deleted', pokemonToDelete };
    }
    handleExceptions(err) {
        if (err.code === 11000) {
            throw new common_1.BadRequestException(`The pokemon already exist in the data base ${JSON.stringify(err.keyValue)}`);
        }
        console.error(err);
        throw new common_1.InternalServerErrorException(`The pokemon could not be created---Check sever logs.`);
    }
};
PokemonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(pokemon_entity_1.Pokemon.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PokemonService);
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map