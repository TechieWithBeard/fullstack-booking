import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingsController } from './bookings/bookings.controller';
import { BookingsService } from './bookings/bookings.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, BookingsController],
  providers: [AppService, BookingsService,PrismaService],
})
export class AppModule {}
