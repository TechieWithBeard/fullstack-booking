import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookingDto } from '@fullstack-booking/shared-dtos';
import { BookingsService } from './bookings.service';
@Controller('bookings')
export class BookingsController {

  constructor(private readonly bookingsService: BookingsService) {}
  @Get()
  getAll(): BookingDto[] {
    return this.bookingsService.findAll();
  }

  @Post()
  create(@Body() booking: BookingDto): BookingDto {
   
    return this.bookingsService.createBooking(booking)
  }
}
