/** @format */

import React from "react";

const StatsBox = ({ stat }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow h-14 w-14 rounded-lg flex items-center justify-center mb-4">
        {stat.icon}
      </div>
      <div>
        <h2 className="text-lg font-semibold">{stat.count}</h2>
        <p className="text-sm text-[#767278]">{stat.text}</p>
      </div>
    </div>
  );
};

export default StatsBox;
