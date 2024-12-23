
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StudentTable from './StudentTable';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="flex-grow p-6 bg-white overflow-y-auto rounded-lg shadow-md">
          <StudentTable />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
