import { Test, TestingModule } from '@nestjs/testing';
import { BookingsController } from './bookings.controller';
import { BookingDto, BookingStatus } from '@fullstack-booking/shared-dtos';
import { BookingsService } from './bookings.service';
import { Controller } from '@nestjs/common';

describe('BookingsController', () => {
  let controller: BookingsController;
  let service: BookingsService;

  beforeEach(async () => {
     const mockBookingsService = {
      findAll: jest.fn(),
      createBooking: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingsController],
      providers:[
        {
          provide: BookingsService,
          useValue: mockBookingsService,
        }
      ]
    }).compile();

    controller = module.get<BookingsController>(BookingsController);
    service = module.get<BookingsService>(BookingsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  it('should return an array of bookings', async () => {
    const result: BookingDto[] = [
      new BookingDto(
       '1', 'vishnu', 'hotel', new Date(), BookingStatus.PENDING
      ),
    ];

    // Mock service method
    jest.spyOn(service, 'findAll').mockResolvedValue(result);

    const bookings = await controller.getAll();

    expect(bookings).toEqual(result);
    expect(bookings[0]).toBeInstanceOf(BookingDto);
    expect(bookings[0].status).toBe(BookingStatus.PENDING);
  });



  it('should return a new added booking',async ()=>{
  const newBooking =  new BookingDto(
       '1', 'vishnu', 'hotel', new Date(), BookingStatus.PENDING
      );
      (service.createBooking as jest.Mock).mockResolvedValue(newBooking);
      const booking= await controller.create(newBooking);
      expect(booking.userId).toBe('vishnu')
      expect(booking.status).toBe(BookingStatus.PENDING)
})



});


