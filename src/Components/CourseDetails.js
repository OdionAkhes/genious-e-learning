/** @format */

import React from "react";
import { useParams ,useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { Tab } from "@headlessui/react";
import Tabs from "./Tabs";
import CourseDetailsInfo from "./CourseDetailsInfo";
const CourseDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const course = useSelector((state) =>
    state.courses.find((course) => course.id === id)
  );

    return course ? (
      <div className="bg-[#F5F7F9] px-6 pt-6">
        <div className=" grid grid-cols-3 gap-6 ">
          <div className="col-span-2">
            <h3 className="font-semibold pb-2 bg-[#F5F7F9]">Discover</h3>
            <div className="flex pb-4 items-center bg-[#F5F7F9] ">
              <p
                onClick={() => navigate("/discover")}
                className="font-thin text-[#767278] text-sm cursor-pointer"
              >
                Courses
              </p>
              <svg
                className="h-4 w-4 mx-2"
                fill="none"
                stroke="#767278"
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
              <p className=" text-sm text-[#102844]">{course.name}</p>
            </div>
            <div className=" bg-white rounded-xl p-6">
              <video className="w-full rounded-xl" controls>
                <source src={course.image} type="video/mp4" />
              </video>
              <h3 className="mt-4 font-semibold  text-[#102844]">
                {course.name}
              </h3>
              <p className="text-sm text-[#767278]">By {course.instructor}</p>

              <div className="mt-4">
                <Tabs course={course} />
                <hr />
                <div className="my-4">
                  {/*  reviews here */}
                  <p className=" text-sm text-[#102844]">Reviews</p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, quo.
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
          </div>
          <div className="bg-white p-6 rounded-xl">
            <CourseDetailsInfo course={course} />
          </div>
        </div>
      </div>
    ) : (
      <div>Course not found</div>
    );
};

export default CourseDetails;
