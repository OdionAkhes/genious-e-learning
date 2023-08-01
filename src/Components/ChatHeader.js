import React from 'react'

const ChatHeader = ({chat}) => {
  return (
    <div className="flex items-center justify-between pb-8 md:pb-0  sticky">
      <div className="flex items-center justify-between space-x-4  ">
        <img
          src={chat.profilePicture}
          alt={chat.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className=" text-[#102844]">{chat.name}</h3>
          <p className="text-[#767278] text-sm ">{chat.status}</p>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <circle cx="18" cy="18" r="18" fill="#F8F8FB" />
          <g opacity="0.4">
            <path
              d="M18 18.75C17.5858 18.75 17.25 18.4142 17.25 18C17.25 17.5858 17.5858 17.25 18 17.25C18.4142 17.25 18.75 17.5858 18.75 18C18.75 18.4142 18.4142 18.75 18 18.75Z"
              fill="#102844"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 13.5C17.5858 13.5 17.25 13.1642 17.25 12.75C17.25 12.3358 17.5858 12 18 12C18.4142 12 18.75 12.3358 18.75 12.75C18.75 13.1642 18.4142 13.5 18 13.5Z"
              fill="#102844"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 24C17.5858 24 17.25 23.6642 17.25 23.25C17.25 22.8358 17.5858 22.5 18 22.5C18.4142 22.5 18.75 22.8358 18.75 23.25C18.75 23.6642 18.4142 24 18 24Z"
              fill="#102844"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default ChatHeader