import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const fileUploadRef = useRef();
  const [preview, setPreview] = useState(null);

  const handleUploadClick = () => {
    fileUploadRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL); 
    }
  };

  const handleClearPreview = () => {
    setPreview(null);
    fileUploadRef.current.value = ''; 
  };

  return (
    <div className="container">
      <div className="postCard">
        <h2 className="postTitle">🌟 Demo Post</h2>
        <p className="postText">
          This is a sample post preview. Upload an image to enhance the post visually.
        </p>

        {preview && (
          <div className="previewBox">
            <button onClick={handleClearPreview} className="closeBtn">✖</button>
            <img src={preview} alt="Preview" className="previewImg" />
          </div>
        )}

        <button className="upload" onClick={handleUploadClick}>
          Upload Image
        </button>

        <input
          type="file"
          ref={fileUploadRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default App;
