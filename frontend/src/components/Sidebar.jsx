import React from 'react';
import { Home, Users, Book, HelpCircle, BarChart2, Settings } from 'lucide-react';
import SidebarItem from './SidebarItem';
import { AiOutlineDashboard } from "react-icons/ai";
import { RiSettingsLine } from "react-icons/ri";
import { PiNotebookFill } from "react-icons/pi";
import Vector from "./assets/Vector.png";

const Sidebar = () => (
  <div className="w-60 h-screen bg-white border-r border-gray-200 p-6 flex flex-col gap-6 shadow-md">
  <div className="mb-8 flex justify-start items-center gap-2">
  <img
    src={Vector}
    alt="Quyll Logo"
    className="h-26 w-26 object-contain"
  />

</div>



    <nav className="flex flex-col gap-4">
      <SidebarItem icon={<AiOutlineDashboard size={20}/>} label="Dashboard" />
      <SidebarItem icon={<PiNotebookFill size={20} />} label="Students" active />
      <SidebarItem icon={<Book size={20} />} label="Chapter" />
      <SidebarItem icon={<HelpCircle size={20} />} label="Help" />
      <SidebarItem icon={<BarChart2 size={20} />} label="Reports" />
      <SidebarItem icon={<RiSettingsLine size={20} />} label="Settings" />
    </nav>
  </div>
);

export default Sidebar;
