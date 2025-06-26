import React from 'react';

const Angular = () => {
  return (
    <div className="px-4">
      <h3 className="text-xl font-bold text-blue-800 mt-8 mb-8">Angular MEAN Stack Roadmap</h3>

      {/* First row */}
      <div className="bg-white flex flex-wrap md:justify-center gap-6 overflow-x-auto">
        {/* Card 1 */}
        <div className="min-w-[16rem] md:w-64 bg-blue-900 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">HTML</h2>
          <p>Introduction</p><hr />
          <p>HTML Elements</p><hr />
          <p>Forms & Tables</p><hr />
          <p>Media and Embedding</p><hr />
          <p>Project</p><hr />
        </div>

        {/* Card 2 */}
        <div className="min-w-[16rem] md:w-64 bg-blue-900 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">CSS</h2>
          <p>Introduction</p><hr />
          <p>Box Model</p><hr />
          <p>Layout Techniques</p><hr />
          <p>Styling</p><hr />
          <p>Project</p><hr />
        </div>

        {/* Card 3 */}
        <div className="min-w-[16rem] md:w-64 bg-blue-900 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">JavaScript</h2>
          <p>Basics</p><hr />
          <p>Functions</p><hr />
          <p>DOM Manipulation</p><hr />
          <p>Advanced Topics</p><hr />
          <p>Project</p><hr />
        </div>
      </div>

      {/* Second row */}
      <div className="bg-white flex flex-wrap md:justify-center gap-6 mt-6 overflow-x-auto">
        {/* Card 4 */}
        <div className="min-w-[16rem] md:w-64 bg-blue-900 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Node and Node.js</h2>
          <p>JavaScript Runtime Environment</p><hr />
          <p>Server-Side Development Tool</p><hr />
          <p>Event-Driven Architecture</p><hr />
          <p>Non-Blocking I/O</p><hr />
          <p>Project</p><hr />
        </div>

        {/* Card 5 */}
        <div className="min-w-[16rem] md:w-64 bg-blue-900 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Mongo and Express</h2>
          <p>Fast Web Server</p><hr />
          <p>Scalable Backend API</p><hr />
          <p>Database Integration Ease</p><hr />
          <p>Asynchronous Data Handling</p><hr />
        </div>

        {/* Card 6 */}
        <div className="min-w-[16rem] md:w-64 bg-blue-900 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Angular</h2>
          <p>TypeScript</p><hr />
          <p>Data Binding</p><hr />
          <p>Routing</p><hr />
          <p>Advanced Topics</p><hr />
          <p>Project</p><hr />
        </div>
      </div>

      <hr className="m-10" />
    </div>
  );
};

export default Angular;