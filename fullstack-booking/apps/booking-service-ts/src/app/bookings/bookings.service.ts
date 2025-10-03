import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Booking } from '@prisma/client';
import {
  BookingStatus,
  CreateBookingDto,
} from '@fullstack-booking/shared-dtos';
@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Booking[]> {
    const bookings = await this.prisma.booking.findMany();
    return bookings;
  }

  async createBooking(bookingDto: CreateBookingDto): Promise<Booking> {
    return await this.prisma.booking.create({ data: bookingDto });
  }

  async findById(id: string): Promise<Booking | null> {
    return await this.prisma.booking.findUnique({ where: { id } });
  }

  async updateBooking(id: string, status: BookingStatus): Promise<Booking> {
    return await this.prisma.booking.update({
      where: { id },
      data: { status },
    });
  }

  async deleteBooking(id: string): Promise<void> {
    await this.prisma.booking.delete({ where: { id } });
  }
}
