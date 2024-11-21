
import HowItWorks from "@/components/HowItWorks";
import LandingSection from "@/components/LandingSection";
import PopularDestinations from "@/components/PopularDestination";
// import Navbar from "@/component/Navbar";
import NavBarWrapper from "@/components/NavBarWrapper";
import Breadcrumb from "@/components/BreadCrumb";
import WhyChooseUs from "@/components/whyChooseUS";
import Footer from "@/components/Footer";


const HomePage = () => {
   return (
     <NavBarWrapper>
       <div>
         <div>
           <LandingSection />
         </div>
         <div>
           <PopularDestinations />
         </div>
         <div>
           <HowItWorks />
         </div>
         <div>
          <WhyChooseUs/>
         </div>
       </div>
       <Footer/>
     </NavBarWrapper>
   );
}
 
export default HomePage;