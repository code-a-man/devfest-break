// app/sayac/[minutes]/page.js
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Background } from "@/components/background";
import { Speakers } from "@/components/speakers";
import qrcode from "@/assets/qrcode.svg";
import Image from "next/image";
import SparklesText from "@/components/ui/sparkles-text";

export default function Sayac({ params }: { params: { minutes: string } }) {
  const { minutes } = params;
  const [timeLeft, setTimeLeft] = useState(Number(minutes) * 60); // Convert minutes to seconds
  const router = useRouter();

  useEffect(() => {
    if (isNaN(timeLeft) || timeLeft <= 0) {
      router.push("/"); // Redirect if invalid time
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [timeLeft, router]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Background />
      <SparklesText
        text="Devfest Kayseri '24"
        className="text-8xl font-bold text-center mt-4"
      />

      <div className="font-sans text-center absolute inset-x-0 bottom-0 flex flex-col justify-center items-center gap-16 mb-8">
        <div>
          <h1 className="text-7xl font-bold">Kısa bir mola</h1>
          <h2 className="text-9xl font-bold">{formatTime(timeLeft)}</h2>
        </div>

        <div className="flex flex-col items-center gap-0">
          <Image
            src={qrcode}
            alt="QR Code"
            width={200}
            height={200}
            className=""
          />
          <p className="text-xl font-bold">linktr.ee/devfestkayseri</p>
        </div>
        <Speakers />
      </div>
    </div>
  );
}
