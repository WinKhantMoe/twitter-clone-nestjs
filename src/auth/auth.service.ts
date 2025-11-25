import { loginUserDTO } from './login-user-dto';
import { PrismaService } from './../prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { access } from 'fs';
import { createUserDTO } from 'src/auth/create-user-dto';
import * as bcrypt from 'bcrypt'
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly JwtService : JwtService,
    private readonly prisma : PrismaService,
    private readonly usersService : UsersService  

  ) {}

  async signUp(payload : createUserDTO) {
      const hash = await this.encryptPassword(payload.password,10);
      payload.password = hash;
      
  
      return await this.prisma.users.create({
        data : payload,
        select : {
          id : true,
          email : true,
          userTag : true,
          user_profile_image : true,
          phone : true,
          username : true,
          year : true,
          month : true,
          day : true,
  
        }
      })
      
    }
    async login(loginUserDTO : loginUserDTO) {
      const user = await this.usersService.fetchSingleUser(loginUserDTO);
      if(!user) throw new UnauthorizedException('User not found');

      const passwordMatched = await this.decryptPassword(loginUserDTO.password,user.password);
      if(!passwordMatched) throw new UnauthorizedException('Password is incorrect');

      const accessToken = await this.JwtService.signAsync({id : user.id, username : user.username});

      const {password,...safeUser} = user;


      return {safeUser,accessToken};
      
    }
    async encryptPassword(plainText,saltRounds) {
        return await bcrypt.hash(plainText,saltRounds)
      }
      async decryptPassword(plainText,hashed){
        return await bcrypt.compare(plainText,hashed)
      }
}
