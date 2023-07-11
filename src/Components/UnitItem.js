/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { toggleUnitCompletion } from "../redux/courseSlice";

function UnitItem({ unit, subcourseId, courseId }) {
  const dispatch = useDispatch();

  const handleToggleCompletion = () => {
    dispatch(toggleUnitCompletion({ courseId, subcourseId, unitId: unit.id }));
  };

  return (
    <div onClick={handleToggleCompletion}>
      {unit.title} - {unit.completed ? "Completed" : "Not Completed"}
    </div>
  );
}

export default UnitItem;
