/** @format */

import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";


const CourseContent = ({ course }) => {
  const [currentSubcourseIndex, setCurrentSubcourseIndex] = useState(0);
  const currentSubcourse = course.subcourses[currentSubcourseIndex];

  const progress = (subcourse) => {
    const completedUnits = subcourse.units.filter(
      (unit) => unit.completed
    ).length;
    return Math.round((completedUnits / subcourse.units.length) * 100);
  };

  return (
    <div className="space-y-6 py-6">
      <div className="mb-4 bg-[#F8F8FB] rounded-lg p-8">
        <div className="flex gap-6 justify-between items-center ">
          <div className="flex-1">
            <h4 className="text-xs pb-2 text-[#767278]">{`Course ${
              currentSubcourseIndex + 1
            } of ${course.subcourses.length}`}</h4>
            <h3 className="text-sm">{`Course ${currentSubcourseIndex + 1} : ${
              currentSubcourse.name
            }`}</h3>

            <div className="my-4 w-full bg-[#FFEFE0] rounded overflow-hidden">
              <div
                style={{ width: `${progress(currentSubcourse)}%` }}
                className="h-1 bg-[#FF7800]"
              ></div>
            </div>

            <p className="text-xs ">
              {currentSubcourse.units.filter((unit) => unit.completed).length}{" "}
              completed units of {currentSubcourse.units.length} available
            </p>
          </div>

          <div className="bg-[#4C6FFF] text-center md:text-xs text-[10px] text-white px-3 py-2 rounded cursor-pointer">
            Go to Unit 3
          </div>
        </div>
      </div>
  
      {course.subcourses.map((subcourse, subcourseIndex) => (
        <div key={subcourseIndex}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  onClick={() => setCurrentSubcourseIndex(subcourseIndex)}
                  className="flex justify-between w-full  py-2 text-left text-[#102844] border-b   text-sm "
                >
                  <span>{`Course ${subcourseIndex + 1} - ${
                    subcourse.name
                  }`}</span>
                  <svg
                    className={`${open ? "transform rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.291 13.2926C16.9214 13.9224 16.4754 15 15.5842 15H8.41268C7.52199 15 7.07572 13.9233 7.70525 13.2932L11.2878 9.70743C11.6782 9.31673 12.3113 9.31644 12.702 9.70679L16.291 13.2926Z"
                      fill="#102844"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className=" pb-2 text-sm text-gray-500">
                  <div
                    className=""
                    style={{ maxHeight: "120px", overflowY: "scroll" }}
                  >
                    {subcourse.units.map((unit, unitIndex) => (
                      <div
                        key={unitIndex}
                        className="text-xs border-b py-4 gap-2 flex justify-between items-center"
                      >
                        <div className="flex items-center gap-2">
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
                              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM10 16.3301L16 12L10 7.66987V16.3301Z"
                              fill="#4C6FFF"
                            />
                          </svg>
                          <p className="text-[#102844] text-xs">{`U${
                            unitIndex + 1
                          }: ${unit.title}`}</p>
                        </div>
                        {unit.completed && (
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
                        )}
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
};

export default CourseContent;
