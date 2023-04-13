import React, { useState } from "react";
import IndividualPrediction from "../IndividualPrediction/IndividualPrediction";
import Popup from "../Popup/Popup";

function DiseaseCard({
  name,
  prediction,
}: {
  name: string;
  prediction: number;
}) {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <div
        className="d-flex flex-column align-items-start w-100 p-4 hover-shadow hover-zoom card my-4"
        style={{ cursor: "pointer" }}
        onClick={() => setPopup(true)}
      >
        <h5 className="text-light font-monospace">{name}</h5>
        <IndividualPrediction prediction={prediction} />
      </div>
      {popup && <Popup name={name} closePopup={setPopup} />}
    </>
  );
}

export default DiseaseCard;
