import { Test, TestingModule } from '@nestjs/testing';
import { BookingsService } from './bookings.service';
import { BookingDto, BookingStatus } from '@fullstack-booking/shared-dtos';
import { PrismaService } from '../prisma.service';
import { BookingsController } from './bookings.controller';

describe('BookingsService', () => {
  let service: BookingsService;
   let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingsController],
      providers:[BookingsService,
      {
        provide:PrismaService,
        useValue:{
          booking:{
            findMany:jest.fn(),
            create:jest.fn()
          }
        }
      }
     ]
    }).compile();

    service = module.get<BookingsService>(BookingsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return array of bookings', async () => {
    const bookingResponse: BookingDto[] = [
      new BookingDto('1', 'vishnu', 'hotel', new Date(), BookingStatus.PENDING),
    ];

    (prisma.booking.findMany as jest.Mock).mockResolvedValue(bookingResponse);

    const bookings = await service.findAll();

    expect(bookings).toEqual(bookingResponse);
  });
});
