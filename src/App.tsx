import { useState } from 'react';
import Dashboard from './components/Dashboard';
import P5Wrapper from './components/P5Wrapper';
import { days } from './days';

function App() {
  const [selectedDayId, setSelectedDayId] = useState<number | null>(null);
  const [isInfoVisible, setIsInfoVisible] = useState(true);

  const selectedDay = days.find((d) => d.id === selectedDayId);

  return (
    <>
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      {selectedDayId === null ? (
        <Dashboard
          onSelectDay={(id) => setSelectedDayId(id)}
          currentDayId={selectedDayId}
        />
      ) : (
        <div className="p5-viewer">
          <button className="back-btn" onClick={() => setSelectedDayId(null)}>
            ← Back to Dashboard
          </button>
          
          {selectedDay && (
            <>
              <P5Wrapper sketch={selectedDay.sketch} />
              <div className={`sketch-info ${isInfoVisible ? 'visible' : 'minimized'}`}>
                <button 
                  className="info-toggle"
                  onClick={() => setIsInfoVisible(!isInfoVisible)}
                  aria-label={isInfoVisible ? "Minimize info" : "Show info"}
                >
                  {isInfoVisible ? '−' : '+'}
                </button>
                
                {isInfoVisible ? (
                  <div className="info-content">
                    <span className="day-number">Day {selectedDay.id}</span>
                    <h2>{selectedDay.title}</h2>
                    <p>{selectedDay.description}</p>
                  </div>
                ) : (
                  <div className="info-mini">
                    <span className="day-number-mini">Day {selectedDay.id}</span>
                    <span className="day-title-mini">{selectedDay.title}</span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
