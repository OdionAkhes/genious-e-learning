/** @format */

import React from "react";
import { Link } from "react-router-dom";
const CourseCard = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`} className="cursor-pointer">
      <div
        key={course.id}
        className="text-sm bg-white shadow rounded-xl flex flex-col justify-start p-2"
      >
        <div className=" items-center text-sm">
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-auto object-cover rounded-xl"
          />

          <div className="py-2">
            <h4 className="font-semibold text-[#102844]">{course.name}</h4>
            <p className="text-sm text-gray-500">{course.shortName}</p>
          </div>
        </div>
        <div className=" flex items-center justify-between">
          <div className="flex pb-2">
            <svg
              className="mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g id="Icon">
                <path
                  id="Combined Shape"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.666672 4C0.666672 2.89543 1.56211 2 2.66667 2H13.3333C14.4379 2 15.3333 2.89543 15.3333 4V12C15.3333 13.1046 14.4379 14 13.3333 14H2.66667C1.56211 14 0.666672 13.1046 0.666672 12V4ZM2.66667 3.33333H13.3333C13.7015 3.33333 14 3.63181 14 4V12C14 12.3682 13.7015 12.6667 13.3333 12.6667H2.66667C2.29849 12.6667 2.00001 12.3682 2.00001 12V4C2.00001 3.63181 2.29849 3.33333 2.66667 3.33333ZM4 4.66667C3.63182 4.66667 3.33334 4.96515 3.33334 5.33333C3.33334 5.70152 3.63182 6 4 6C4.36819 6 4.66667 5.70152 4.66667 5.33333C4.66667 4.96515 4.36819 4.66667 4 4.66667ZM11.3333 5.33333C11.3333 4.96515 11.6318 4.66667 12 4.66667C12.3682 4.66667 12.6667 4.96515 12.6667 5.33333C12.6667 5.70152 12.3682 6 12 6C11.6318 6 11.3333 5.70152 11.3333 5.33333ZM3.33334 8C3.33334 7.6318 3.63182 7.33333 4 7.33333C4.36819 7.33333 4.66667 7.6318 4.66667 8C4.66667 8.3682 4.36819 8.66667 4 8.66667C3.63182 8.66667 3.33334 8.3682 3.33334 8ZM11.3333 8C11.3333 7.6318 11.6318 7.33333 12 7.33333C12.3682 7.33333 12.6667 7.6318 12.6667 8C12.6667 8.3682 12.3682 8.66667 12 8.66667C11.6318 8.66667 11.3333 8.3682 11.3333 8ZM3.33334 10.6667C3.33334 10.2985 3.63182 10 4 10C4.36819 10 4.66667 10.2985 4.66667 10.6667C4.66667 11.0349 4.36819 11.3333 4 11.3333C3.63182 11.3333 3.33334 11.0349 3.33334 10.6667ZM11.3333 10.6667C11.3333 10.2985 11.6318 10 12 10C12.3682 10 12.6667 10.2985 12.6667 10.6667C12.6667 11.0349 12.3682 11.3333 12 11.3333C11.6318 11.3333 11.3333 11.0349 11.3333 10.6667Z"
                  fill="#767278"
                />
              </g>
            </svg>
            <span className="text-[#767278] text-xs">
              {course.lessons} Lessons ({course.duration})
            </span>
          </div>
          <div className=" ">
            <span className="text-[#FF7800]">${course.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
