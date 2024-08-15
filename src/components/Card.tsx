// src/components/ui/card-spotlight.tsx
import React from "react";

interface CardSpotlightProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardSpotlight: React.FC<CardSpotlightProps> = ({
  children,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`relative p-6 bg-gray-800 rounded-lg shadow-lg ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
