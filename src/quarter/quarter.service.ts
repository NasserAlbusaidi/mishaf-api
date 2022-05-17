import { Injectable } from '@nestjs/common';
import { Prisma, quarter } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class QuarterService {
    constructor(private readonly prisma: PrismaService) {}

    async getByRub(rub: number) {
        return this.prisma.quarter.findMany({
            where: { rub: rub },
        });
    }

    async getAll() {
        return await this.prisma.quarter.findMany();
    }
    
    async getByPage(page: number) : Promise<quarter[]> {
    console.log(page);
        return await this.prisma.$queryRaw`SELECT GROUP_CONCAT(text separator ' ') line  from quran_word where page=${page} group by line order by id`;
    }

    
}
