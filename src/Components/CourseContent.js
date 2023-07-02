/** @format */

import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const CourseContent = ({ course }) => {
  return (
    <div className="space-y-4">
      {course.map((course, courseIndex) => (
        <Disclosure key={courseIndex}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>
                  Course {course.id} of {course.length}
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {course.units.map((unit, unitIndex) => (
                  <div key={unitIndex}>
                    <p>{`${unit.title} - ${
                      unit.completed ? "Completed" : "Not completed"
                    }`}</p>
                    {unitIndex < course.units.length - 1 && (
                      <button className="mt-2 py-2 px-4 bg-blue-500 text-white rounded">
                        Go to {course.units[unitIndex + 1].title}
                      </button>
                    )}
                  </div>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default CourseContent;
