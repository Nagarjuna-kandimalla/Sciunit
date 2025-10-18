"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrackSelector from "@/components/TrackSelector";
import SciunitIntro from "@/components/SciunitIntro";
import SciunitTabs from "@/components/SciunitTabs";
import FlincHero from "@/components/FlincHero";
//import FlincTabs from "@/components/FlincTabs";

export default function Home() {
  // 🔸 lifted up state
  const [activeTrack, setActiveTrack] = useState<"flinc" | "sciunit">("flinc");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main role="main" className="flex-grow">
        {/* Track selector now receives props */}
        <TrackSelector active={activeTrack} setActive={setActiveTrack} />

        {/* Conditional rendering for each track */}
        {activeTrack === "sciunit" ? (
          <>
            <SciunitIntro />
            <SciunitTabs />
          </>
        ) : (
          <>
            <FlincHero />
            {/* <FlincTabs /> */}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
