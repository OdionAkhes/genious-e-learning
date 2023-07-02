import React from 'react'
import CourseCard from './CourseCard';

const PopularCourses = ({popularCourses}) => {
  return (
    <div className="col-span-3 md:col-span-3">
      <h3 className="text-lg ">Most Popular</h3>
      <div className="py-6">
        <div className="pb-2 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6">
          {popularCourses.map((course) => (
<CourseCard course={course}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularCourses