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
exports.Global = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let Global = class Global extends typeorm_1.BaseEntity {
};
exports.Global = Global;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Global.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.Length)(1, 255, {
        message: 'Le dispositif doit avoir entre 1 et 255 caractères.'
    }),
    __metadata("design:type", String)
], Global.prototype, "dispositif", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.Length)(1, 255, {
        message: 'Le sexe doit avoir entre 1 et 255 caractères.'
    }),
    __metadata("design:type", String)
], Global.prototype, "sexe", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.Length)(1, 255, {
        message: 'La marque doit avoir entre 1 et 255 caractères.'
    }),
    __metadata("design:type", String)
], Global.prototype, "marque", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Le champ cheville_min doit être un nombre.' }),
    __metadata("design:type", Number)
], Global.prototype, "cheville_min", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Le champ cheville_max doit être un nombre.' }),
    __metadata("design:type", Number)
], Global.prototype, "cheville_max", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Le champ mollet_min doit être un nombre.' }),
    __metadata("design:type", Number)
], Global.prototype, "mollet_min", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Le champ mollet_max doit être un nombre.' }),
    __metadata("design:type", Number)
], Global.prototype, "mollet_max", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Le champ cuisse_min doit être un nombre.' }),
    __metadata("design:type", Number)
], Global.prototype, "cuisse_min", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Le champ cuisse_max doit être un nombre.' }),
    __metadata("design:type", Number)
], Global.prototype, "cuisse_max", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Le champ hanche_max doit être un nombre.' }),
    __metadata("design:type", Number)
], Global.prototype, "hanche_max", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.Length)(1, 255, {
        message: 'La taille doit avoir entre 1 et 255 caractères.'
    }),
    __metadata("design:type", String)
], Global.prototype, "taille", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Le champ hauteur_min doit être un nombre.' }),
    __metadata("design:type", Number)
], Global.prototype, "hauteur_min", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Le champ hauteur_max doit être un nombre.' }),
    __metadata("design:type", Number)
], Global.prototype, "hauteur_max", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_validator_1.Length)(1, 255, {
        message: 'Le champ hauteur doit avoir entre 1 et 255 caractères.'
    }),
    __metadata("design:type", String)
], Global.prototype, "hauteur", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 512 }),
    (0, class_validator_1.Length)(1, 512, {
        message: 'La dénomination doit avoir entre 1 et 512 caractères.'
    }),
    __metadata("design:type", String)
], Global.prototype, "denomination", void 0);
exports.Global = Global = __decorate([
    (0, typeorm_1.Entity)()
], Global);
//# sourceMappingURL=global.js.map