import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, quran_ayat } from '@prisma/client';
@Injectable()
export class QuranWordService {
    constructor(private readonly prisma: PrismaService) {}


    async getByPage(page: number) : Promise<quran_ayat[]> {
        return await this.prisma.$queryRaw`SELECT GROUP_CONCAT(text separator ' ') line  from quran_word where page=${page} group by line order by id`;
    }
}
