/** @format */

import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`} className="cursor-pointer">
      <div
        key={course.id}
        className="text-sm bg-white shadow rounded-xl flex flex-col justify-start p-2 relative"
      >
        <div className=" items-center text-sm relative">
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-auto object-cover rounded-xl"
          />

          <div className="font-[500] absolute px-2 top-0 rounded-lg text-[12px]  m-2 left-0 bg-white bg-opacity-60 text-[#102844] p-1">
            {course.category}
          </div>

          <div className="py-2">
            <h4 className="font-semibold text-[#102844]">{course.name}</h4>
            <p className="text-sm text-gray-500">{course.shortName}</p>
          </div>
        </div>
        <div className=" flex items-center justify-between">
          {/* remaining part of your component */}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
