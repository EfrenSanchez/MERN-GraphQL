//Dependencies
import React from 'react';

//Style
import "./BookingList.css";

const bookinList = props => (
    <ul className="bookings_list">
    {props.bookings.map(booking => (
      <li key={booking._id} className="bookings__item">
        <div className="bookings__item-data">
          {booking.event.title} -{" "}
          {new Date(booking.createdAt).toLocaleDateString()}
        </div>
        <div className="bookings__item-actions">
          <button className="btn" onClick={props.onDelete.bind(this, booking._id)}>Cancel</button>
        </div>
      </li>
    ))}
  </ul>
);

export default bookinList;

