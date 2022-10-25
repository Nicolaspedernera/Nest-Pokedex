"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSeedDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_seed_dto_1 = require("./create-seed.dto");
class UpdateSeedDto extends (0, mapped_types_1.PartialType)(create_seed_dto_1.CreateSeedDto) {
}
exports.UpdateSeedDto = UpdateSeedDto;
//# sourceMappingURL=update-seed.dto.js.map