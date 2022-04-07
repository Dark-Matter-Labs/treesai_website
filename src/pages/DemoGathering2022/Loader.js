import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container mt-20 ml-20">
      <div className="loading-spinner"></div>
      <p>Running your scenario...</p>
    </div>
  );
}
