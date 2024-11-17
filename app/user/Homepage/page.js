import HowItWorks from "@/components/HowItWorks";
import LandingSection from "@/components/LandingSection";
import PopularDestinations from "@/components/PopularDestination";

const Homepage = () => {
  return (
    <div>
      <LandingSection />

      <PopularDestinations />

      <HowItWorks />
    </div>
  );
};

export default Homepage;
