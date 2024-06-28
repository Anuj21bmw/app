import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337/api',
});

export const getBookings = async () => {
  const response = await api.get('/bookings');
  return response.data;
};

export const createBooking = async (data: { date: string, time: string, duration: number }) => {
  const response = await api.post('/bookings', { data });
  return response.data;
};

export const updateBooking = async (id: number, data: { date: string, time: string, duration: number }) => {
  const response = await api.put(`/bookings/${id}`, { data });
  return response.data;
};

export const deleteBooking = async (id: number) => {
  const response = await api.delete(`/bookings/${id}`);
  return response.data;
};



