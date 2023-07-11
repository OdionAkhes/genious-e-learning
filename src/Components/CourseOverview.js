/** @format */

import React from "react";

const CourseOverview = ({ subcourses }) => {
  return (
    <div className="overflow-auto max-h-full space-y-4">
      <h3 className="text-[#102844]">Basics Overview</h3>
      {subcourses.map((subcourse, index) => (
        <div className="my-6" key={index}>
          <div className=" uppercase text-[14px] text-[#767278] flex items-center  mr-4">
            {`Course ${index + 1}`} -{subcourse.name}
          </div>

          {subcourse.units.map((unit, unitIndex) => (
            <div className="mt-4  text-sm" key={unitIndex}>
              <div className="text-[#102844] flex items-center text-sm gap-3">
                <div className="w-9 h-9  p-1 rounded-full bg-[#E9EDFF] text-xs flex items-center justify-center  ">
                  {`U${unitIndex + 1}`}
                </div>
                <p className="text-sm text-[14px]">{unit.title}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CourseOverview;
