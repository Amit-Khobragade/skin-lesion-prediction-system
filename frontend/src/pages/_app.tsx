import type { AppProps } from "next/app";
import { FileContextProvider } from "../context/FileContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FileContextProvider>
      <Component {...pageProps} />
    </FileContextProvider>
  );
}
