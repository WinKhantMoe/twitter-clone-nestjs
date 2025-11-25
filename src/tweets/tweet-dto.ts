import { IsArray, IsOptional, IsString, IsUUID } from "class-validator";

export class tweetTDO{
  @IsUUID()
  authorId : string;
  @IsOptional()
  @IsString()
  content? : string;
  @IsArray()
  @IsOptional()
  @IsString({each : true})
  media? : string[]
}