import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Camps from "@/components/Camps";
import WhyChoose from "@/components/WhyChoose";
import SaveTheDate from "@/components/SaveTheDate";
import Trainers from "@/components/Trainers";
import RegistrationForm from "@/components/RegistrationForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Camps />
      <WhyChoose />
      <SaveTheDate />
      <Trainers />
      <RegistrationForm />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
