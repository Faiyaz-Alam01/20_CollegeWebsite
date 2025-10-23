import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional navigation styles
import "swiper/css/pagination"; // Optional pagination styles

import user_1 from "../../Aseets/user-1.png";
import user_2 from "../../Aseets/user-2.png";
import user_3 from "../../Aseets/user-3.png";
import user_4 from "../../Aseets/user-4.png";
import { Navigation, Pagination,Autoplay  } from "swiper/modules";

const MySwiper = () => {
  return (
      <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={10} // Space between slides
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        // Breakpoints for responsiveness
        640: {
          slidesPerView: 1, // 1 slide on screens >= 640px
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2, // 2 slides on screens >= 768px
          spaceBetween: 20,
        },
        
      }}
      onSlideChange={() => console.log("Slide changed")}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-4/5"
    >
      <SwiperSlide className=" p-20">
        <div className="slide h-max rounded-md max-w-xl bg-gray-400 text-center p-2 hover:bg-orange-200">
          <div>
            <img className="size-20 mx-auto rounded-full" src={user_1} alt="" />
            <div>
              <h1 className="text-h3 font-bold ">William Jackson</h1>
              <span className="text-blue-900 font-bold">Eduty, USA</span>
            </div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            fugit nesciunt at molestiae natus iusto maiores illum obcaecati
            praesentium rerum.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-20">
        <div className="slide h-max rounded-md max-w-xl bg-gray-400 text-center p-2 hover:bg-orange-200 ">
          <div>
            <img className="size-20 mx-auto rounded-full" src={user_2} alt="" />
            <div>
              <h1 className="text-h4 font-bold">William Jackson</h1>
              <span className="text-blue-900 font-bold">Eduty, USA</span>
            </div>
          </div>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            fugit nesciunt at molestiae natus iusto maiores illum obcaecati
            praesentium rerum.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-20">
        <div className="slide h-max rounded-md max-w-xl bg-gray-400 text-center p-2 hover:bg-orange-200">
          <div>
            <img className="size-20 mx-auto rounded-full" src={user_3} alt="" />
            <div>
              <h1 className="text-h3 font-bold">William Jackson</h1>
              <span className="text-blue-900 font-bold">Eduty, USA</span>
            </div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            fugit nesciunt at molestiae natus iusto maiores illum obcaecati
            praesentium rerum.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-20">
        <div className="slide h-max rounded-md max-w-xl bg-gray-400 text-center p-2 hover:bg-orange-200">
          <div>
            <img className="size-20 mx-auto rounded-full" src={user_4} alt="" />
            <div>
              <h1 className="text-h3 font-bold">William Jackson</h1>
              <span className="text-blue-900 font-bold">Eduty, USA</span>
            </div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            fugit nesciunt at molestiae natus iusto maiores illum obcaecati
            praesentium rerum.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
