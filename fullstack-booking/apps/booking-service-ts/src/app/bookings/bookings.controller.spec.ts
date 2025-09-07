import { Test, TestingModule } from '@nestjs/testing';
import { BookingsController } from './bookings.controller';
import { BookingDto, BookingStatus } from '@fullstack-booking/shared-dtos';
import { BookingsService } from './bookings.service';

describe('BookingsController', () => {
  let controller: BookingsController;
  let service: BookingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingsController],
      providers:[BookingsService]
    }).compile();

    controller = module.get<BookingsController>(BookingsController);
    service = module.get<BookingsService>(BookingsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  it('should return an array of bookings', () => {
    const result: BookingDto[] = [
      new BookingDto(
       '1', 'vishnu', 'hotel', new Date(), BookingStatus.PENDING
      ),
    ];

    // Mock service method
    jest.spyOn(service, 'findAll').mockImplementation(() => result);

    const bookings = controller.findAll();

    expect(bookings).toEqual(result);
    expect(bookings[0]).toBeInstanceOf(BookingDto);
    expect(bookings[0].status).toBe(BookingStatus.PENDING);
  });
});
