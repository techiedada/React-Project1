import React, { useState } from 'react';
import java from '../Assets/java.png';
import react from '../Assets/react.png';
import net from '../Assets/net.png';
import Register from './Register';

const Events = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="px-4">
      <h3 className="pt-8 pb-4 text-blue-800 text-3xl font-bold text-center">
        MERN Infotech Events & Highlights
      </h3>

      <h2 className="text-center pt-4 text-2xl text-green-600 font-bold pb-6">
        ------ Upcoming Batches ------
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 mb-16">
        {/* Java */}
        <div className="group p-4 bg-white border border-gray-300 rounded shadow w-[90%] sm:w-[300px] h-[330px]">
          <img
            src={java}
            alt="Java"
            className="group-hover:scale-110 duration-150 w-half h-[160px] object-cover rounded-lg shadow-lg mx-auto mb-4"
          />
          <h2 className="text-lg font-bold mb-2 text-center">Java Development</h2>
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-md block mx-auto">
            REGISTER NOW
          </button>
        </div>

        {/* .NET */}
        <div className="group p-4 bg-white border border-gray-300 rounded shadow w-[90%] sm:w-[300px] h-[330px]">
          <img
            src={net}
            alt=".NET"
            className="group-hover:scale-110 duration-150 w-half h-[160px] object-cover rounded-lg shadow-lg mx-auto mb-4"
          />
          <h2 className="text-lg font-bold mb-2 text-center">.NET Development</h2>
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-md block mx-auto">
            REGISTER NOW
          </button>
        </div>

        {/* React */}
        <div className="group p-4 bg-white border border-gray-300 rounded shadow w-[90%] sm:w-[300px] h-[330px]">
          <img
            src={react}
            alt="React"
            className="group-hover:scale-110 duration-150 w-half h-[160px] object-cover rounded-lg shadow-lg mx-auto mb-4"
          />
          <h2 className="text-lg font-bold mb-2 text-center">React Development</h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-md block mx-auto"
          >
            REGISTER NOW
          </button>
        </div>
      </div>

      {showForm && <Register />}
    </div>
  );
};

export default Events;