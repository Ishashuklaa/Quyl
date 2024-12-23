import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Card from './ui/Card';
import { setStudents, addStudent, setLoading, setError } from '../redux/studentsReducer';

const StudentTable = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');
  const [loading, setLoadingState] = useState(false);


  //console.log(`${process.env.BACKEND_Uri}/api/supabase-data`);
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        dispatch(setLoading(true));
        const response = await axios.get('https://quyl-xepd.onrender.com/api/supabase-data');
        console.log(response.data);
        dispatch(setStudents(response.data)); // Store students in Redux
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchStudents();
  }, [dispatch]);

  const handleAddStudent = async () => {
    if (!newStudentName) return;

    try {
      setLoadingState(true);
      const response = await axios.post('https://quyl-xepd.onrender.com/api/add-student', {
        studentName: newStudentName,
      });
      dispatch(addStudent(response.data)); // Add new student to Redux store
      setNewStudentName(''); // Clear the input
      setIsModalOpen(false); // Close the modal
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      setLoadingState(false);
    }
  };

  const getCourseIcon = (courseName) => {
    if (courseName.includes('Science')) {
      return (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg mr-1">
          <img src="https://thumbs.dreamstime.com/b/business-man-12515547.jpg" alt="Science Icon" className="w-8 h-8" />
        </span>
      );
    } else if (courseName.includes('Math')) {
      return (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg mr-1">
          <img src="https://tse4.mm.bing.net/th?id=OIP.6b8EYnxj_mjR9cWq2DegMgHaG-&pid=Api&P=0&h=180" alt="Math Icon" className="w-8 h-8" />
        </span>
      );
    }
  };

  return (
    <Card className="mt-6">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <select className="p-2 border border-gray-400 rounded-md bg-gray-200 text-b font-bold text-sm hover:border-blue-500">
            <option>AY 2024-25</option>
          </select>
          <select className="p-2 border border-gray-400 rounded-md bg-gray-200 text-b font-bold text-sm hover:border-blue-500">
            <option>CBSE 9</option>
          </select>
        </div>
        <button
          className="flex items-center gap-2 bg-gray-300 px-4 py-2 text-black  rounded-md text-sm font-bold hover:bg-blue-400"
          onClick={() => setIsModalOpen(true)} // Open the modal when button is clicked
        >
          <div className="flex justify-center items-center space-x-2">
            <span className="text-lg text-b">&#43;</span>
            <span className="text-[15px] text-b">Add new Student</span>
          </div>


        </button>
      </div>

      {/* Modal for adding new student */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Add New Student</h2>
            <input
              type="text"
              placeholder="Enter Student Name"
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={handleAddStudent}
                disabled={loading}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                {loading ? 'Adding...' : 'Add Student'}
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="ml-4 text-red-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <table className="w-full border-collapse mt-6">
        <thead>
          <tr>
            <th className="text-left px-6 py-3 text-sm font-medium text-black bg-white">Student Name</th>
            <th className="text-left px-6 py-3 text-sm font-medium text-black bg-white">Cohort</th>
            <th className="text-left px-6 py-3 text-sm font-medium text-black bg-white">Courses</th>
            <th className="text-left px-6 py-3 text-sm font-medium text-black bg-white">Date Joined</th>
            <th className="text-left px-6 py-3 text-sm font-medium text-black bg-white">Last Login</th>
            <th className="text-left px-6 py-3 text-sm font-medium text-black bg-white">Status</th>
          </tr>
        </thead>
        <tbody>
          {students && students.length > 0 ? (
            students.map((student, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-6 py-3 text-sm text-gray-700">{student['Student_Name']}</td>
                <td className="px-6 py-3 text-sm text-gray-700">{student.Cohort}</td>
                <td className="px-6 py-3 text-sm text-gray-700">
                  {typeof student.Courses === 'string'
                    ? student.Courses.split(',').map((course, idx) => (
                      <span key={idx} className="inline-flex items-center gap-2 mr-4 text-sm">
                        {getCourseIcon(course.trim())}
                        <span className="text-gray-600">{course.trim()}</span>
                      </span>
                    ))
                    : 'No courses'}
                </td>
                <td className="px-6 py-3 text-sm text-gray-700">{student['Date_Joined']}</td>
                <td className="px-6 py-3 text-sm text-gray-700">{student['Last_Login']}</td>
                <td className="px-6 py-3 text-sm">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${student.Status === false ? 'bg-red-500' : 'bg-green-500'
                      }`}
                  ></span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-6 py-3 text-sm text-gray-500 text-center">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default StudentTable;
