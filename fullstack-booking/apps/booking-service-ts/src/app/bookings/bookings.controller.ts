import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookingDto } from '@fullstack-booking/shared-dtos';
import { BookingsService } from './bookings.service';
@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Get()
  async getAll(): Promise<BookingDto[]> {
    return this.bookingsService.findAll();
  }

  @Post()
  async create(@Body() booking: BookingDto): Promise<BookingDto> {
    return this.bookingsService.createBooking(booking);
  }
}
