import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Camps from "@/components/Camps";
import WhyChoose from "@/components/WhyChoose";
import SaveTheDate from "@/components/SaveTheDate";
import Testimonials from "@/components/Testimonials";
import Trainers from "@/components/Trainers";
import RegistrationForm from "@/components/RegistrationForm";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Camps />
      <WhyChoose />
      <SaveTheDate />
      <Testimonials />
      <Trainers />
      <RegistrationForm />
      <Pricing />
      <FinalCTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
