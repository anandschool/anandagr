import React, { useState, useEffect } from 'react';

const HolidayList = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const fetchHolidays = async () => {
      const res = await fetch('http://localhost:5000/api/holidays');
      const data = await res.json();
      setHolidays(data);
    };

    fetchHolidays();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">📅 School Holidays</h1>
      <ul className="list-disc ml-6">
        {holidays.map((holiday, index) => (
          <li key={index}>{new Date(holiday.date).toLocaleDateString()} - {holiday.occasion}</li>
        ))}
      </ul>
    </div>
  );
};

export default HolidayList;