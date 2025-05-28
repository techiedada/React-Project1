import React from 'react'
import lab from '../Assets/lab.jpg'
import personimg from '../Assets/personimg.jpg'

const Home = () => {
  return (
    <div className="p-4">
      <h4 className='mb-1 text-1.8xl'><b>MERN Infotech</b></h4>
      <img
        src={lab}
        alt="Home page"
        className="w-full h-[600px] object-cover rounded-lg shadow-lg"
      />
      <p className='m-14 font-family-roboto text-1.9xl '> <b>MERN Infotech </b> is one of the top IT Training Institutes in Pune, specializing in all leading Software Technologies Providing best quality training solutions to <br />  
       Fresher and Experienced students. We are developing our students as a independent and dedicated employees through our Training. We have placed more <br />
       than individuals in Top MNC’s through our training programs and so we are well-known as one of the best Placement Training Institutes in Pune. <br />


       We offer professional career courses to eligible candidates and mold them into knowledgeable industry-expected skills in our IT Training <br /> 
       and Pune and Bangalore. We cover the most popular IT courses with the most up-to-date curriculum. <br /> <br />
       Because of the insufficient proficiency of the candidates, there will always be a skill gap in the industry for on-demand technologies. <br />
       We place a greater emphasis on hands-on experience to ensure that our students outperform from the start. We conduct numerous mock interviews <br />
        and assessments in order to compete in interviews to the best of our abilities.</p>
      <hr />

      <h3 className='font-roboto text-purple-800 font-bold text-xl p-4'>Benefits of Online Courses & Training</h3>
        <p className='p-4 font-serif'>Get Hands-On Knowledge with Real Time Projects from this Online Training Courses. We are rated as "Best Online Training Course Provider" from India with Placement guidance. <br /> 
           Enroll for Free Courses & Get Sample Self-Paced Videos on Trending Technologies</p>

        <div className=" bg-white flex space-x-8  p-6 overflow-x-auto justify-center">

        <div className="w-60 h-70 bg-blue-800 shadow-lg rounded-lg p-8 ">
        <h2 className="text-1.2xl font-bold mb-2 text-white">HTML</h2>
        <a href="https://www.w3schools.com/html/" target="_blank"><u className='text-white'>More Details</u> </a>
        </div>
        <div className="w-64 bg-blue-800 shadow-lg rounded-lg p-8 ">
        <h2 className="text-1.2xl font-bold mb-2 text-white">CSS</h2>
        <a href="https://www.w3schools.com/Css/" target="_blank"><u className='text-white'>More Details</u> </a>
        </div>
        <div className="w-64 bg-blue-800 shadow-lg rounded-lg p-8 ">
        <h2 className="text-1.2xl font-bold mb-2 text-white">JAVASCRIPT</h2>
        <a href="https://www.w3schools.com/js/default.asp" target="_blank"><u className='text-white'>More Details</u> </a>
        </div>
        </div>

          <div className=" bg-white flex space-x-8  p-6 overflow-x-auto justify-center">

        <div className="w-60 h-70 bg-blue-800 shadow-lg rounded-lg p-8 ">
        <h2 className="text-1.2xl font-bold mb-2 text-white">REACT</h2>
        <a href="https://www.w3schools.com/react/default.asp" target="_blank"><u className='text-white'>More Details</u> </a>
        </div>
        <div className="w-64 bg-blue-800 shadow-lg rounded-lg p-8 ">
        <h2 className="text-1.2xl font-bold mb-2 text-white">NODE JS</h2>
        <a href="https://www.w3schools.com/nodejs/" target="_blank"><u className='text-white'>More Details</u> </a>
        </div>
        <div className="w-64 bg-blue-800 shadow-lg rounded-lg p-8 ">
        <h2 className="text-1.2xl font-bold mb-2 text-white">MONGO DB</h2>
        <a href="https://www.w3schools.com/mongodb/" target="_blank"><u className='text-white'>More Details</u> </a>
        </div>
        </div>

        <div className=" bg-white flex space-x-8  p-6 overflow-x-auto justify-center">

        <div className="w-60 h-70 bg-blue-800 shadow-lg rounded-lg p-8 ">
        <h2 className="text-1.2xl font-bold mb-2 text-white">JAVA</h2>
        <a href="https://www.w3schools.com/java/" target="_blank"><u className='text-white'>More Details</u> </a>
        </div>
        <div className="w-64 bg-blue-800 shadow-lg rounded-lg p-8 ">
        <h2 className="text-1.2xl font-bold mb-2 text-white">MYSQL</h2>
        <a href="https://www.w3schools.com/mysql/default.asp" target="_blank"><u className='text-white'>More Details</u> </a>
        </div>
        <div className="w-64 bg-blue-800 shadow-lg rounded-lg p-8 ">
        <h2 className="text-1.2xl font-bold mb-2 text-white">HADOOP</h2>
        <a href="https://hadoop.apache.org/" target="_blank"><u className='text-white'>More Details</u> </a>
        </div>
        </div>
        
        <img
        src={personimg}
        alt="Home page"
        className="w-full h-[600px] object-cover rounded-lg shadow-lg m-8"
      />
    </div>
  )
}

export default Home
