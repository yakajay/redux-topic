import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const BusBooking = () => {
  const dispatch = useDispatch();
  const bus = useSelector(state => state.kumar.bus);
  const bookingData = bus.bookings; // [{seat, name}, ...]

  return (
    <div style={{ marginTop: 16 }}>
      <h2>{bus.name} — {bus.seats} seats</h2>
      {bookingData.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul style={{ paddingLeft: 18 }}>
          {bookingData.map((item) => (
            <li key={item.seat} style={{ marginBottom: 6 }}>
              <strong>{item.name}</strong> — Seat {item.seat}{' '}
                Cancel
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BusBooking;
