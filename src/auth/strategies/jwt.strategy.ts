import { PassportStrategy } from '@nestjs/passport';
import {Strategy,ExtractJwt} from 'passport-jwt';
import { Jwt } from './../../../node_modules/@types/jsonwebtoken/index.d';
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey : process.env.JWT_SECRET
    })
  }

  async validate(payload : any){
    return {payload}
  }
}