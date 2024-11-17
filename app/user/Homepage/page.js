
import HowItWorks from "@/components/HowItWorks";
import LandingSection from "@/components/LandingSection";
import PopularDestinations from "@/components/PopularDestination";
import Navbar from "@/component/Navbar";
import NavBarWrapper from "@/components/NavBarWrapper";

const Homepage = () => {
  return (
    <NavBarWrapper>
    <div>
    
      <LandingSection />

      <PopularDestinations />

      <HowItWorks />
    </div>
    </NavBarWrapper>
  );
};

export default Homepage;


