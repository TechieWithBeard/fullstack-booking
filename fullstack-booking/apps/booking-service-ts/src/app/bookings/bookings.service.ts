import { BookingDto, BookingStatus } from '@fullstack-booking/shared-dtos';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingsService {
    findAll(): BookingDto[] {
    return [new BookingDto('1', 'vishnu', 'hotel', new Date(), BookingStatus.PENDING)];
  }
}
