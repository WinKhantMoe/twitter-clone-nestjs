import { RetweetsService } from './retweets.service';

import { Controller } from '@nestjs/common';

@Controller('retweets')
export class RetweetsController {
  constructor(private readonly RetweetsService : RetweetsService){}
}
