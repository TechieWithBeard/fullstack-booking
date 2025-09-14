import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../app.module';
describe('BookingController (integration)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  it('POST /bookings creates booking', async () => {
    const booking = {
      userId: 'test-user',
      serviceId: 'service-1',
      bookingDate: new Date(),
      status: 'pending',
    };

    const res = await request(app.getHttpServer())
      .post('/api/bookings')
      .send(booking)
      .expect(201);

    expect(res.body.userId).toBe('test-user');
  });

  afterAll(async () => {
    await app.close();
  });
});
