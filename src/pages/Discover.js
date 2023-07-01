/** @format */

import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import courses from "../data/courses";
import { useSelector } from "react-redux";
function DiscoveryPage() {
  // const dispatch = useDispatch();
  // const courses = useSelector((state) => state.courses);
  
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
    filteredCourses = filteredCourses.sort(
      (a, b) => b.enrollments - a.enrollments
    );
  } else if (selectedSort === "price-low-high") {
    filteredCourses = filteredCourses.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "price-high-low") {
    filteredCourses = filteredCourses.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4 text-sm">
        <div className="flex space-x-2">
          <label htmlFor="sortSelect" className="font-medium">
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
            className={`px-2 py-1 rounded ${gridView ? "bg-gray-200" : ""}`}
            onClick={toggleGridView}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {gridView ? (
                <path
                  fillRule="evenodd"
                  d="M4 5a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H4zm0 2h12v6H4V7zm0 8v1a1 1 0 001 1h12a1 1 0 001-1v-1H4zm0-8h6v6H4V7z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 4a1 1 0 00-1 1v8a1 1 0 001 1h5v-2H5V6h3V4H4zm6 0h3a1 1 0 011 1v8a1 1 0 01-1 1h-3v2h3a3 3 0 003-3V7a3 3 0 00-3-3zm3 2v6h-3V6h3z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
       
        </div>
      </div>
      <div className={`grid ${gridView ? "grid-cols-4" : ""} gap-4`}>
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow p-4">
            <img
              src={course.image}
              alt={course.name}
              className="h-32 w-full object-cover mb-4 rounded-lg"
            />
            <h4 className="text-sm mb-2">{course.name}</h4>
            <p className="text-gray-500 text-sm">{course.shortName}</p>
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
                <span className="text-gray-500 text-xs">
                  {course.lessons} Lessons ({course.duration})
                </span>
              </div>
              <div className="text-[#FF7800]">${course.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiscoveryPage;
