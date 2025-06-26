import React from 'react';

const Help = () => {
  return (
    <div className='w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] p-4 sm:p-6 border border-gray-200 mx-auto bg-blue-100 my-8 rounded'>
      <h2 className='font-bold text-xl sm:text-2xl font-sans'>What is the MERN Stack?</h2>
      <p className="mt-2">
        The MERN stack is a popular JavaScript stack used for building modern web applications. It comprises four key technologies: MongoDB, Express.js, React.js, and Node.js. Each of these technologies plays a crucial role in the development process, making it easier and faster to deploy full-stack web applications.
      </p>

      <h2 className='font-bold text-xl sm:text-2xl font-sans mt-6'>Components of the MERN Stack</h2>
      <p className="mt-2 space-y-2">
        1. <strong>MongoDB</strong>: A NoSQL database that stores data in a flexible, JSON-like format. <br />
        2. <strong>Express.js</strong>: A web framework for Node.js that simplifies building APIs and web apps. <br />
        3. <strong>React.js</strong>: A front-end library for building interactive UIs and SPAs. <br />
        4. <strong>Node.js</strong>: A server-side runtime for executing JavaScript using Chrome's V8 engine.
      </p>

      <h2 className='font-bold text-xl sm:text-2xl font-sans mt-6'>How the MERN Stack Works</h2>
      <p className="mt-2">
        The MERN stack follows a three-tier architecture:
        <br /><br />
        <strong>Front-end (React.js)</strong>: Builds the user interface.<br />
        <strong>Application Layer (Express.js + Node.js)</strong>: Handles server logic and APIs.<br />
        <strong>Database (MongoDB)</strong>: Stores and retrieves application data.
      </p>

      <h2 className='font-bold text-xl sm:text-2xl font-sans mt-6'>Advantages of the MERN Stack</h2>
      <p className="mt-2">
        - Single language across the stack (JavaScript).<br />
        - Scalable with tools like MongoDB and Node.js.<br />
        - Strong community and abundant resources.
      </p>

      <h2 className='font-bold text-xl sm:text-2xl font-sans mt-6'>Getting Started with the MERN Stack</h2>
      <p className="mt-2">
        1. Install Node.js from the official website.<br />
        2. Use a code editor like VS Code.<br />
        3. Create folders for frontend and backend.<br />
        4. Run `npx create-react-app` for frontend.<br />
        5. Run `npm init -y` in backend folder and install Express/MongoDB.
      </p>
    </div>
  );
};

export default Help;