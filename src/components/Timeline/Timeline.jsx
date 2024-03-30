import React, { useContext, useEffect, useState } from "react";
import "./Timeline.css"; // Import your updated CSS file
import axios from "axios";
import { themeContext } from "../../Context";

const Timeline = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      .then((res) => {
        // Filter timeline entries for education and experience
        const educationTimeline = res.data.user.timeline.filter(
          (entry) => entry.forEducation
        );
        const experienceTimeline = res.data.user.timeline.filter(
          (entry) => !entry.forEducation
        );
        setUserData({
          ...res.data.user,
          educationTimeline,
          experienceTimeline,
        });
      })
      .catch((error) => console.log("Message", error));
  }, []);

  if (!userData) {
    return null;
  }

  const renderTimelineEntries = (entries) => {
    return entries.map((entry) => (
      <div key={entry._id} className="timeline-entry">
        <h2>{entry.company_name}</h2>
        <p style={{fontWeight:400}} className="job-title">{entry.jobTitle}</p>
        <p style={{ color: darkMode ? "white" : "" }} className="job-location">{entry.jobLocation}</p>
        <p className="dates">
          {entry.startDate} - {entry.endDate}
        </p>
        <p className="summary">{entry.summary}</p>
      </div>
    ));
  };

  return (
    <div className="About" id="timeline">
      <div className="timeline-container">
        <div className="education-timeline">
          <h3 style={{color: `rgb(255, 0, 47)`, fontSize:50, fontWeight:600}}>Education</h3>
          {renderTimelineEntries(userData.educationTimeline)}
        </div>
        <div className="experience-timeline">
          <h3 style={{color: `rgb(255, 0, 47)`, fontSize:50, fontWeight:600}}>Experience</h3>
          {renderTimelineEntries(userData.experienceTimeline)}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
