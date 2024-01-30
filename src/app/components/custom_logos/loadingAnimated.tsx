import React from "react";

const LoadingAnimated = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-full  animate-spin"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        strokeWidth="10"
        r="25"
        strokeDasharray="100 40"
      ></circle>
    </svg>
  );
};

export default LoadingAnimated;
