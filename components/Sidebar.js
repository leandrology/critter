import Image from "next/image";
import logo from "../assets/images/critter.png";
import SidebarLink from "./SidebarLink";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  DotsCircleHorizontalIcon,
  UserIcon,
  ClipboardListIcon,
  BookmarkIcon,
  InboxIcon,
  BellIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="md:flex flex-col items-center xl:items-start xl:w-[310px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src={logo} width={30} height={30} />
      </div>

      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active></SidebarLink>
        <SidebarLink text="Explore" Icon={HashtagIcon}></SidebarLink>
        <SidebarLink text="Notifications" Icon={BellIcon}></SidebarLink>
        <SidebarLink text="Messages" Icon={InboxIcon}></SidebarLink>
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon}></SidebarLink>
        <SidebarLink text="Lists" Icon={ClipboardListIcon}></SidebarLink>
        <SidebarLink text="Profile" Icon={UserIcon}></SidebarLink>
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon}></SidebarLink>
      </div>
      <button className="hidden xl:inline ml-auto bg-[#661eb3] text-white rounded-full w-56 h-[52px] text-lg font-bold hover:bg-[#551996]">
        Creet
      </button>
      <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
          alt="profile pic"
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">Mark Zuckerbird</h4>
          <p className="text-[#6e767d]">@zuckonit</p>
        </div>
        <DotsCircleHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}

export default Sidebar;
