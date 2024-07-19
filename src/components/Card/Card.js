import React, { useState } from 'react';
import './Card.css'; // Importing CSS for styling

const Card = () => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="card">
      <h2 className="card-title">Your Message</h2>
      <div className="message-input-container">
        <textarea
          className="message-input"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message here..."
        />
      </div>
      <button className="submit-button">Submit</button>
    </div>
  );
};

export default Card;