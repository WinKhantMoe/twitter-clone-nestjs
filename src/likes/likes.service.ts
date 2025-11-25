import { likeDTO } from './like-dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LikesService {
  constructor(
    private prisma: PrismaService
  ){}
  async makeLike(likeDTO:likeDTO) {
     const filter : any[] = [];
    if(likeDTO.tweetId !== undefined) filter.push({tweetId : likeDTO.tweetId});
    if(likeDTO.retweetId !== undefined) filter.push({retweetId : likeDTO.retweetId});
    if(likeDTO.replyId !== undefined) filter.push({replyId : likeDTO.replyId});
    return await this.prisma.like.create({
      data : {
        userId : likeDTO.userId,
        tweetId : likeDTO.tweetId,
        retweetId : likeDTO.retweetId,
        replyId : likeDTO.replyId
      }
    })
  }

}
