import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookSeat } from './redux/bookingSlice';

const BookingForm = () => {
  const dispatch = useDispatch();
  const seats = useSelector(state => state.kumar.bus.seats);
  const taken = useSelector(state => state.kumar.bus.bookings.map(b => b.seat));

  const [name, setName] = useState('');
  const [seat, setSeat] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const seatNum = Number(seat);

    if (!name.trim()) {
      alert('Please enter a name');
      return;
    }
    if (!Number.isInteger(seatNum) || seatNum < 1 || seatNum > seats) {
      alert(`Seat must be a number between 1 and ${seats}`);
      return;
    }
    if (taken.includes(seatNum)) {
      alert(`Seat ${seatNum} is already booked`);
      return;
    }

    dispatch(bookSeat({ seat: seatNum, name: name.trim() }));
    setName('');
    setSeat('');
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: 8, maxWidth: 320 }}>
      <h3>Book a Seat</h3>
      <input
        placeholder="Passenger name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder={`Seat number (1-${seats})`}
        value={seat}
        onChange={(e) => setSeat(e.target.value)}
      />
      <button type="submit">Book</button>
      <small>Taken seats: {taken.length ? taken.join(', ') : 'none'}</small>
    </form>
  );
};

export default BookingForm;
