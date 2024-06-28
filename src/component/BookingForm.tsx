import React, { useState } from 'react';
import { createBooking } from '../services/api';

interface BookingFormProps {
  onBooking: (booking: { id: number, date: string, time: string, duration: number }) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onBooking }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    duration: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newBooking = await createBooking(formData);
    onBooking(newBooking);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>
      <label>
        Time:
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </label>
      <label>
        Duration (hours):
        <input type="number" name="duration" value={formData.duration} onChange={handleChange} required />
      </label>
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;


