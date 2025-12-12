import { IsOptional, IsString } from "class-validator";

export class GoogleLoginDTO {
  @IsString()
  @IsOptional()
  username : string
  @IsString()
  @IsOptional()
  email : string
  @IsString()
  @IsOptional()
  user_profile_image : string
}