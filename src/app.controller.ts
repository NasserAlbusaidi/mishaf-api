import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { QuarterService } from './quarter/quarter.service';
import { quarter as QuarterModel } from '@prisma/client'
import { agent } from 'supertest';

@Controller()
export class AppController {
  constructor(
    private readonly quarterService: QuarterService
    ) {}

    @Get('quarter')
    async quarters(): Promise<QuarterModel[]> {
        return await this.quarterService.getAll( );
        
    }

    @Get('page/:page')
    async getByPage(@Param() params: any ): Promise<QuarterModel[]> {
        
        return await this.quarterService.getByPage(params.page);
    }

  
}
