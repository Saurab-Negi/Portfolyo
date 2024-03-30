import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import axios from "axios";

const Testimonial = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      .then((res) => setUserData(res.data.user))
      .catch((error) => console.log("Message", error));
  }, []);

  if (!userData) {
    return null;
  }

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {userData.testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={testimonial.image.url} alt={testimonial.name} />
              <div className="testimonial-content">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.position}</p>
                <p>{testimonial.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
