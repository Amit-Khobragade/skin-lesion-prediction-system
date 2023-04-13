import React from "react";

function IndividualPrediction({ prediction }: { prediction: number }) {
  return (
    <div className="p-4 w-100">
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: prediction * 100 + "%" }}
          aria-valuenow={prediction}
          aria-valuemin={0}
          aria-valuemax={1}
        >
          {prediction > 0.1 ? (prediction * 100).toFixed(2) + "%" : ""}
        </div>
        {prediction < 0.1 ? (prediction * 100).toFixed(2) + "%" : ""}
      </div>
    </div>
  );
}

export default IndividualPrediction;
