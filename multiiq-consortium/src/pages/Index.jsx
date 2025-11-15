import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import InvestmentHighlights from "../components/InvestmentHighlights";
import Properties from "../components/Properties";
import Process from "../components/Process";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import VideosBlog from "../components/VideosBlog";
import FAQ from "../components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <InvestmentHighlights />
      <Properties />
      <Process />
      <VideosBlog />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
