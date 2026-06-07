import Marquee from "react-fast-marquee";
import { AiFillSound } from "react-icons/ai";

const BrakingNews = () => {
  return (
     <div className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-2 px-4 mb-10" >
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        
        {/* Badge */}
        <span className="bg-white text-purple-600 text-sm font-semibold px-3 py-1 rounded-full flex items-center justify-center gap-2 shadow">
        <AiFillSound className="text-lg" />   New Arrivals
        </span>

        {/* Marquee */}
        <div className="flex-1 overflow-hidden">
          <Marquee pauseOnHover={true} speed={50}>
            <p className="text-white text-sm font-medium">
              New Alchemist &nbsp; | &nbsp; Atomic Habits &nbsp; | &nbsp; Clean Code &nbsp; | &nbsp;
              Special Discount on Membership  Join Now! ⭐
            </p>
          </Marquee>
        </div>

      </div>
    </div>
  );
};

export default BrakingNews;
