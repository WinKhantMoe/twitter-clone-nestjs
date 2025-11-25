import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TweetsModule } from './tweets/tweets.module';
import { AuthModule } from './auth/auth.module';
import { LikesModule } from './likes/likes.module';
import { RetweetsModule } from './retweets/retweets.module';
import { RepliesModule } from './replies/replies.module';


@Module({
  imports: [UsersModule, TweetsModule, AuthModule,
    ConfigModule.forRoot({
              envFilePath: '.env',
              isGlobal: true
            }),
    LikesModule,
    RetweetsModule,
    RepliesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
