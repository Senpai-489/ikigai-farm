'use client'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Reasonforbeing from "./components/Reasonforbeing";
import ExperiencesHomeSection from "./components/ExperiencesHomeSection";
import ActivitiesHomeSection from "./components/ActivitiesHomeSection";
import LastHomeSection from "./components/LastHomeSection";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQs";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Reasonforbeing />
      <ExperiencesHomeSection />
      <ActivitiesHomeSection />
      <LastHomeSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
