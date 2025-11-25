import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { tweetTDO } from './tweet-dto';


@Injectable()
export class TweetsService {
  constructor(
    private prisma : PrismaService
  ){}
  async makeTweet(tweetTDO: tweetTDO){
    
    return await this.prisma.tweet.create({
      data : {
        content : tweetTDO.content,
        media : tweetTDO.media ?? [],
        authorId : tweetTDO.authorId
      },
  include: {
    author : {
      select :{
      id : true,
      email : true,
      userTag : true,
      user_profile_image : true,
      phone : true,
      username : true,
      year : true,
      month : true,
      day : true
    }
    }
  }
  });
  }
  async fetchTweets(cursor : string | undefined | null ,limitNumber : number){
    const tweets = await this.prisma.tweet.findMany({
      take : limitNumber + 1,
      orderBy : { id : "desc"},
      cursor : cursor ? {  id: cursor } : undefined,
      skip : cursor ? 1 : 0,
      include : {
        author: {
          select : {
            id : true,
            username : true,
            userTag : true,
            user_profile_image : true
          }
        }
      }
    })

    let nextCursor : string | null = null;
    
    if(tweets.length > limitNumber){
      const cursorTweet = tweets[limitNumber - 1];
      nextCursor = cursorTweet.id;
      tweets.splice(limitNumber);
    }

    return { tweets , nextCursor};
  }

  

  
}
