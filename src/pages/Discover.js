/** @format */

import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import courses from "../data/courses";
import { useSelector } from "react-redux";
import CourseCard from "../Components/CourseCard";

function DiscoveryPage() {
 
  const searchTerm = useSelector((state) => state.search.searchTerm);


  const [selectedSort, setSelectedSort] = useState("popular");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [gridView, setGridView] = useState(true);

  // Handle sort change
  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
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
    <div className="p-6  bg-[#F5F7F9]">
      <h3 className="text-lg mb-6 font-semibold text-[#102844]"> Discover</h3>
      <div className="flex items-center justify-between mb-4 text-sm">
        <div className="flex space-x-2  ">
          <label htmlFor="sortSelect" className="font-medium ">
            Sort By:
          </label>
          <select
            id="sortSelect"
            className="border text-sm border-gray-300 rounded-md py-1 px-2"
            value={selectedSort}
            onChange={handleSortChange}
          >
            <option value="popular">Popular</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
          <label htmlFor="categorySelect" className="font-medium ml-4">
            Category:
          </label>
          <select
            id="categorySelect"
            className="border border-gray-300 rounded-md py-1 px-2"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">All</option>
            <option value="technology">Technology</option>
            <option value="business">Business</option>
            <option value="marketing">Marketing</option>
            <option value="design">Design</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className={` px-1 rounded ${gridView ? "bg-white" : ""}`}
            onClick={toggleGridView}
          >
            {gridView ? (
              <svg
                width="34"
                height="34"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Components/Icons/Content/layout-grid">
                  <path
                    id="Combined Shape"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 10.5H16.5V16.5H10.5V10.5ZM10.5 19.5H16.5V25.5H10.5V19.5ZM19.5 19.5H25.5V25.5H19.5V19.5ZM19.5 10.5H25.5V16.5H19.5V10.5Z"
                    fill="#4C6FFF"
                  />
                </g>
              </svg>
            ) : (
              <svg
                width="34"
                height="34"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Components/Icons/Content/layout-grid">
                  <path
                    id="Combined Shape"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 10.5H16.5V16.5H10.5V10.5ZM10.5 19.5H16.5V25.5H10.5V19.5ZM19.5 19.5H25.5V25.5H19.5V19.5ZM19.5 10.5H25.5V16.5H19.5V10.5Z"
                    fill="#4C6FFF"
                  />
                </g>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`grid ${
          gridView ? " lg:grid-cols-4 grid-cols-2 md:grid-cols-3   " : ""
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
