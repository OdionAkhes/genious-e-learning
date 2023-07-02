import React from 'react'

const courseOverview = ({course}) => {
    const units = Array.from({ length: 11 }, (_, i) => `Unit ${i + 1}`);
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Course Overview</h2>
      <ul>
        {units.map((unit, index) => (
          <li key={index}>{unit}</li>
        ))}
      </ul>
    </div>
  );
}

export default courseOverview