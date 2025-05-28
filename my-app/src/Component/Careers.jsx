import React from 'react'

const Careers = () => {
  return (
    <div className='w-[400px] h-[580px] border border-gray-400 m-[70px] mx-auto bg-gray-100 rounded'>
            <h2 className='font-[roboto] p-3 text-[20px]'>GET IN TOUCH</h2>
            <h3 className='font-[roboto]  text-[15px] mb-1'>SEND US YOUR RESUME HERE</h3>
            <table>
              <tbody>
                <tr>
                  <input type="text" name="" id="" className='border p-2 w-[350px] ml-[24px] m-2' placeholder='Your Name'/>
                </tr>
                <tr>
                  <input type="email" name="" id="" className='border p-2 w-[350px] ml-[24px] m-2' placeholder='Your Email abc@gmail.com'/>
                </tr>
                <tr>
                  <input type="number" name="" id="" className='border p-2 w-[350px] ml-[24px] m-2' placeholder='Your Phone Number'/>
                </tr>
                <tr>
                  <textarea name="" id="" className='border p-2 w-[350px] h-[100px] ml-[24px] m-2' placeholder='Your message (optional)'></textarea>
                </tr>
              
                <tr>
                  <h3 className='font-[roboto]  text-[18px] mb-1'>Upload Your Resume Here</h3>
                  <input type="file" name="" id="" className='border p-2 w-[350px] ml-[24px] m-2'/>
                </tr>
                <tr>
                  <button className='font-[roboto]  text-[18px] m-7 bg-black text-white pl-6 pr-6 p-1 items-center'>SUBMIT</button>
                </tr>
              </tbody>
            </table>

    </div>
  )
}

export default Careers
