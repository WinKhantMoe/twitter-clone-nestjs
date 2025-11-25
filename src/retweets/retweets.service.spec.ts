import { Test, TestingModule } from '@nestjs/testing';
import { RetweetsService } from './retweets.service';

describe('RetweetsService', () => {
  let service: RetweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RetweetsService],
    }).compile();

    service = module.get<RetweetsService>(RetweetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
