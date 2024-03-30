import React, { useContext, useEffect, useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context";
import axios from "axios";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
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
    <div className="portfolio" id="project">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {userData.projects.map((project, index) => (
          <SwiperSlide key={index}>
            <img src={project.image.url} alt={project.title} />
            <p style={{fontSize:15}}>Description: {project.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
