import React, { useState, useEffect } from "react";
import { speakWithBrowserTTS } from "./browserTTS";
import { speakWithCapacitor } from "./capacitorTTS";
// ESpeak mock (browser cannot run real ESpeak)
// import { speakWithEspeak } from "./espeakMock";

function App() {
  const [text, setText] = useState("");
   const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div style={styles.container}>
      <h2>Offline Text To Speech Demo</h2>

      <input
        type="text"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.input}
      />

      <div style={styles.buttonContainer}>
        <label htmlFor="my-select">Choose a language:</label>
      <select id="my-select" value={selectedValue} onChange={handleChange}>
        <option value="option1">English (en-US)</option>
        <option value="option2">Japanese (ja-JP)</option>
      </select>
        <button style={styles.button} onClick={() => speakWithBrowserTTS(text,selectedValue)}>
          Speak
        </button>

      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: "40px auto",
    width: "420px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontFamily: "Arial",
    background: "#fafafa",
  },
  input: {
    width: "94%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    padding: "12px",
    fontSize: "15px",
    cursor: "pointer",
  },
};

export default App;
