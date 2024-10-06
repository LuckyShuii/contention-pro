import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Length, IsNumber, IsOptional } from "class-validator";

@Entity()
export class Global extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  @Length(1, 255, {
      message: 'Le dispositif doit avoir entre 1 et 255 caractères.'
  })
  dispositif: string;

  @Column({ type: 'varchar', length: 255 })
  @Length(1, 255, {
      message: 'Le sexe doit avoir entre 1 et 255 caractères.'
  })
  sexe: string;

  @Column({ type: 'varchar', length: 255 })
  @Length(1, 255, {
      message: 'La marque doit avoir entre 1 et 255 caractères.'
  })
  marque: string;

  @Column({ type: 'float', nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'Le champ cheville_min doit être un nombre.' })
  cheville_min: number;

  @Column({ type: 'float', nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'Le champ cheville_max doit être un nombre.' })
  cheville_max: number;

  @Column({ type: 'float', nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'Le champ mollet_min doit être un nombre.' })
  mollet_min: number;

  @Column({ type: 'float', nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'Le champ mollet_max doit être un nombre.' })
  mollet_max: number;

  @Column({ type: 'float', nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'Le champ cuisse_min doit être un nombre.' })
  cuisse_min: number;

  @Column({ type: 'float', nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'Le champ cuisse_max doit être un nombre.' })
  cuisse_max: number;

  @Column({ type: 'float', nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'Le champ hanche_max doit être un nombre.' })
  hanche_max: number;

  @Column({ type: 'varchar', length: 255 })
  @Length(1, 255, {
      message: 'La taille doit avoir entre 1 et 255 caractères.'
  })
  taille: string;

  @Column({ type: 'float', nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'Le champ hauteur_min doit être un nombre.' })
  hauteur_min: number;

  @Column({ type: 'float', nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'Le champ hauteur_max doit être un nombre.' })
  hauteur_max: number;

  @Column({ type: 'varchar', length: 255 })
  @Length(1, 255, {
      message: 'Le champ hauteur doit avoir entre 1 et 255 caractères.'
  })
  hauteur: string;

  @Column({ type: 'varchar', length: 512 })
  @Length(1, 512, {
      message: 'La dénomination doit avoir entre 1 et 512 caractères.'
  })
  denomination: string;
}
