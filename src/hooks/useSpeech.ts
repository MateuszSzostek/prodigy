import React from "react";
//@ts-ignore
export default function useSpeech(text, options) {
  const [state, setState] = React.useState(() => {
    const { lang = "default", name = "" } = options.voice || {};
    return {
      isPlaying: false,
      status: "init",
      lang: options.lang || "default",
      voiceInfo: { lang, name },
      rate: options.rate || 1,
      pitch: options.pitch || 1,
      volume: options.volume || 1,
    };
  });

  const optionsRef = React.useRef(options);

  React.useEffect(() => {
    const handlePlay = () => {
      setState((s) => {
        return { ...s, isPlaying: true, status: "play" };
      });
    };

    const handlePause = () => {
      setState((s) => {
        return { ...s, isPlaying: false, status: "pause" };
      });
    };

    const handleEnd = () => {
      setState((s) => {
        return { ...s, isPlaying: false, status: "end" };
      });
    };

    const utterance = new SpeechSynthesisUtterance(text);
    optionsRef.current.lang && (utterance.lang = optionsRef.current.lang);
    optionsRef.current.voice && (utterance.voice = optionsRef.current.voice);
    utterance.rate = optionsRef.current.rate || 1;
    utterance.pitch = optionsRef.current.pitch || 1;
    utterance.volume = optionsRef.current.volume || 1;
    utterance.onstart = handlePlay;
    utterance.onpause = handlePause;
    utterance.onresume = handlePlay;
    utterance.onend = handleEnd;
    window.speechSynthesis.speak(utterance);
  }, [text]);

  return state;
}
