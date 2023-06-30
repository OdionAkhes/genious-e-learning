import React from 'react'

const UpcomingTasks = ({upcomingTasks}) => {
  return (
    <div className="col-span-3 md:col-span-1 ">
      <h3 className="mb-8">Upcoming Tasks</h3>
      <div className="bg-white rounded-lg shadow">
        {upcomingTasks.map((task) => (
          <div
            key={task.id}
            className="p-6 space-y-4 flex items-center border-b-[0.5px] border-[#8F92A1]"
          >
            <div className="mr-3">{task.icon}</div>
            <div>
              <p className="">{task.task}</p>
              <p className="text-xs text-gray-500">{task.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingTasks