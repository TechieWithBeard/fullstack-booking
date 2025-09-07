import { BookingDto } from './booking-dtos';

enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
}

describe('bookingDto', () => {
it('should create a instance with valid data',()=>{
  const dto= new BookingDto('1','user-123','hotel-123',new Date('2025-02-02'),BookingStatus.PENDING)

  expect(dto).toBeInstanceOf(BookingDto);
  expect(dto.id).toBe('1');
  expect(dto.userId).toBe('user-123');
  expect(dto.serviceId).toBe('hotel-123');
  expect(dto.bookingDate.toISOString()).toContain('2025-02-02');
  expect(dto.status).toBe(BookingStatus.PENDING);
})

it('should allow only valid status values',()=>{
  const validStatuses:BookingDto['status'][]=[BookingStatus.PENDING,BookingStatus.CANCELLED,BookingStatus.CONFIRMED];
 validStatuses.forEach((status)=>{
  const dto=new BookingDto('2','user-143','hotel-143',new Date(),status);
  expect(dto.status).toBe(status)
 })
})

});
