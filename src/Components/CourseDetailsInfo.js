import React from 'react'
import CourseFeatures from './CourseFeatures';

const CourseDetailsInfo = ({ course }) => {
 

  return (
    <div>
      <div className="px-6 flex justify-between p-4 border-2 border-dashed bg-[#F8F8FB] border-[#0000001A] rounded-xl">
        <h3 className="font-[500] text-md"> USD {course.price}</h3>
        <div className="relative">
          <h3 className="text-[#767278] z-10">$ {course.discountPrice}</h3>
          <div className="absolute h-0.5 bg-[#FF7800] transform -rotate-12 left-[-10%] right-[-10%] top-1/2"></div>
        </div>
      </div>

      <button className="font-[600] gap-2 flex rounded-lg w-full my-6 p-2 py-3 bg-[#4C6FFF] text-white  items-center  justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g id="Icon">
            <path
              id="Combined Shape"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8ZM10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22ZM17 22C18.1046 22 19 21.1046 19 20C19 18.8954 18.1046 18 17 18C15.8954 18 15 18.8954 15 20C15 21.1046 15.8954 22 17 22Z"
              fill="white"
            />
          </g>
        </svg>
        Buy Now
      </button>
      <hr className="my-6" />

      <h3>What you'll learn</h3>
      <p className="text-[#767278] text-sm my-4">
        Access to IBM Cloud modelling what is I was looking for and Aaron got me
        the solution.
      </p>

      <hr className="my-4" />

      <div className="my-6">
        <h3>This course includes:</h3>

        <CourseFeatures course={course} />
      </div>

      <hr className="my-4" />

      <h3>Tags:</h3>
      <div className="flex  flex-wrap gap-2 my-4">
        {course.tags.map((tag, id) => (
          <div
            key={id}
            className=" text-[#767278] text-xs bg-[#F8F8FB] rounded-md p-1 px-3 flex items-center"
          >
            {tag}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g id="ð Icon">
                <path
                  id="close"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.15052 3.20734C3.89018 2.947 3.46806 2.947 3.20772 3.20734C2.94736 3.46769 2.94736 3.88981 3.20772 4.15015L7.05755 7.99997L3.20776 11.8498C2.9474 12.1101 2.9474 12.5322 3.20776 12.7926C3.4681 13.0529 3.89022 13.0529 4.15056 12.7926L8.00035 8.94277L11.8501 12.7926C12.1105 13.0529 12.5326 13.0529 12.7929 12.7926C13.0533 12.5322 13.0533 12.1101 12.7929 11.8498L8.94315 7.99997L12.7929 4.15015C13.0533 3.88981 13.0533 3.46769 12.7929 3.20734C12.5326 2.947 12.1105 2.947 11.8501 3.20734L8.00035 7.05717L4.15052 3.20734Z"
                  fill="#767278"
                />
              </g>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetailsInfo