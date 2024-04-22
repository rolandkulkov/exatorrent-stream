import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import "../style.css";

const fileTypes = ["torrent"];

export function UploadFile() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="App">
      <h1>Upload your torrent file to start streaming</h1>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
    </div>
  );
}