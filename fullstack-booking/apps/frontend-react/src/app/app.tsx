// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { BookingDto, BookingStatus } from '@fullstack-booking/shared-dtos';
import NxWelcome from './nx-welcome';
import { useEffect, useState } from 'react';
import { createBooking, getBookings } from './services/bookingservice';

export function App() {

  const [bookings, setBookings]=useState<BookingDto[]>([]);

  useEffect(()=>{
    getBookings().then(setBookings).catch(console.error);
  }, [])

  const addBooking = async()=>{
    const newBooking:BookingDto={
      id:'',
      userId:'varun',
      serviceId:'service1',
      bookingDate:new Date(),
      status:BookingStatus.CONFIRMED
    };
    const saved = await createBooking(newBooking);
    setBookings([...bookings, saved]);
  }

  return (
  <div>
    <h1>Admin All Bookings</h1>
    <button onClick={addBooking}>Add Booking</button>
    <ul>
      {bookings.map(b=>(
        <li key={b.id}>
          {b.id} - {b.status} - {b.userId}
        </li>
      ))}
    </ul>
  </div>
  );
}

export default App;
