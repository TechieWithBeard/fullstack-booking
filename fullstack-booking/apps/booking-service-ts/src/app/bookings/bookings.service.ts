import { BookingDto, BookingStatus } from '@fullstack-booking/shared-dtos';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingsService {
      private bookings: BookingDto[] = [];

    findAll(): BookingDto[] {
    return [new BookingDto('1', 'vishnu', 'hotel', new Date(), BookingStatus.PENDING)];
  }

  createBooking(booking:BookingDto):BookingDto{
 const newBooking = { ...booking, id: Date.now().toString() };
    this.bookings.push(newBooking);
    return newBooking
  }
}
