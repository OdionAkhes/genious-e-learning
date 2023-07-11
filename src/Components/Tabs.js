/** @format */

import { Tab } from "@headlessui/react";
import CourseInfoTab from "./CourseInfoTab";
import CourseContent from "./CourseContent";
function Tabs({course, setSelectedTab}) {
  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex  space-x-8 " aria-label="My tabs">
          <Tab
            onClick={() => setSelectedTab("Information")}
            className={({ selected }) =>
              selected
                ? " rounded-xl p-1  px-2 text-xs   text-white  bg-[#FF7800] outline-none "
                : " rounded  p-1 px-2 text-xs  text-[#767278]  "
            }
          >
            Information
          </Tab>
          <Tab
            onClick={() => setSelectedTab("Content")}
            className={({ selected }) =>
              selected
                ? " rounded-xl p-1 px-2 text-xs text-white outline-none  bg-[#FF7800] "
                : " text-xs p-1 px-2  text-[#767278] "
            }
          >
            Content
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "rounded-xl flex gap-2  p-1 px-2 text-xs  outline-none text-white  bg-[#FF7800]"
                : " flex gap-2 text-xs p-1 px-2  text-[#767278] "
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <g id="Components/Icons/Buttons/lock">
                <path
                  id="lock"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.75 7.4375C13.9236 7.4375 14.875 8.38886 14.875 9.5625V13.8125C14.875 14.9861 13.9236 15.9375 12.75 15.9375H4.25C3.0764 15.9375 2.125 14.9861 2.125 13.8125V9.5625C2.125 8.38886 3.0764 7.4375 4.25 7.4375V5.3125C4.25 2.96529 6.15279 1.0625 8.5 1.0625C10.8472 1.0625 12.75 2.96529 12.75 5.3125V7.4375ZM8.5 2.47917C10.0648 2.47917 11.3333 3.74769 11.3333 5.3125V7.4375H5.66667V5.3125C5.66667 3.74769 6.93519 2.47917 8.5 2.47917ZM12.75 8.85417H4.25C3.8588 8.85417 3.54167 9.17129 3.54167 9.5625V13.8125C3.54167 14.2037 3.8588 14.5208 4.25 14.5208H12.75C13.1412 14.5208 13.4583 14.2037 13.4583 13.8125V9.5625C13.4583 9.17129 13.1412 8.85417 12.75 8.85417Z"
                  fill="#767278"
                />
              </g>
            </svg>
            Community
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "rounded-xl p-1 px-2 text-xs outline-none flex gap-2  text-white  bg-[#FF7800]"
                : " text-xs flex gap-2  p-1 px-2  text-[#767278] "
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <g id="Components/Icons/Buttons/lock">
                <path
                  id="lock"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.75 7.4375C13.9236 7.4375 14.875 8.38886 14.875 9.5625V13.8125C14.875 14.9861 13.9236 15.9375 12.75 15.9375H4.25C3.0764 15.9375 2.125 14.9861 2.125 13.8125V9.5625C2.125 8.38886 3.0764 7.4375 4.25 7.4375V5.3125C4.25 2.96529 6.15279 1.0625 8.5 1.0625C10.8472 1.0625 12.75 2.96529 12.75 5.3125V7.4375ZM8.5 2.47917C10.0648 2.47917 11.3333 3.74769 11.3333 5.3125V7.4375H5.66667V5.3125C5.66667 3.74769 6.93519 2.47917 8.5 2.47917ZM12.75 8.85417H4.25C3.8588 8.85417 3.54167 9.17129 3.54167 9.5625V13.8125C3.54167 14.2037 3.8588 14.5208 4.25 14.5208H12.75C13.1412 14.5208 13.4583 14.2037 13.4583 13.8125V9.5625C13.4583 9.17129 13.1412 8.85417 12.75 8.85417Z"
                  fill="#767278"
                />
              </g>
            </svg>
            Students
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2 text-[#102844]">
          <Tab.Panel className="">
            <CourseInfoTab course={course} />
          </Tab.Panel>
          <Tab.Panel>
            <CourseContent course={course} />
          </Tab.Panel>
          <Tab.Panel>
            <p>Tab 3 Content</p>
          </Tab.Panel>
          <Tab.Panel>
            <p>Tab 3 Content</p>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Tabs;
