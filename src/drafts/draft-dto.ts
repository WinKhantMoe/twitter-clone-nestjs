import { IsArray, IsOptional, IsString, IsUUID } from "class-validator"

export class draftDTO {
  @IsUUID()
  authorId : string
  @IsOptional()
  @IsString()
  content? : string
  @IsArray()
  @IsOptional()
  @IsString({each : true})
  media? : string[]
  @IsUUID()
  @IsOptional()
  tweetId? : string
  @IsUUID()
  @IsOptional()
  retweetId? : string
  @IsUUID()
  @IsOptional()
  replyId? : string
}