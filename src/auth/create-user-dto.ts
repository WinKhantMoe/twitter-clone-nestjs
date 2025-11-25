import { Transform } from "class-transformer";
import { IsInt, IsOptional, IsString } from "class-validator";

export class createUserDTO{
  @IsString()
  username: string;
  @IsString()
  userTag : string;
  @IsString()
  password?: string;
  @IsOptional()
  @IsInt()
  @Transform(({value}) => value !== undefined ? Number(value) : undefined)
  phone : number;
  @IsOptional()
  email : string;
  @IsOptional()
  user_profile_image : string;
  @IsInt()
  day : number;
  @IsString()
  month : string;
  @IsInt()
  year : number
}