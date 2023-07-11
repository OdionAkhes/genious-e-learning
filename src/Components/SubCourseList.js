/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { markUnitCompleted } from "../redux/courseSlice";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";

const SubcourseList = () => {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  const handleCompleteUnit = (courseId, subcourseIndex, unitIndex) => {
    dispatch(markUnitCompleted({ courseId, subcourseIndex, unitIndex }));
  };

  return (
    <div>
      {courses.map((course, courseIndex) =>
        course.subcourses.map((subcourse, subcourseIndex) => (
          <Disclosure key={subcourse.name}>
            {({ open }) => (
              <>
                <Disclosure.Button>
                  <div className="flex justify-between">
                    <h2>{subcourse.name}</h2>
                    <div>{open ? <ChevronUpIcon /> : <ChevronDownIcon />}</div>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel>
                  {subcourse.units.map((unit, unitIndex) => (
                    <div key={unit.title}>
                      <h3>{unit.title}</h3>
                      <button
                        onClick={() =>
                          handleCompleteUnit(
                            course.id,
                            subcourseIndex,
                            unitIndex
                          )
                        }
                      >
                        Mark as completed
                      </button>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))
      )}
    </div>
  );
};

export default SubcourseList;
