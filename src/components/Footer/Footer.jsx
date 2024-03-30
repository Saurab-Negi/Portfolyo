import React, { useEffect, useState } from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import axios from "axios";

const Footer = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      .then((res) => setUserData(res.data.user))
      .catch((error) => console.log("Message", error));
  }, []);

  if (!userData) {
    return null;
  }

  const { contactEmail, phoneNumber, address } = userData.about;

  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span><b>Email:</b> {contactEmail}</span>
        <span><b>Contact No.</b> {phoneNumber}</span>
        <span><b>Address:</b> {address}</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Github color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
