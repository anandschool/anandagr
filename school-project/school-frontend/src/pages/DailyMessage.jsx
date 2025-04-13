import React, { useState, useEffect } from 'react';

const DailyMessage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const res = await fetch('http://localhost:5000/api/message');
      const data = await res.json();
      setMessage(data.content || 'No message for today');
    };

    fetchMessage();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">📜 Daily Message</h1>
      <p>{message}</p>
    </div>
  );
};

export default DailyMessage;