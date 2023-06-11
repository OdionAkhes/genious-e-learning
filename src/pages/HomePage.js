/** @format */

import React from "react";
import { useSelector } from "react-redux";
import courses from "../data/courses";

function HomePage() {
  const activeLink = useSelector((state) => state.sidebar.activeLink);
  const popularCourses = courses
    .filter((course) => course.enrollments > 500)
    .slice(0, 6);

  return (
    <div className="p-6 bg-[#E5E5E5]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Courses Completed</h2>
          <div className="bg-gray-200 h-2 rounded-full">
            <div
              className="bg-green-500 h-full rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Certificates Earned</h2>
          <div className="bg-gray-200 h-2 rounded-full">
            <div
              className="bg-blue-500 h-full rounded-full"
              style={{ width: "20%" }}
            ></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Courses in Progress</h2>
          <div className="bg-gray-200 h-2 rounded-full">
            <div
              className="bg-yellow-500 h-full rounded-full"
              style={{ width: "30%" }}
            ></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">20 Career Paths</h2>
          <button className="text-blue-300 py-2 px-4 rounded text-sm">
            Start Quiz
          </button>
        </div>
      </div>
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-3 md:col-span-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Most Popular Courses
              </h3>
              <div className="grid lg:grid-cols-3  grid-cols-1 md:grid-cols-2 gap-4">
                {popularCourses.map((course) => (
                  <div
                    key={course.id}
                    className="text-sm bg-gray-200 h-64 rounded-lg flex flex-col justify-between p-4"
                  >
                    <div className="flex items-center text-sm">
                      <img
                        src={course.image}
                        alt={course.name}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-semibold">{course.name}</h4>
                        <p className="text-sm text-gray-500">
                          {course.shortName}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-5a1 1 0 100-2 1 1 0 000 2zm2-6a1 1 0 10-2 0v4a1 1 0 102 0V5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="">
                          {course.lessons} Lessons ({course.duration})
                        </span>
                      </div>
                      <div className=" ">
                        <span className=" ">${course.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Upcoming Tasks</h3>
              {/* Render upcoming tasks */}
              {/* Example task */}
              <div className="bg-gray-200 h-16 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
