import NavBarWrapper from "@/components/NavBarWrapper";
import Breadcrumb from "@/components/BreadCrumb";


const HomePage = () => {
   return (
     <NavBarWrapper>
         <div>
            <Breadcrumb />
         <h1> Home page </h1>
         <p>Welcome Here</p>
       </div>
     </NavBarWrapper>
   );
}
 
export default HomePage;