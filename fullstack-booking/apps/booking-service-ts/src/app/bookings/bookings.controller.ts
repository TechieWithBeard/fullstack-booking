import { Controller, Get } from '@nestjs/common';
import {BookingDto} from '@fullstack-booking/shared-dtos'
import { BookingsService } from './bookings.service';
@Controller('bookings')
export class BookingsController {
 constructor(private readonly bookingsService: BookingsService) {}
    @Get()
    findAll():BookingDto[]{
           return this.bookingsService.findAll();
    }
}
