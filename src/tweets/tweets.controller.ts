import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { tweetTDO } from './tweet-dto';
import { TweetsService } from './tweets.service';
import { Body, Controller,Post, UseGuards,Get,Query,Headers } from '@nestjs/common';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly TweetService : TweetsService){}
  @UseGuards(JwtAuthGuard)
  @Post('createTweet')
  async createTweet(
    @Body()
    tweetTDO : tweetTDO
  ){
    return await this.TweetService.makeTweet(tweetTDO);
  }
  @UseGuards(JwtAuthGuard)
  @Get('fetchTweets')
  async fetchTweets(
    @Headers('authorization') authorization : string,
    @Query('cursor') cursor ?: string,
    @Query('limit') limit ?: string 
  ){
    const limitNumber = parseInt(limit ?? '10',10);
    return await this.TweetService.fetchTweets(authorization,cursor,limitNumber);
  }

}
