import { Body, Controller, Headers, Post, UseGuards } from '@nestjs/common';
import { LikesService } from './likes.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { likeDTO } from './like-dto';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @UseGuards(JwtAuthGuard)
  @Post('toggleLike')
  async createLike(
    @Headers('authorization') authorization : string,
    @Body() likeDTO : likeDTO
  ){
    return await this.likesService.toggleLike(authorization,likeDTO)
  }
}
