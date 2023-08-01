/** @format */

import React, { useState } from "react";
import courses from "../data/courses";
import { useSelector } from "react-redux";
import CourseCard from "../Components/CourseCard";

function DiscoveryPage() {
  const searchTerm = useSelector((state) => state.search.searchTerm);

  const [selectedSort, setSelectedSort] = useState("popular");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [gridView, setGridView] = useState(true);

  // Handle sort change
  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  // Handle course change
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  // Handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Toggle grid view
  const toggleGridView = () => {
    setGridView(!gridView);
  };

  // Apply filters and sorting

  let filteredCourses = courses;
  if (selectedCategory !== "all") {
    filteredCourses = filteredCourses.filter(
      (course) => course.category === selectedCategory
    );
  }
  if (selectedSort === "popular") {
    filteredCourses = filteredCourses
      .slice()
      .sort((a, b) => b.enrollments - a.enrollments);
  } else if (selectedSort === "price-low-high") {
    filteredCourses = filteredCourses.slice().sort((a, b) => a.price - b.price);
  } else if (selectedSort === "price-high-low") {
    filteredCourses = filteredCourses.slice().sort((a, b) => b.price - a.price);
  }

  if (searchTerm) {
    filteredCourses = filteredCourses.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="p-6 bg-[#F5F7F9]">
      <h3 className="text-lg mb-6 font-semibold text-[#102844]"> Discover</h3>
      <div className="flex items-center justify-between mb-4 text-sm">
        <div className="flex  flex-wrap gap-2 md:gap-6">
          {/* Sort By dropdown */}
          <div className="text-sm bg-white px-2 rounded-xl flex items-center ">
            <label htmlFor="sortSelect" className="">
              Sort By:
            </label>
            <select
              id="sortSelect"
              className=" text-sm text-[#767278] w-20"
              value={selectedSort}
              onChange={handleSortChange}
            >
              <option value="popular">Popular</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>

          <div className="text-sm bg-white p-2 rounded-xl flex items-center ">
            <label htmlFor="courseSelect" className="text-[#767278] text-sm">
              Courses:
            </label>
            <select
              id="courseSelect"
              className=" text-sm text-[#767278]"
              value={selectedCourse}
              onChange={handleCourseChange}
            ></select>
          </div>

          <div className="text-[14px] bg-white px-2 rounded-xl flex items-center ">
            <label htmlFor="categorySelect" className="">
              Category:
            </label>
            <select
              id="categorySelect"
              className=" py-1 px-1 w-26 text-[#767278] text-sm"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="all">All Category</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="javascript">Javascript</option>
              <option value="python">Python</option>
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-4 ">
          <button className="ml-3 text-sm text-[#767278] items-center flex px-2 py-2 bg-white  rounded-xl  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H7C6.44772 9 6 8.55228 6 8ZM8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12ZM10 16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16C14 16.5523 13.5523 17 13 17H11C10.4477 17 10 16.5523 10 16Z"
                fill="#767278"
              />
            </svg>
            Filters
          </button>
          <button
            className={` px-1 rounded-xl ${gridView ? "bg-white" : "bg-white"}`}
            onClick={toggleGridView}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M10.5 10.5H16.5V16.5H10.5V10.5ZM10.5 19.5H16.5V25.5H10.5V19.5ZM19.5 19.5H25.5V25.5H19.5V19.5ZM19.5 10.5H25.5V16.5H19.5V10.5Z"
                fill="#4C6FFF"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`grid ${
          gridView ? " lg:grid-cols-4 grid-cols-2 md:grid-cols-3" : ""
        } gap-4`}
      >
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default DiscoveryPage;
