import { useDropzone } from "react-dropzone";
import { useContext, useEffect, useMemo } from "react";
import styled from "styled-components";
import { FileContext } from "@/context/FileContext";
import Image from "next/image";

const getColor = (props: {
  isDragAccept: boolean;
  isDragReject: boolean;
  isFocused: boolean;
}) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props: any) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  height: 90%;
  width: 90%;
`;

function Dropzone() {
  const {
    acceptedFiles,
    getInputProps,
    getRootProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "img/jpeg": [".jpg", ".jpeg"],
    },
  });

  const { file, setFile } = useContext(FileContext);

  useEffect(() => setFile(acceptedFiles), [acceptedFiles]);

  return (
    <>
      <Container
        {...getRootProps({
          className: "dropzone bg-dark",
          isFocused,
          isDragAccept,
          isDragReject,
        })}
      >
        <input {...getInputProps()} />
        {file.length ? (
          <Image
            src={URL.createObjectURL(
              new Blob(file, { type: "application/zip" })
            )}
            alt="Uploaded Image"
            width={512}
            height={512}
            className="rounded"
          />
        ) : (
          <p>Drag n drop some files here, or click to select files</p>
        )}
      </Container>
    </>
  );
}

export default Dropzone;
