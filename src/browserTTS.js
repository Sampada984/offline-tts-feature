export function speakWithBrowserTTS(text,selectedValue) {
  if (!text) return alert("Enter text first!");

  const utter = new SpeechSynthesisUtterance(text);

  // Auto-select Japanese voice if text contains Japanese characters
  if (selectedValue==="option2") {
    utter.lang = "ja-JP";
  } else {
    utter.lang = "en-US";
  }

  speechSynthesis.speak(utter);
}
