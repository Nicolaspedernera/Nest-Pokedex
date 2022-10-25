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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePokemonDto = void 0;
const class_validator_1 = require("class-validator");
class CreatePokemonDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'The name of the Pokemon must be a string!' }),
    (0, class_validator_1.MinLength)(1, {
        message: 'The name of the Pokemon must have more the one character...',
    }),
    __metadata("design:type", String)
], CreatePokemonDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'The no must be a number!' }),
    (0, class_validator_1.IsPositive)({ message: 'The no must be greater than zero!' }),
    (0, class_validator_1.Min)(1, { message: 'The no must be greater than 1..' }),
    __metadata("design:type", Number)
], CreatePokemonDto.prototype, "no", void 0);
exports.CreatePokemonDto = CreatePokemonDto;
//# sourceMappingURL=create-pokemon.dto.js.map