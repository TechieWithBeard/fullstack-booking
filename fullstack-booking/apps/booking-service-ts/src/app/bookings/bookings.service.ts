import { BookingDto, BookingStatus } from '@fullstack-booking/shared-dtos';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BookingsService {
  constructor(private prisma:PrismaService){}
      private bookings: BookingDto[] = [];

    findAll():Promise<BookingDto[]> {
   return this.prisma.booking.findMany();
  }

  createBooking(booking:BookingDto):Promise<BookingDto>{
    return this.prisma.booking.create({data:booking});
  }
}
