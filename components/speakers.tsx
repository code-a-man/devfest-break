"use client";

import React, { useState, useEffect } from "react";
import HyperText from "@/components/ui/hyper-text";
import speakerData from "@/assets/speakers.json";

export function Speakers() {
  const speakers = speakerData.speakerList;
  const [currentSpeaker, setCurrentSpeaker] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpeaker((prevSpeaker) => (prevSpeaker + 1) % speakers.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [speakers.length]);

  return (
    <HyperText
      key={currentSpeaker} // This will force the component to re-render
      className="text-7xl font-bold text-black dark:text-white"
      text={speakers[currentSpeaker]}
    />
  );
}
