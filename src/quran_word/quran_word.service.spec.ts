import { Test, TestingModule } from '@nestjs/testing';
import { QuranWordService } from './quran_word.service';

describe('QuranWordService', () => {
  let service: QuranWordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuranWordService],
    }).compile();

    service = module.get<QuranWordService>(QuranWordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
