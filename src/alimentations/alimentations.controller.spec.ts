import { Test, TestingModule } from '@nestjs/testing';
import { AlimentationsController } from './alimentations.controller';
import { AlimentationsService } from './alimentations.service';

describe('AlimentationsController', () => {
  let controller: AlimentationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlimentationsController],
      providers: [AlimentationsService],
    }).compile();

    controller = module.get<AlimentationsController>(AlimentationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
