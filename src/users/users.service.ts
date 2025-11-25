import { fetch3Users } from './fetch-3each-user-dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { userResponse } from './user';
import { createUserDTO } from '../auth/create-user-dto';
import { loginUserDTO } from '../auth/login-user-dto';
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma.service';
import { log } from 'console';
import { JwtService } from '@nestjs/jwt';
import { take } from 'rxjs';


@Injectable()
export class UsersService {
  constructor(
    private prisma : PrismaService
  ) {}
  

  async fetchSingleUser(loginUserDTO: loginUserDTO) { 
    const filter : any[] = [];
    if(loginUserDTO.username !== undefined) filter.push({username : loginUserDTO.username});
    if(loginUserDTO.email !== undefined) filter.push({email : loginUserDTO.email});
    if(loginUserDTO.phone !== undefined) filter.push({phone : loginUserDTO.phone});

    const user = await this.prisma.users.findFirst({where : {OR : filter},
    select :{
      id : true,
      email : true,
      userTag : true,
      user_profile_image : true,
      phone : true,
      username : true,
      year : true,
      month : true,
      day : true,
      password : true
    }});
 

    // console.log(filter[0]);;
    // console.log(loginUserDTO.password);
    // console.log(user.password);
    return user;


  }
  async encryptPassword(plainText,saltRounds) {
    return await bcrypt.hash(plainText,saltRounds)
  }
  async decryptPassword(plainText,hashed){
    return await bcrypt.compare(plainText,hashed)
  }
  async fetch3Users(cursor : string | null | undefined,takeNumber : number){
    const users = await this.prisma.users.findMany({
      take : takeNumber + 1,
      cursor : cursor ? { id : cursor} : undefined,
      skip : cursor ? 1 : 0,
      select :{
        id: true,
        user_profile_image : true,
        username : true,
        userTag : true
      },
    });
    let nextCursor : string | null = null;
    if(users.length > takeNumber){
      const cursorUser = users[takeNumber - 1];
      nextCursor = cursorUser.id;
      users.splice(takeNumber);
    }
    return {users , nextCursor};
  }
}
