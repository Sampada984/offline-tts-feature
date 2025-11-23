
// export async function speakWithEspeak(text) {
//   const espeak = new ESpeakNG();
//   await espeak.load(); // Loads WASM into memory

//   // Generate WAV audio bytes
//   const wav = espeak.speak(text, { voice: "ja" });

//   // Play audio in browser
//   const blob = new Blob([wav], { type: "audio/wav" });
//   const url = URL.createObjectURL(blob);
//   new Audio(url).play();
// }
