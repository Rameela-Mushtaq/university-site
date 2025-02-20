import React from "react";

export const Arrow2 = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2 22L22 2M22 2L7.27132 2M22 2L22 16.4186"
        stroke={color}
        strokeWidth="3"
      />
    </svg>
  );
};
