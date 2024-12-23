import React from 'react';

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center px-4 py-2 rounded-lg cursor-pointer transition-all 
                ${active ? 'bg-gray-400 text-black font-medium' : 'hover:bg-gray-100'}`
    }
  >
    <span
      className={`mr-3 transition-colors 
                  ${active ? 'text-black' : 'text-gray-500'}`
      }
    >
      {icon}
    </span>
    <span
      className={`transition-colors 
                  ${active ? 'text-black font-medium' : 'text-gray-700'}`
      }
    >
      {label}
    </span>
  </div>
);

export default SidebarItem;
