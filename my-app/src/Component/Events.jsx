import React, {useState} from 'react'
import java from '../Assets/java.png'
import react from '../Assets/react.png'
import net from '../Assets/net.png'
import Register  from './Register'

const Events = () => {
  const [showForm, setShowForm] = useState(false); 
  
  return (
    
    <div>
    
      <h3 className='pt-8 pb-4 text-blue-800 text-3xl font-bold font-roboto mt-4'>MERN Infotech Events & Highlights</h3>

      <h2 className='text center pt-4 text-2xl text-green-600 font-bold pb-6'>------ Upcoming Batches ------</h2>
      <div className='flex justify-center mb-16'>
      <div className="group p-4 bg-white border border-gray-300 rounded shadow w-[190px] h-[300px] mr-8">
      <img
                    src={java}
                    alt="Home Banner"
                    className="group-hover:scale-110 duration-150 w- [220px] h-[160px] object-cover rounded-lg shadow-lg mx-auto p-4 mb-2"
                  />
      <h2 className="text-lg font-bold mb-2">Java Developement</h2>
      <button className="bg-blue-800 hover:bg-blue-800 text-white font-semibold py-1 px-2 rounded-md">REGISTER NOW</button>
      </div>

      <div className=" group p-4 bg-white border border-gray-300 rounded shadow w-[200px] h-[300px] mr-8">
      <img
                    src={net}
                    alt="Home Banner"
                    className="group-hover:scale-110 duration-150 w- [140px] h-[100px] object-cover rounded-lg shadow-lg mx-auto p-4 mt-10 mb-7"
                  />
      <h2 className="text-lg font-bold mb-2">.NET Developement</h2>
      <button className="bg-blue-800 hover:bg-blue-800 text-white font-semibold py-1 px-2 rounded-md">REGISTER NOW</button>
      </div>

      <div className="group p-4 bg-white border border-gray-300 rounded shadow w-[200px] h-[300px] mr-8">
      <img
                    src={react}
                    alt="Home Banner"
                    className="group-hover:scale-110 duration-150 w- [220px] h-[160px] object-cover rounded-lg shadow-lg mx-auto p-4 mb-2"
                  />
      <h2 className="text-lg font-bold mb-2">REACT Developement</h2>
      <button onClick={console.log("yes")
      } className="bg-blue-800 hover:bg-blue-800 text-white font-semibold py-1 px-2 rounded-md " >REGISTER NOW</button>
      </div>
      </div>
      
      


    </div>
  )
}

export default Events
