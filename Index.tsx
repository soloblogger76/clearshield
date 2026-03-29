import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyItMatters from "@/components/WhyItMatters";
import DonationSection from "@/components/DonationSection";
import TransparencyDashboard from "@/components/TransparencyDashboard";
import ImpactSection from "@/components/ImpactSection";
import AboutSection from "@/components/AboutSection";
import UpdatesSection from "@/components/UpdatesSection";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyDonateButton from "@/components/StickyDonateButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyItMatters />
      <DonationSection />
      <TransparencyDashboard />
      <ImpactSection />
      <AboutSection />
      <UpdatesSection />
      <TrustSection />
      <ContactSection />
      <Footer />
      <StickyDonateButton />
    </div>
  );
};

export default Index;
