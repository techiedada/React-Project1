import React from 'react'
import myimage from '../Assets/myimage.jpeg'

const About = () => {
  return (
    <div>
      <h3 className='m-8 font-bold text-xl font-roboto'>About MERN Infotech</h3>
      <p className='font-roboto'>MERN Infotech is one of the top IT Training Institutes in Pune, specializing in all leading Software Technologies Providing best quality training solutions to
       Fresher and <br />
       Experienced students. We are developing our students as a independent and dedicated employees through our Training. We have placed more
       than individuals in Top <br />
       MNC’s through our training programs and so we are well-known as one of the best Placement Training Institutes in Pune. <br />
      <br />
      We offer professional career courses to eligible candidates and mold them into knowledgeable industry-expected skills in our IT Training
      and Pune and Bangalore. <br /> We cover the most popular IT courses with the most up-to-date curriculum.Because of the insufficient proficiency of the candidates, there will always be a skill gap <br /> in the industry for on-demand technologies.
      We place a greater emphasis on hands-on experience to ensure that our students outperform from the start. <br /> We conduct numerous mock interviews
      and assessments in order to compete in interviews to the best of our abilities.</p> <hr className='m-6' />

      <img
              src={myimage}
              alt="Home Banner"
              className="w- [200px] h-[300px] object-cover rounded-lg shadow-lg mx-auto mt-14"
            />
            <h3 className='text-blue-800 font-bold mt-4'>Mr. Dattatray Mahangare</h3>
            <h4 className='text-blue-800 font-bold mb-12'>Co-Founder & CEO</h4>
            <hr className='m-6' />
    </div>
  )
}

export default About
