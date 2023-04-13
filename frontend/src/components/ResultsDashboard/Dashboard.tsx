import { FileContext } from "@/context/FileContext";
import React, { useContext, useEffect, useState } from "react";
import DiseaseCard from "../DiseaseCard/DiseaseCard";

const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function Dashboard() {
  const classes = ["akiec", "bcc", "bkl", "df", "mel", "nv", "vasc"];
  const [predictions, setPredictions] = useState({
    detection: 0,
    classification: [],
  });
  const { file } = useContext(FileContext);

  useEffect(() => {
    toBase64(file[0])
      .then(async (file: any) => {
        const base64 = file.substring(23);
        const response = await fetch("http://localhost:8000/", {
          method: "POST",
          body: JSON.stringify({ image: base64 }),
        });
        const body = await response.json();
        setPredictions(body);
      })
      .catch(console.error);
  }, [file]);

  return (
    <div className="px-4">
      <h3>Predictions: </h3>
      {predictions && (
        <DiseaseCard
          name={"Skin lesion"}
          prediction={predictions.detection}
          key={-1}
        />
      )}
      {predictions.classification.map((val, index) => (
        <DiseaseCard name={classes[index]} prediction={val} key={index} />
      ))}
    </div>
  );
}

export default Dashboard;
