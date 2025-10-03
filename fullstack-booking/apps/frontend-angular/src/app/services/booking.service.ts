import { inject, Injectable } from '@angular/core';
import { BookingDto, CreateBookingDto } from '@fullstack-booking/shared-dtos';
import { API_CONFIG } from '@fullstack-booking/shared-config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BookingService {
  #baseUrl = API_CONFIG;
  #httpClient = inject(HttpClient);

  getBookings(): Observable<BookingDto[]> {
    return this.#httpClient.get<BookingDto[]>(
      `${this.#baseUrl.bookingServiceUrl}/api/bookings`
    );
  }

  createBooking(booking: CreateBookingDto): Observable<CreateBookingDto> {
    return this.#httpClient.post<CreateBookingDto>(
      `${this.#baseUrl.bookingServiceUrl}/api/bookings`,
      booking
    );
  }
}
