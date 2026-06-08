import Banner from "@/component/Bannar";
import BrakingNews from "@/component/BrakingNews";
import FeaturedBooks from "@/component/homePage/featuredBooks";
import Testimonials from "@/component/homePage/Testimonials";
import Navbar from "@/component/Navbar";
import PopularCategories from "../../component/homePage/PopularCategories";
import Footer from "@/component/Footer";

const MainLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      {/* <Banner />
      <BrakingNews />
      
      <PopularCategories></PopularCategories>
      <Testimonials /> */}
     {children}
      <Footer/>
    </div>
  );
};

export default MainLayout;
