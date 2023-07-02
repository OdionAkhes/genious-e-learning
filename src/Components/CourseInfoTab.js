import React from 'react'

const CourseInfoTab = ({course}) => {
  return (
    <div>
      <div>
        {course.description}
        <hr />
        <div className="my-4">
          {/*  reviews here */}
          <p className=" text-sm text-[#102844]">Reviews</p>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quo.
          </p>
        </div>
        <p className=" text-md text-[#102844]">Leave a Comment</p>
        <textarea
          className="w-full mt-2 p-6 bg-[#F8F8FB] text-xs"
          placeholder="Write your comments here..."
        />
        <button className="text-xs mt-2 py-3 px-4 bg-[#4C6FFF] text-white rounded shadow-sm focus:outline-none  ">
          Publish Review
        </button>
      </div>
    </div>
  );
}

export default CourseInfoTab