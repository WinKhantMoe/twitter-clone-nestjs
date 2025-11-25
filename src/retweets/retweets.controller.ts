import { RetweetsService } from './retweets.service';
import { Retweet } from './../../generated/prisma/index.d';
import { Controller } from '@nestjs/common';

@Controller('retweets')
export class RetweetsController {
  constructor(private readonly RetweetsService : RetweetsService){}
}
