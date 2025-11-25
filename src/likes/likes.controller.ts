import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LikesService } from './likes.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { likeDTO } from './like-dto';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @UseGuards(JwtAuthGuard)
  @Post('createLike')
  async createLike(
    @Body() likeDTO : likeDTO
  ){
    return await this.likesService.makeLike(likeDTO)
  }
}
