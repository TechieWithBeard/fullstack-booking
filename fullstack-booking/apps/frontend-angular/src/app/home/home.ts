import { Component, inject, OnInit } from '@angular/core';
import {
  BookingDto,
  BookingStatus,
  CreateBookingDto,
} from '@fullstack-booking/shared-dtos';
import { BookingService } from '../services/booking.service';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  bookings: (BookingDto | CreateBookingDto)[] = [];

  #bookingService = inject(BookingService);

  ngOnInit(): void {
    this.#bookingService
      .getBookings()
      .subscribe((data) => (this.bookings = data));
  }

  addBooking(): void {
    const newBooking: CreateBookingDto = {
      userId: 'user-1',
      serviceId: 'service-1',
      bookingDate: new Date(),
      status: BookingStatus.PENDING,
    };
    this.#bookingService.createBooking(newBooking).subscribe((b) => {
      this.bookings.push(b);
    });
  }
}
