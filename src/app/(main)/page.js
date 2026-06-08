import Banner from "@/component/Bannar";
import BrakingNews from "@/component/BrakingNews";
import FeaturedBooks from "@/component/homePage/featuredBooks";
import PopularCategories from "../../component/homePage/PopularCategories";
import Testimonials from "@/component/homePage/Testimonials";



export default function Home() {
  return (
    <div>
       <Banner />
      <BrakingNews />
       <FeaturedBooks/>
      <PopularCategories></PopularCategories>
      <Testimonials /> 
    </div>
  );
}
