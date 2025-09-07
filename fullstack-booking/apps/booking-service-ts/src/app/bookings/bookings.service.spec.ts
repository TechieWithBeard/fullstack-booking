import { Test, TestingModule } from '@nestjs/testing';
import { BookingsService } from './bookings.service';
import { BookingDto, BookingStatus } from '@fullstack-booking/shared-dtos';

describe('BookingsService', () => {
  let service: BookingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingsService],
    }).compile();

    service = module.get<BookingsService>(BookingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return array of bookings',()=>{
    const bookingResponse:BookingDto[] = [new BookingDto('1','vishnu','hotel',new Date(),BookingStatus.PENDING)]

    const bookings =  service.findAll();

    expect(bookings).toEqual(bookingResponse)
    

  })
});
