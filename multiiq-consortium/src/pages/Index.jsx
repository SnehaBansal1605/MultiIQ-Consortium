import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import InvestmentHighlights from "../components/InvestmentHighlights";
import Properties from "../components/Properties";
import Process from "../components/Process";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import VideosBlog from "../components/VideosBlog";
import FAQ from "../components/FAQ";
import Header from "../components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
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
