
import HowItWorks from "@/components/HowItWorks";
import LandingSection from "@/components/LandingSection";
import PopularDestinations from "@/components/PopularDestination";
// import Navbar from "@/component/Navbar";
import NavBarWrapper from "@/components/NavBarWrapper";
import Breadcrumb from "@/components/BreadCrumb";


const HomePage = () => {
   return (
     <NavBarWrapper>
       <div>
         <LandingSection />
       </div>
       <div>
         <HowItWorks />
       </div>
       <div>
         <PopularDestinations />
       </div>
     </NavBarWrapper>
   );
}
 
export default HomePage;