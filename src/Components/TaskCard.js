/** @format */

import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="flex items-center justify-between border-b pb-3 mb-3">
      {task.icon}
      <div className="w-3/5">
        <h3 className="text-sm font-semibold">{task.task}</h3>
        <p className="text-sm text-gray-500">{task.time}</p>
      </div>
      <button className="bg-[#F3F8FF] rounded px-4 py-2 text-sm text-[#4C6FFF]">
        Start
      </button>
    </div>
  );
};

export default TaskCard;
