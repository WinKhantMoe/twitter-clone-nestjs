import { likeDTO } from './like-dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LikesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly JwtService : JwtService
  ){}
  async toggleLike(authorization : string,likeDTO:likeDTO) {
    const token = authorization.replace("Bearer ",'');
    const response = this.JwtService.verify(token,{secret : process.env.JWT_SECRET});

    const likeExist = await this.prisma.like.findFirst({where : {userId : response.id,}});

    if(likeExist){
      await this.prisma.like.delete({where : {id : likeExist.id}});
    }else{
      const filter : any[] = [];
    if(likeDTO.tweetId !== undefined) filter.push({tweetId : likeDTO.tweetId});
    if(likeDTO.retweetId !== undefined) filter.push({retweetId : likeDTO.retweetId});
    if(likeDTO.replyId !== undefined) filter.push({replyId : likeDTO.replyId});
    return await this.prisma.like.create({
      data : {
        userId : response.id,
        tweetId : likeDTO.tweetId,
        retweetId : likeDTO.retweetId,
        replyId : likeDTO.replyId
      }
    })
  }
    }

    

}
