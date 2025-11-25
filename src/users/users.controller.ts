import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDTO } from '../auth/create-user-dto';
import { loginUserDTO } from '../auth/login-user-dto';
import { fetch3Users } from './fetch-3each-user-dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService : UsersService){}
  
  @UseGuards(JwtAuthGuard)
  @Get('fetch3Users')
  async fetch3Users(
    @Query('cursor') cursor ?: string,
    @Query('take') take ?: string 
  ){
    
    const takeNumber = parseInt(take ?? '3',10);
    return await this.userService.fetch3Users(cursor,takeNumber);
  }

}
