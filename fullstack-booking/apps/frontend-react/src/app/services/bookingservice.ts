import {BookingDto } from '@fullstack-booking/shared-dtos';
import {API_CONFIG} from '@fullstack-booking/shared-config';

const API_URL=API_CONFIG.bookingServiceUrl + "/api/bookings";

export async function getBookings():Promise<BookingDto[]>{
    const response = await fetch(API_URL);
    if(!response.ok){
        throw new Error('Failed to fetch bookings');
    }
    return response.json();
}

export async function createBooking(booking:BookingDto):Promise<BookingDto>{
    const response = await fetch(API_URL,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(booking)
        
    });
    if(!response.ok){
        throw new Error('Failed to create booking');
    }
    return response.json();
}

