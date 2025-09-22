import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: 'Ajay' },
  bus: {
    id: '1',
    name: 'volvo',
    seats: 30,
    bookings: [], // array of { seat: number, name: string }
  },
};

const bookingSlice = createSlice({
  name: 'kumar',
  initialState,
  reducers: {
    bookSeat: (state, action) => {
      const booking = action.payload; // { seat, name }
      const seatTaken = state.bus.bookings.some(b => b.seat === booking.seat);
      if (!seatTaken) {
        state.bus.bookings.push(booking);
      }
    },
    cancelSeat: (state, action) => {
      const seatNumber = action.payload;
      state.bus.bookings = state.bus.bookings.filter(b => b.seat !== seatNumber);
    },
  },
});

export const { bookSeat, cancelSeat } = bookingSlice.actions;
export default bookingSlice.reducer;
