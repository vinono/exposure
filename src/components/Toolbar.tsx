import React from "react";

interface ToolbarProps {
  exposure: number;
  aperture: number;
  shutter: number;
  onExposureChange: (value: number) => void;
  onApertureChange: (value: number) => void;
  onShutterChange: (value: number) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  exposure,
  aperture,
  shutter,
  onExposureChange,
  onApertureChange,
  onShutterChange,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        alignItems: "flex-start",
        padding: 16,
        minWidth: 120,
      }}
    >
      <div>
        <div style={{ fontSize: 12, marginBottom: 4 }}>曝光</div>
        <button onClick={() => onExposureChange(exposure - 1)}>-</button>
        <span style={{ margin: "0 8px" }}>{exposure}</span>
        <button onClick={() => onExposureChange(exposure + 1)}>+</button>
      </div>
      <div>
        <div style={{ fontSize: 12, marginBottom: 4 }}>光圈</div>
        <input
          type="range"
          min={1.4}
          max={16}
          step={0.1}
          value={aperture}
          onChange={(e) => onApertureChange(Number(e.target.value))}
        />
        <span style={{ marginLeft: 8 }}>{aperture.toFixed(1)}</span>
      </div>
      <div>
        <div style={{ fontSize: 12, marginBottom: 4 }}>快门</div>
        <input
          type="range"
          min={1}
          max={1000}
          step={1}
          value={shutter}
          onChange={(e) => onShutterChange(Number(e.target.value))}
        />
        <span style={{ marginLeft: 8 }}>{shutter} ms</span>
      </div>
    </div>
  );
};

export default Toolbar;
