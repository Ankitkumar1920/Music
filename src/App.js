import { useState } from "react";
import "./App.css";

function App() {
  //state
  const [setUploadAudio] = useState(null);

  const audioHandler = (e) => {
    if (e.target.files[0].name.match(/\.(?:wav|mp3)$/i)) {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setUploadAudio(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else alert("Invalid file chosen.Please choose file of type audio)");
  };

  return (
    <div className="app">
      <form className="container">
        <div className="wrapper">
          <label>
            Upload file
            <input type="file" name="name" onChange={audioHandler} />
          </label>
          <input type="submit" value="Upload" />
        </div>
      </form>
      <audio useRef="audio_tag" src controls autoPlay id="audio-file" />
    </div>
  );
}

export default App;
