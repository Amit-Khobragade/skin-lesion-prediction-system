import Dashboard from "@/components/ResultsDashboard/Dashboard";
import { FileContext } from "@/context/FileContext";
import React, { useContext } from "react";
import Image from "next/image";

function Results() {
  const { file } = useContext(FileContext);
  return (
    <div>
      <div className="d-grid p-4" style={{ placeItems: "center" }}>
        <Image
          src={URL.createObjectURL(new Blob(file, { type: "application/zip" }))}
          className="rounded"
          alt="uploaded image"
          width={512}
          height={512}
        />
      </div>
      <Dashboard />
    </div>
  );
}

export default Results;
