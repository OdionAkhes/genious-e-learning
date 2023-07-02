/** @format */

import { Tab } from "@headlessui/react";
import courses from "../data/courses";
function Tabs({course}) {
  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-8 " aria-label="My tabs">
          <Tab
            className={({ selected }) =>
              selected
                ? " rounded-xl p-1  px-2 text-xs   text-white  bg-[#FF7800] outline-none "
                : " rounded  p-1 px-2 text-xs  text-[#767278]  "
            }
          >
            Information
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? " rounded-xl p-1 px-2 text-xs text-white outline-none  bg-[#FF7800] "
                : " text-xs  p-1 px-2  text-[#767278] "
            }
          >
            Content
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "rounded-xl p-1 px-2 text-xs  outline-none text-white  bg-[#FF7800]"
                : "   text-xs p-1 px-2  text-[#767278] "
            }
          >
            community
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "rounded-xl p-1 px-2 text-xs outline-none  text-white  bg-[#FF7800]"
                : "   text-xs p-1 px-2  text-[#767278] "
            }
          >
            students
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2 text-[#102844]">
          <Tab.Panel className="text-sm ">{course.description}</Tab.Panel>
          <Tab.Panel>
            <p>Tab 2 Content</p>
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
