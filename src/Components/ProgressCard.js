import React from "react";

const ProgressCard = ({ title, count, progress, color, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center mb-2">
        <div
          className={`rounded-full ${color} text-white h-10 w-10 flex items-center justify-center mr-2`}
        >
          {icon}
        </div>
        <div>
          <h2 className="text-lg font-semibold">{count}</h2>
          <p className="mb-2 text-sm text-[#767278]">{title}</p>
        </div>
      </div>

      <div className="bg-gray-200 h-2 rounded-full">
        <div
          className={`bg-${color.split("-")[2]}-500 h-full rounded-full`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="text-xs text-gray-500">{progress}%</span>
    </div>
  );
};

export default ProgressCard;

