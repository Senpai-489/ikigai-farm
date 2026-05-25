import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Reasonforbeing from "./components/Reasonforbeing";
import ExperiencesHomeSection from "./components/ExperiencesHomeSection";
import LastHomeSection from "./components/LastHomeSection";
import Footer from "./components/Footer";

const ActivitiesHomeSection = dynamic(
  () => import("./components/ActivitiesHomeSection"),
  {
    loading: () => (
      <section className="min-h-[28rem] bg-[#fdfdf1]" aria-label="Loading activities" />
    ),
  },
);

const FAQSection = dynamic(() => import("./components/FAQs"), {
  loading: () => <section className="min-h-[20rem] bg-[#faf6ea]" aria-label="Loading FAQs" />,
});

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
