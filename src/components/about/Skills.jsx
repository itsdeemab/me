import React from "react";

<i className="fa fa-envelope-open position-absolute"></i>
const skillsContent = [
  // { skillClass: "p25", skillPercent: "25", skillName: "HTML" },
  // { skillClass: "p89", skillPercent: "89", skillName: "CSS" },
  // { skillClass: "p70", skillPercent: "70", skillName: "JAVASCRIPT" },
  // { skillClass: "p66", skillPercent: "66", skillName: "WEBFLOW" },
  // { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS" },
  // { skillClass: "p50", skillPercent: "50", skillName: "REACT" },
  // { skillClass: "p65", skillPercent: "65", skillName: "TAILWIND" },
  // { skillClass: "p45", skillPercent: "45", skillName: "SCSS" },
  
];


const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
