/** @format */


import React from "react";
import courses from "../data/courses";
import PopularCourses from "../Components/PopularCourses";
import { useSelector } from "react-redux";
import UpcomingTasks from "../Components/UpcomingTasks";
import upcomingTasks from "../data/tasks";




function HomePage() {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const popularCourses = courses
    .filter((course) => course.enrollments > 500 &&
      course.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, 6);

  const completedCoursesProgress = 70;
  const certificatesEarnedProgress = 20;
  const coursesInProgressProgress = 30;
  const completedCoursesCount = "1.2k";
  const certificatesEarnedCount = 470;
  const coursesInProgressCount = 342;
  const careerPathsCount = 20;

  return (
    <div className="p-6 bg-[#f9f8f8]">
      <div className="grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <div className="rounded-full bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-700 text-white h-10 w-10 flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-5a1 1 0 100-2 1 1 0 000 2zm2-6a1 1 0 10-2 0v4a1 1 0 102 0V5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold">{completedCoursesCount}</h2>
              <p className="mb-2 text-sm text-sm text-[#767278]">
                Courses Completed
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-gray-200 h-2 rounded-full w-full">
              <div
                className="bg-[#4C6FFF] h-full rounded-full"
                style={{ width: `${completedCoursesProgress}%` }}
              ></div>
            </div>
            <span className="text-md text-black ml-2">
              {completedCoursesProgress}%
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <div className="rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-white h-10 w-10 flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zm2 2h12v12H4V4zm4 3a1 1 0 10-2 0v4a1 1 0 002 0V7zm2 0a1 1 0 10-2 0v4a1 1 0 002 0V7zm2 0a1 1 0 10-2 0v4a1 1 0 002 0V7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                {certificatesEarnedCount}
              </h2>
              <p className="mb-2 text-sm text-[#767278]">Certificates Earned</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-200 h-2 rounded-full w-full">
              <div
                className="bg-[#FF7373] h-full rounded-full"
                style={{ width: `${certificatesEarnedProgress}%` }}
              ></div>
            </div>
            <span className="text-md text-black ml-2">
              {certificatesEarnedProgress}%
            </span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <div className="rounded-full bg-gradient-to-br from-yellow-400 to-yellow-200 text-white h-10 w-10 flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-5a1 1 0 100-2 1 1 0 000 2zm2-6a1 1 0 10-2 0v4a1 1 0 102 0V5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                {coursesInProgressCount}
              </h2>
              <p className="mb-2 text-sm text-[#767278]">Courses in Progress</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-gray-200 h-2 rounded-full w-full">
              <div
                className="bg-yellow-500 h-full rounded-full"
                style={{ width: `${coursesInProgressProgress}%` }}
              ></div>
            </div>
            <span className="text-md text-black ml-2">
              {coursesInProgressProgress}%
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <div className="rounded-full bg-gradient-to-t from-green-500 to-green-300 text-white h-10 w-10 flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-5a1 1 0 100-2 1 1 0 000 2zm2-6a1 1 0 10-2 0v4a1 1 0 102 0V5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold">{careerPathsCount}</h2>
              <p className="text-sm text-[#767278]">Career Path</p>
              <button className="text-[#4C6FFF] py-4 rounded text-sm">
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <PopularCourses popularCourses={popularCourses} />
          <UpcomingTasks upcomingTasks={upcomingTasks} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
