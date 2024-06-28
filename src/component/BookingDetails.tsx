import React from 'react';
import { deleteBooking, updateBooking } from '../services/api';

interface BookingDetailsProps {
  booking: { id: number, date: string, time: string, duration: number };
  onDelete: (id: number) => void;
  onUpdate: (id: number, updatedBooking: { date: string, time: string, duration: number }) => void;
}

const BookingDetails: React.FC<BookingDetailsProps> = ({ booking, onDelete, onUpdate }) => {
  const handleDelete = async () => {
    await deleteBooking(booking.id);
    onDelete(booking.id);
  };

  const handleUpdate = async () => {
    const updatedBooking = await updateBooking(booking.id, booking);
    onUpdate(booking.id, updatedBooking);
  };

  return (
    <div>
      <h3>Booking Details</h3>
      <p>Date: {booking.date}</p>
      <p>Time: {booking.time}</p>
      <p>Duration: {booking.duration} hours</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default BookingDetails;


