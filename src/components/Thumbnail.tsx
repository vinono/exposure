import React from "react";

interface ThumbnailProps {
  src: string;
  filter: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ src, filter }) => {
  return (
    <div
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        width: 120,
        height: 80,
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        background: "#222",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={src}
        alt="缩略图"
        style={{ width: "100%", height: "100%", objectFit: "cover", filter }}
      />
    </div>
  );
};

export default Thumbnail;
