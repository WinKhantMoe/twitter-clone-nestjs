import { Test, TestingModule } from '@nestjs/testing';
import { RetweetsController } from './retweets.controller';

describe('RetweetsController', () => {
  let controller: RetweetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RetweetsController],
    }).compile();

    controller = module.get<RetweetsController>(RetweetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
