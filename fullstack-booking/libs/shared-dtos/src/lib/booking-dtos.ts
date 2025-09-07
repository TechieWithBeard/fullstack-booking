export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
}

export class BookingDto {
  constructor(
    public id: string,
    public userId: string,
    public serviceId: string,
    public bookingDate: Date,
    public status: BookingStatus
  ) {}
}
