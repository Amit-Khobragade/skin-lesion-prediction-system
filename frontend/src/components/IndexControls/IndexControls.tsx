import { FileContext } from "@/context/FileContext";
import Link from "next/link";
import React, { useContext } from "react";
import styled from "styled-components";

const Toolbar = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
`;

function SubmitToolbar() {
  const { file, setFile } = useContext(FileContext);

  return (
    <Toolbar>
      <Link href="submit">
        <button disabled={!file.length} className="btn btn-primary">
          submit
        </button>
      </Link>
      <button onClick={() => setFile([])} className="btn btn-danger">
        clear
      </button>
    </Toolbar>
  );
}

export default SubmitToolbar;
