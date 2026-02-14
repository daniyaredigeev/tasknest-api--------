import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { BoardStatus } from '../board-status.enum';

export class CreateBoardDto {
  @IsNotEmpty({ message: 'Название доски обязательно' })
  @IsString()
  @Length(3, 255, { message: 'Название должно быть от 3 до 255 символов' })
  title: string;

  @IsNotEmpty({ message: 'Описание доски обязательно' })
  @IsString()
  description: string;

  @IsEnum(BoardStatus)
  @IsOptional()
  status?: BoardStatus;
}
