import React from 'react'
import personcomputer from '../Assets/personcomputer.jpg'

const Courses = () => {
  return (
    <div className="flex h-screen">
  
  <aside className="w-64 h-screen bg-gray-600 text-white flex flex-col p-4">
      <h1 className="text-1.4xl font-bold mb-6">COURSES</h1>
      <nav className="flex flex-col space-y-4">
        <a href="/courses/java" className="hover:bg-gray-700 p-2 rounded" target="_blank">Java Full Stack</a>
        <a href="/courses/dotnet" className="hover:bg-gray-700 p-2 rounded" target="_blank">Dot Net Full Stack</a>
        <a href="/courses/mern" className="hover:bg-gray-700 p-2 rounded" target="_blank">React MERN Stack</a>
        <a href="/courses/angular" className="hover:bg-gray-700 p-2 rounded" target="_blank">Angular MEAN Stack</a>
        <a href="/courses/hadoop" className="hover:bg-gray-700 p-2 rounded" target="_blank">Hadoop/Bigdata</a>
        <a href="/courses/python" className="hover:bg-gray-700 p-2 rounded" target="_blank">Python with Data Science</a>
      </nav>
    </aside>

     <img
                  src={personcomputer}
                  alt="Home Banner"
                  className=" flex w- [200px] h-[651px] object-cover shadow-lg flex-1 flex items-center justify-center "
                />
    </div>
  )
}

export default Courses
