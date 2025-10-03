import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Booking } from '@prisma/client';
import {
  BookingStatus,
  CreateBookingDto,
} from '@fullstack-booking/shared-dtos';
@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Get()
  async getAll(): Promise<Booking[]> {
    return this.bookingsService.findAll();
  }

  // Get a specific booking by ID
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Booking | null> {
    const booking = await this.bookingsService.findById(id);
    if (!booking) {
      throw new NotFoundException('Booking with id ${id} not found ');
    }
    return booking;
  }

  @Post()
  async create(@Body() bookingDto: CreateBookingDto): Promise<Booking> {
    return this.bookingsService.createBooking(bookingDto);
  }

  @Post(':id/update-status')
  async updateBookingStatus(
    @Param('id') id: string,
    @Body('status') status: BookingStatus
  ): Promise<Booking> {
    const booking = await this.bookingsService.updateBooking(id, status);
    if (!booking) {
      throw new NotFoundException(`Booking with id ${id} not found`);
    }
    return booking;
  }

  @Delete(':id')
  async deleteBooking(@Param('id') id: string): Promise<void> {
    return await this.bookingsService.deleteBooking(id);
  }
}
