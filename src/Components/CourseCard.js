import React from 'react'

const CourseCard = ({course}) => {
  return (
    <div className="text-sm bg-white shadow h-64 rounded-lg flex flex-col justify-between p-4">
      <div className=" items-center text-sm">
        <img src={course.image} alt={course.name} className="mr-4" />

        <div className="py-2">
          <h4 className="font-semibold">{course.name}</h4>
          <p className="text-sm text-gray-500">{course.shortName}</p>
        </div>
      </div>

      <div className="pb-3 flex items-center justify-between">
        <div className="flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-yellow-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <p className="text-sm ml-1">{course.level}</p>
        </div>
        <div className="flex items-center">
          <p className="text-sm">{course.lessons} lessons</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard