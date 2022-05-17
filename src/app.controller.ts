import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { QuarterService } from './quarter/quarter.service';
import { quarter as QuarterModel, quran_ayat as AyatModel } from '@prisma/client'
import { agent } from 'supertest';
import { QuranWordService } from './quran_word/quran_word.service';

@Controller()
export class AppController {
  constructor(
    private readonly quarterService: QuarterService,
    private readonly ayatService: QuranWordService
    ) {}

    @Get('quarter')
    async quarters(): Promise<QuarterModel[]> {
        return await this.quarterService.getAll( );
        
    }

    @Get('page/:page')
    async getByPage(@Param() params: any ): Promise<AyatModel[]> {
        
        return await this.ayatService.getByPage(params.page);
    }

  
}
