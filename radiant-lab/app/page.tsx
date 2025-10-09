import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrackSelector from "@/components/TrackSelector";
import SciunitIntro from "@/components/SciunitIntro";
import SciunitTabs from "@/components/SciunitTabs";
//import QuickstartSection from "@/components/QuickstartSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main role="main" className="flex-grow">
        <TrackSelector />
        <SciunitIntro />
        <SciunitTabs />
        {/* <QuickstartSection /> */}
      </main>

      <Footer />
    </div>
  );
}
