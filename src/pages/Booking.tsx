import React, { useState, useEffect } from 'react';
import BookingForm from '../component/BookingForm';
import BookingDetails from '../component/BookingDetails';
import { getBookings } from '../services/api';

const Booking: React.FC = () => {
  const [booking, setBooking] = useState<{ id: number, date: string, time: string, duration: number } | null>(null);
  const [bookings, setBookings] = useState<Array<{ id: number, date: string, time: string, duration: number }>>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const data = await getBookings();
      setBookings(data.data);
    };

    fetchBookings();
  }, []);

  const handleBooking = (newBooking: { id: number, date: string, time: string, duration: number }) => {
    setBookings([...bookings, newBooking]);
    setBooking(newBooking);
  };

  const handleDelete = (id: number) => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  const handleUpdate = (id: number, updatedBooking: { date: string, time: string, duration: number }) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, ...updatedBooking } : b));
  };

  return (
    <div>
      <h2>Book a Cricket Activity</h2>
      <BookingForm onBooking={handleBooking} />
      {booking && <BookingDetails booking={booking} onDelete={handleDelete} onUpdate={handleUpdate} />}
      <h3>All Bookings</h3>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            {booking.date} - {booking.time} ({booking.duration} hours)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booking;


