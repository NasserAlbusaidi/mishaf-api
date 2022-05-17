import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { QuarterController } from './quarter/quarter.controller';
import { QuarterService } from './quarter/quarter.service';
import { QuranWordService } from './quran_word/quran_word.service';

@Module({
  imports: [],
  controllers: [AppController, QuarterController],
  providers: [AppService, PrismaService , QuarterService, QuranWordService],
})
export class AppModule {}
