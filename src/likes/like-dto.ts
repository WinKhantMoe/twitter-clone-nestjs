import { IsOptional, IsUUID } from "class-validator";

export class likeDTO {
  @IsOptional()
  @IsUUID()
  tweetId : string;
  @IsOptional()
  @IsUUID()
  userId : string;
  @IsOptional()
  @IsUUID()
  retweetId : string;
  @IsOptional()
  @IsUUID()
  replyId : string;
}