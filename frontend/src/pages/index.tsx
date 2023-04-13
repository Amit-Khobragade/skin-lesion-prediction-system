import SubmitToolbar from "@/components/IndexControls/IndexControls";
import Dropzone from "../components/Dropzone/Dropzone";

export default function Home() {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          width: "100%",
          height: "80vh",
        }}
      >
        <Dropzone />
      </div>
      <SubmitToolbar />
    </>
  );
}
