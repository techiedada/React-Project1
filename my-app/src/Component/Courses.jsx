import React from 'react';
import personcomputer from '../Assets/personcomputer.jpg';

const Courses = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-600 text-white flex flex-col p-4">
        <h1 className="text-xl font-bold mb-6">COURSES</h1>
        <nav className="flex flex-col space-y-4">
          <a href="/courses/java" className="hover:bg-gray-700 p-2 rounded" target="_blank" rel="noopener noreferrer">Java Full Stack</a>
          <a href="/courses/dotnet" className="hover:bg-gray-700 p-2 rounded" target="_blank" rel="noopener noreferrer">Dot Net Full Stack</a>
          <a href="/courses/mern" className="hover:bg-gray-700 p-2 rounded" target="_blank" rel="noopener noreferrer">React MERN Stack</a>
          <a href="/courses/angular" className="hover:bg-gray-700 p-2 rounded" target="_blank" rel="noopener noreferrer">Angular MEAN Stack</a>
          <a href="/courses/hadoop" className="hover:bg-gray-700 p-2 rounded" target="_blank" rel="noopener noreferrer">Hadoop/Bigdata</a>
          <a href="/courses/python" className="hover:bg-gray-700 p-2 rounded" target="_blank" rel="noopener noreferrer">Python with Data Science</a>
        </nav>
      </aside>

      {/* Image */}
      <div className="flex-1">
        <img
          src={personcomputer}
          alt="Course Banner"
          className="w-full h-full object-cover max-h-[500px] md:max-h-none"
        />
      </div>
    </div>
  );
};

export default Courses;