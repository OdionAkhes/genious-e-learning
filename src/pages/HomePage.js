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
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex items-center mb-2">
            <div className="rounded-full bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-700 text-white h-10 w-10 flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g id="Icon">
                  <path
                    id="Combined Shape"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.16666 0.833374C2.78595 0.833374 1.66666 1.95267 1.66666 3.33337V16.6667C1.66666 18.0475 2.78595 19.1667 4.16666 19.1667H15.8333C17.2141 19.1667 18.3333 18.0475 18.3333 16.6667V3.33337C18.3333 1.95267 17.2141 0.833374 15.8333 0.833374H4.16666ZM15.8333 2.50004H4.16666C3.70641 2.50004 3.33332 2.87314 3.33332 3.33337V16.6667C3.33332 17.127 3.70642 17.5 4.16666 17.5H15.8333C16.2936 17.5 16.6667 17.127 16.6667 16.6667V3.33337C16.6667 2.87313 16.2936 2.50004 15.8333 2.50004ZM4.99999 5.00004C4.99999 4.53981 5.37309 4.16671 5.83332 4.16671H14.1667C14.6269 4.16671 15 4.53981 15 5.00004C15 5.46027 14.6269 5.83337 14.1667 5.83337H5.83332C5.37308 5.83337 4.99999 5.46027 4.99999 5.00004ZM4.99999 8.33337C4.99999 7.87313 5.37309 7.50004 5.83332 7.50004H14.1667C14.6269 7.50004 15 7.87313 15 8.33337C15 8.79362 14.6269 9.16671 14.1667 9.16671H5.83332C5.37308 9.16671 4.99999 8.79362 4.99999 8.33337ZM4.99999 11.6667C4.99999 11.2065 5.37309 10.8334 5.83332 10.8334H14.1667C14.6269 10.8334 15 11.2065 15 11.6667C15 12.127 14.6269 12.5 14.1667 12.5H5.83332C5.37308 12.5 4.99999 12.127 4.99999 11.6667ZM4.99999 15C4.99999 14.5398 5.37309 14.1667 5.83332 14.1667H9.16666C9.62691 14.1667 9.99999 14.5398 9.99999 15C9.99999 15.4603 9.62691 15.8334 9.16666 15.8334H5.83332C5.37309 15.8334 4.99999 15.4603 4.99999 15Z"
                    fill="#FFF"
                  />
                </g>
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
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id="Icon">
                  <path
                    id="awards"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 9C19 11.3787 17.8135 13.4804 16 14.7453V22H13.4142L12 20.5858L10.5858 22H8V14.7453C6.18652 13.4804 5 11.3787 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9ZM17 9C17 11.7614 14.7614 14 12 14C9.23858 14 7 11.7614 7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9ZM10 19.7573L12 17.7573L14 19.7574V15.7101C13.3663 15.8987 12.695 16 12 16C11.305 16 10.6337 15.8987 10 15.7101V19.7573Z"
                    fill="white"
                  />
                </g>
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
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id="Icon">
                  <path
                    id="trending"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.41421 16.4322L0 15.018L7.07107 7.94693L13.435 14.3109L17.6777 10.0682L15.9353 8.32587L22.6274 6.53271L20.8343 13.2248L19.0919 11.4825L13.435 17.1393L7.07107 10.7754L1.41421 16.4322Z"
                    fill="white"
                  />
                </g>
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
          <div className="flex  mb-2">
            <div className="rounded-full bg-gradient-to-t from-green-500 to-green-300 text-white h-10 w-10 flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id="Icon">
                  <path
                    id="flag"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 21H6V11H12V13H20V5H13V3H4V21ZM12 5H6V9H13V11H18V7H12V5Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold">{careerPathsCount}</h2>
              <p className="text-sm text-[#767278]">Career Path</p>
              <button className="text-[#4C6FFF] py-4 rounded text-sm flex  items-center gap-3">
                Start Quiz{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                  >
                    <path
                      d="M11.0469 3.20605L7.84082 6.41211V3.79395H0V2.61133H7.84082L7.84766 0L11.0469 3.20605Z"
                      fill="#4C6FFF"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <PopularCourses popularCourses={popularCourses} />
          <UpcomingTasks upcomingTasks={upcomingTasks} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
