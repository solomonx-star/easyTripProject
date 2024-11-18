import Breadcrumb from "@/components/BreadCrumb";
import NavBarWrapper from "@/components/NavBarWrapper"


export default function Settings() {
    return (
      <NavBarWrapper>
        <div className="p-10">
          <Breadcrumb />
          <h1>Settings</h1>
        </div>
      </NavBarWrapper>
    );
}