import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { tweetTDO } from './tweet-dto';


@Injectable()
export class TweetsService {
  constructor(
    private readonly prisma : PrismaService,
    private readonly JwtService : JwtService
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
  async fetchTweets(authorization : string,cursor : string | undefined | null ,limitNumber : number){
    const token = authorization.replace("Bearer ",'');
    const response = this.JwtService.verify(token,{secret : process.env.JWT_SECRET});
    
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
        },
        _count : {
          select : {
            likes : true,
            replies : true,
            retweets : true
          }
        },
        likes : {
          where : {
            userId : response.id
          },
          select : {
            id : true
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
