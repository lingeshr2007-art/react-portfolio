import React from "react";

const EducationCard = ({ institution, course, startYear, endYear }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 ">
      <p className="text-gray-500  text-sm mb-2 px-10">
        {startYear} - {endYear}
      </p>
      <h4 className="text-xl text-center font-semibold text-gray-800 mb-1">{course}</h4>
      <h5 className="text-lg text-center text-gray-600">{institution}</h5>
    </div>
  );
};

export default EducationCard;
