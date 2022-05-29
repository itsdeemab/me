import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Dolezar" },
  { meta: "last name", metaInfo: "Mabunda" },
  { meta: "Age", metaInfo: "28 Years" },
  { meta: "Nationality", metaInfo: "South African" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Johannesburg" },
  { meta: "phone", metaInfo: "+27 82 548 1481" },
  { meta: "Email", metaInfo: "dee@itsdeemab.com" },
  { meta: "Zoom", metaInfo: " On Appointment" },
  { meta: "Language", metaInfo: "English" },
  { meta: "Design", metaInfo: "Figma, illustrator, Photoshop, Lightroom, Canva" },
  { meta: "Development", metaInfo: "Html, Css, Javascript (ES6+), React, Scss, Tailwind, Webflow, Wordpress, " },
  
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
