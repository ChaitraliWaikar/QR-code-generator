import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [format, setFormat] = useState("PNG");

  const generateQR = async () => {
    try {
      const response = await fetch("http://localhost:5000/generate_qr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, format }),
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      } else {
        alert("Error generating QR code");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const download = () => {
    if (imageUrl) {
      const a = document.createElement("a");
      a.href = imageUrl;
      a.download = `qrcode.${format.toLowerCase()}`;
      a.click();
    }
  };

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <div className="input-group">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
        />
        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="PNG">PNG</option>
          <option value="JPEG">JPEG</option>
        </select>
        <button onClick={generateQR}>Generate QR</button>
      </div>
      {imageUrl && (
        <div className="result">
          <img src={imageUrl} alt="QR Code" />
          <button onClick={download}>Download</button>
        </div>
      )}
    </div>
  );
}

export default App;
