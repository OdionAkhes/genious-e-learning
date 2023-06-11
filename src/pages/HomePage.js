/** @format */

import React from "react";
// import { useSelector } from "react-redux";
import courses from "../data/courses";

function HomePage() {
  // const activeLink = useSelector((state) => state.sidebar.activeLink);
  const popularCourses = courses
    .filter((course) => course.enrollments > 500)
    .slice(0, 6);
const upcomingTasks = [
  {
    id: 1,
    task: "Machine Learning",
    time: "08.00 am - 10.00 pm",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-blue-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 5a2 2 0 012-2h10a2 2 0 012 2v4.586a1 1 0 01-.293.707l-6 6a1 1 0 01-1.414 0l-6-6A1 1 0 013 9.586V5zm2-1a1 1 0 00-1 1v2.828l4 4L15.172 6H13a1 1 0 000 2h4a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h2zm7-4a1 1 0 011 1v1a1 1 0 11-2 0V1a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 2,
    task: "Discussion - Scratch",
    time: "08.00 am - 10.00 pm",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-green-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-5a1 1 0 100-2 1 1 0 000 2zm2-6a1 1 0 10-2 0v4a1 1 0 102 0V5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 3,
    task: "Task - Design Thinking",
    time: "08.00 am - 10.00 pm",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-red-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M2 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zm2 2h12v12H4V4zm4 3a1 1 0 10-2 0v4a1 1 0 002 0V7zm2 0a1 1 0 10-2 0v4a1 1 0 002 0V7zm2 0a1 1 0 10-2 0v4a1 1 0 002 0V7z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 4,
    task: "Task 2 - Python",
    time: "08.00 am - 10.00 pm",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-yellow-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-5a1 1 0 100-2 1 1 0 000 2zm2-6a1 1 0 10-2 0v4a1 1 0 102 0V5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 5,
    task: "Quiz Test 01",
    time: "08.00 am - 10.00 pm",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-purple-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-5a1 1 0 100-2 1 1 0 000 2zm2-6a1 1 0 10-2 0v4a1 1 0 102 0V5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];
  return (
    <div className="p-6 bg-[#f9f8f8]">
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
      <div className="mb-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <div className="col-span-3 md:col-span-3">
            <h3 className="text-lg  mb-2">Most Popular</h3>
            <div className="p-6">
              <div className="grid lg:grid-cols-3  grid-cols-1 md:grid-cols-2 gap-4">
                {popularCourses.map((course) => (
                  <div
                    key={course.id}
                    className="text-sm bg-white shadow h-64 rounded-lg flex flex-col justify-between p-4"
                  >
                    <div className=" items-center text-sm">
                      <img
                        src={course.image}
                        alt={course.name}
                        className=" mr-4"
                      />

                      <div>
                        <h4 className=" font-semibold">{course.name}</h4>
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
                        <span className=" text-[#767278] text-xs">
                          {course.lessons} Lessons ({course.duration})
                        </span>
                      </div>
                      <div className=" ">
                        <span className=" text-[#FF7800]">${course.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 ">
            <h3 className=" mb-8">Upcoming Tasks</h3>
            <div className="bg-white rounded-lg shadow ">
              {upcomingTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-5  space-y-5 flex items-center border-b-[0.5px] border-[#8F92A1]"
                >
                  <div className="mr-3">{task.icon}</div>
                  <div>
                    <p className="">{task.task}</p>
                    <p className="text-xs text-gray-500">{task.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
