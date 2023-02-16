import { Test, TestingModule } from '@nestjs/testing';
import { AlimentationsService } from './alimentations.service';

describe('AlimentationsService', () => {
  let service: AlimentationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlimentationsService],
    }).compile();

    service = module.get<AlimentationsService>(AlimentationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
