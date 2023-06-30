import React from 'react'

const PopularCourses = ({popularCourses}) => {
  return (
    <div className="col-span-3 md:col-span-3">
      <h3 className="text-lg mb-">Most Popular</h3>
      <div className="p-6">
        <div className="pb-2 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
          {popularCourses.map((course) => (
            <div
              key={course.id}
              className="text-sm bg-white shadow h-64 rounded-lg flex flex-col justify-between p-4"
            >
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
                  <span className="text-[#767278] text-xs">
                    {course.lessons} Lessons ({course.duration})
                  </span>
                </div>
                <div className=" ">
                  <span className="text-[#FF7800]">${course.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularCourses