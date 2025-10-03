import { IsString, IsDateString, IsIn } from 'class-validator';
import { BookingStatus } from './booking-dtos';

export class CreateBookingDto {
  @IsString()
  userId!: string;

  @IsString()
  serviceId!: string;

  @IsDateString()
  bookingDate!: Date; // will be validated as ISO 8601 date

  @IsString()
  @IsIn(Object.values(BookingStatus))
  status!: string;
}
