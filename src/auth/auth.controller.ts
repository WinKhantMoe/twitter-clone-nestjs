import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { createUserDTO } from './create-user-dto';
import { loginUserDTO } from './login-user-dto';
import { GoogleLoginDTO } from './google-login-dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService : AuthService) {}

  @Post('register')
    async create(
      @Body()
      createUserDTO : createUserDTO
    ){
      return await this.AuthService.signUp(createUserDTO);
    }
  @Post('login')
      async login(
        @Body()
        loginUserDTO : loginUserDTO
      ){
        return await this.AuthService.login(loginUserDTO);
      }
  @Post('googleLogin')
  async googleLogin(
    @Body()
    GoogleLoginDTO : GoogleLoginDTO
  ){
    return await this.AuthService.googleLogin(GoogleLoginDTO);
  }
}
