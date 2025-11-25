import { IsOptional, IsString } from 'class-validator';
export class loginUserDTO {
  @IsOptional()
  username : string;
  @IsOptional()
  email : string;
  @IsOptional()
  phone : number;
  @IsString()
  password : string;
}