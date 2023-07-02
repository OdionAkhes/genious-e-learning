/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Tab } from "@headlessui/react";
import Tabs from "./Tabs";
const CourseDetails = () => {
  const { id } = useParams();
  const course = useSelector((state) =>
    state.courses.find((course) => course.id === id)
  );

  return course ? (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <div className="flex items-center">
          <p className="font-bold">Courses</p>
          <svg
            className="h-4 w-4 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <p className="font-bold">{course.name}</p>
        </div>
        <video className="mt-4" controls>
          <source src={course.video} type="video/mp4" />
        </video>
        <h3 className="mt-4 font-bold">{course.instructor}</h3>
        <p className="mt-2 text-gray-500">{course.credentials}</p>

        <div className="mt-4">
          <Tabs course={course} />
          {/* <TabPanel>
              <div>
                <p>{course.description}</p>
              </div>
            </TabPanel> */}

          {/* <button className="w-full py-2 px-4 border border-gray-300 rounded shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Information
          </button> */}

          <div>{/* Add reviews here */}</div>
          <textarea
            className="w-full mt-2 bg-[#F8F8FB]"
            placeholder="Write your comments here..."
          />
          <button className="text-xs mt-2 py-3 px-4 bg-[#4C6FFF] text-white rounded shadow-sm focus:outline-none  ">
            Publish Review
          </button>
        </div>
      </div>

      <div>
        <h2 className="font-bold">Cart</h2>
        {/* cart content */}
      </div>
    </div>
  ) : (
    <div>Course not found</div>
  );
};

export default CourseDetails;
