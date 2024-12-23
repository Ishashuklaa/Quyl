import React, { useState } from 'react';
import { Search, Bell, Calendar, MessageSquare, Filter, HelpCircle } from 'lucide-react';

const Header = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New assignment due tomorrow', unread: true },
    { id: 2, text: 'Quiz scheduled for next week', unread: true }
  ]);
  
  const [messages, setMessages] = useState([
    { id: 1, from: 'Teacher', text: 'Please submit your assignment', unread: true },
    { id: 2, from: 'Admin', text: 'Welcome to the new semester!', unread: false }
  ]);
  
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  
  const unreadNotifications = notifications.filter(n => n.unread).length;
  const unreadMessages = messages.filter(m => m.unread).length;

  return (
    <div className="relative flex justify-between items-center px-4 h-16 border-b border-gray-200">
      <div className="flex-1">
        <div className="relative max-w-xl w-full mr-5">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search your course"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Messages Button */}
        <div className="relative">
          <button 
            className="p-2 bg-transparent rounded-lg text-gray-500 hover:bg-gray-100 hover:text-blue-500 transition"
            onClick={() => setShowMessages(!showMessages)}
          >
            <MessageSquare size={20} />
            {unreadMessages > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                {unreadMessages}
              </span>
            )}
          </button>
          
          {showMessages && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-3 border-b border-gray-200">
                <h3 className="font-medium">Messages</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {messages.map(message => (
                  <div key={message.id} className={`p-3 border-b border-gray-100 ${message.unread ? 'bg-blue-50' : ''}`}>
                    <p className="font-medium text-sm">{message.from}</p>
                    <p className="text-sm text-gray-600">{message.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Filter Button */}
        <div className="relative">
          <button 
            className="p-2 bg-transparent rounded-lg text-gray-500 hover:bg-gray-100 hover:text-blue-500 transition"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={20} />
          </button>
          
          {showFilters && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-3">
                <h3 className="font-medium mb-2">Filter Options</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm">Show Active Only</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm">Current Semester</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Notifications Button */}
        <div className="relative">
          <button 
            className="p-2 bg-transparent rounded-lg text-gray-500 hover:bg-gray-100 hover:text-blue-500 transition"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell size={20} />
            {unreadNotifications > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                {unreadNotifications}
              </span>
            )}
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-3 border-b border-gray-200">
                <h3 className="font-medium">Notifications</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map(notification => (
                  <div key={notification.id} className={`p-3 border-b border-gray-100 ${notification.unread ? 'bg-blue-50' : ''}`}>
                    <p className="text-sm">{notification.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Calendar Button */}
        {/* <button className="p-2 bg-transparent rounded-lg text-gray-500 hover:bg-gray-100 hover:text-blue-500 transition">
          <Calendar size={20} />
        </button> */}

        {/* Help Button */}
        <div className="relative">
          <button 
            className="p-2 bg-transparent rounded-lg text-gray-500 hover:bg-gray-100 hover:text-blue-500 transition"
            onClick={() => setShowHelp(!showHelp)}
          >
            <HelpCircle size={20} />
          </button>
          
          {showHelp && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-3">
                <h3 className="font-medium mb-2">Help Center</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-blue-500 hover:underline">FAQs</a>
                  <a href="#" className="block text-sm text-blue-500 hover:underline">Contact Support</a>
                  <a href="#" className="block text-sm text-blue-500 hover:underline">Video Tutorials</a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2">
          <img src="https://i.pinimg.com/originals/f7/0c/03/f70c034cbac7e48309f279afcfce7e84.jpg" alt="User" className="w-8 h-8 rounded-full object-cover" />
          <span className="text-sm font-medium text-gray-700">Isha Shukla</span>
        </div>
      </div>
    </div>
  );
};

export default Header;