import React, { useState } from 'react';
import { days } from '../days';

interface DashboardProps {
  onSelectDay: (id: number) => void;
  currentDayId: number | null;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectDay, currentDayId }) => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="badge">Project: Photography Tool</div>
        <h1>Photo Exposure Simulator</h1>
        <p>Adjust camera settings like exposure, aperture, and shutter speed to see their effect in real-time.</p>
      </header>
      <div className="days-grid">
        {days.map((day) => {
          const hasError = imageErrors[day.id];
          return (
            <button
              key={day.id}
              className={`day-card ${currentDayId === day.id ? 'active' : ''} ${hasError ? 'no-image' : ''}`}
              onClick={() => onSelectDay(day.id)}
            >
              <div className={`card-image ${hasError ? 'fallback' : ''}`}>
                {!hasError && day.thumbnail && (
                  <img 
                    src={day.thumbnail} 
                    alt={day.title} 
                    onError={() => handleImageError(day.id)}
                  />
                )}
              </div>
              <div className="card-content">
                <span className="day-number">Day {day.id}</span>
                <span className="day-title">{day.title}</span>
              </div>
            </button>
          );
        })}
        {Array.from({ length: 33 - days.length }).map((_, i) => (
          <div key={`placeholder-${i}`} className="day-card placeholder">
            <span className="day-number">Day {days.length + i + 1}</span>
            <span className="day-title">Coming Soon</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
