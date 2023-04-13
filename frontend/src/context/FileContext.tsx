import React, { createContext, useState } from "react";

const FileContext = createContext({
  file: [],
  setFile: (file: any) => {},
});

function FileContextProvider({ children }: any) {
  const [file, setFile] = useState([]);

  return (
    <FileContext.Provider value={{ file, setFile }}>
      {children}
    </FileContext.Provider>
  );
}

export { FileContext, FileContextProvider };
