import { TextToSpeech } from "@capacitor-community/text-to-speech";

export async function speakWithCapacitor(text) {
  if (!text) return alert("Enter text first!");
 const lang=await TextToSpeech.getSupportedLanguages();
 
  const voice=await TextToSpeech.getSupportedVoices();
console.log({voice, lang});

  try {
    await TextToSpeech.speak({
      text,
      lang: "ja-JP",
      rate: 1.0,
    });
  } catch (e) {
    alert("Capacitor TTS only works inside a native shell (Android/iOS/Electron).");
  }
}
