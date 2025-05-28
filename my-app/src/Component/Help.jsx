import React from 'react'

const Help = () => {
  return (
    <div className='w-[70%] p-2 border border-gray-200 mx-auto bg-blue-100 m-[60px] rounded'>
      <h2 className='font-bold text-[20px] font-[roboto]'>What is the MERN Stack?</h2>
      <div>
      The MERN stack is a popular JavaScript stack used for building modern web applications. It comprises four key technologies: MongoDB, Express.js, React.js, and Node.js. Each of these technologies plays a crucial role in the development process, making it easier and faster to deploy full-stack web applications.
      </div>
      <h2  className='font-bold text-[20px] font-[roboto] m-4'>Components of the MERN Stack</h2>
      <p>
      1. MongoDB: A NoSQL database that stores data in a flexible, JSON-like format. It is known for its scalability and ease of use, making it ideal for handling large volumes of data. 
2. Express.js: A web application framework for Node.js that simplifies the process of building robust APIs and web applications. It provides a set of features for web and mobile applicaions.
3. React.js: A JavaScript library for building user interfaces, particularly single-page applications. React allows developers to create reusable UI components and manage the state of their applications efficiently.
4. Node.js: A JavaScript runtime environment that allows developers to run JavaScript code on the server side. It is built on Chrome's V8 JavaScript engine and is known for its performance and scalability.
      </p>
      <h2  className='font-bold text-[20px] font-[roboto] m-4'>How the MERN Stack Works</h2>
      <p>
      The MERN stack follows a three-tier architectural pattern:

Front-end (React.js): The user interface is built using React.js, which allows for the creation of dynamic and interactive web pages.

Application Layer (Express.js and Node.js): The server-side logic and APIs are handled by Express.js running on Node.js. This layer processes requests from the front-end and interacts with the database.

Database Layer (MongoDB): MongoDB stores and retrieves data for the application. It uses a document-oriented data model, which is flexible and scalable
1
.
      </p>
      <h2  className='font-bold text-[20px] font-[roboto] m-4'>Advantages of the MERN Stack</h2>
      <p>
      Single Language: The entire stack uses JavaScript, making it easier for developers to work across both the front-end and back-end without switching languages
1
.

Scalability: MongoDB and Node.js are designed to handle large volumes of data and high traffic, making the MERN stack suitable for scalable applications
2
.

Community Support: Each component of the MERN stack has a large and active community, providing ample resources and support for developers
3
.
      </p>
      
      <h2  className='font-bold text-[20px] font-[roboto] m-4'>Getting Started with the MERN Stack</h2>
      <p>
      To start a MERN stack project, you need to set up the development environment and create a folder structure for both the front-end and back-end. Here are the basic steps:

Install Node.js: Download and install Node.js from the official website.

Set Up a Code Editor: Install a code editor like Visual Studio Code.

Create Project Folders: Create separate folders for the front-end and back-end.

Initialize React Project: Use npx create-react-app to set up the front-end.

Initialize Node.js Project: Use npm init -y to set up the back-end and install necessary dependencies like Express and MongoDB
2
.
      </p>
    </div>
  )
}

export default Help
