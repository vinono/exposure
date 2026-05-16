import { useState } from 'react';
import DayCanvas from './DayCanvas';

interface DayItem {
  id: string;
  name: string;
}

const dayData: DayItem[] = [
  { id: '001', name: 'Day 001: The Beginning' },
  { id: '002', name: 'Day 002: Exploring' },
  { id: '003', name: 'Day 003: Discovery' },
];

function HomePage() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const handleDayClick = (dayId: string) => {
    setSelectedDay(dayId);
  };

  if (selectedDay) {
    return (
      <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <button onClick={() => setSelectedDay(null)} style={{ position: 'absolute', top: 20, left: 20, padding: '10px 20px', cursor: 'pointer' }}>Back to Home</button>
        <h2>Day {selectedDay} Canvas</h2>
        <DayCanvas dayId={selectedDay} />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', padding: 20 }}>
      <h1 style={{ textAlign: 'center', marginBottom: 40 }}>33 Days of Creative Coding</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          maxWidth: 960,
          margin: '0 auto',
        }}
      >
        {dayData.map((day) => (
          <div
            key={day.id}
            onClick={() => handleDayClick(day.id)}
            style={{
              border: '1px solid white',
              padding: 20,
              textAlign: 'center',
              cursor: 'pointer',
              borderRadius: 8,
              backgroundColor: '#333',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#555')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#333')}
          >
            <h2>33days {day.id}</h2>
            <p>{day.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
