/** @format */

import React from "react";

const CourseOverview = ({ subcourses }) => {
  return (
    <div className="overflow-y-auto max-h-[1040px] space-y-4">
      <h3 className="text-[#102844]">Basics Overview</h3>
      {subcourses.map((subcourse, index) => (
        <div className="space-y-6 " key={index}>
          <div className=" uppercase text-[14px] text-[#767278] flex items-center ">
            {`Course ${index + 1}`} -{subcourse.name}
          </div>

          {subcourse.units.map((unit, unitIndex) => (
            <div className="mt-4  text-sm" key={unitIndex}>
              <div className="text-[#102844] flex items-center justify-between text-sm gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9  p-1 rounded-full bg-[#E9EDFF] text-xs flex items-center justify-center  ">
                    {`U${unitIndex + 1}`}
                  </div>
                  <p className="text-sm text-[14px]">{unit.title}</p>
                </div>
                {unit.completed ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5859 13.4142L7.75748 10.5858L6.34326 12L10.5859 16.2426L17.657 9.17154L16.2428 7.75732L10.5859 13.4142Z"
                      fill="#30A876"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g opacity="0.6">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.5859 13.4142L7.75748 10.5858L6.34326 12L10.5859 16.2426L17.657 9.17154L16.2428 7.75732L10.5859 13.4142Z"
                        fill="#767278"
                      />
                    </g>
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CourseOverview;
