import React from 'react';

const Dotnet = () => {
  return (
    <div className="px-4">
      <h3 className="text-xl font-bold text-blue-800 mt-8 mb-8 text-center">
        Full Stack .NET Roadmap
      </h3>

      {/* Row 1 */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {/* Card 1 */}
        <div className="min-w-[16rem] md:w-64 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">C#.NET</h2>
          <p>Core C#</p><hr />
          <p>ASP.NET</p><hr />
          <p>Entity Framework</p><hr />
          <p>Tools & Testing</p><hr />
        </div>

        {/* Card 2 */}
        <div className="min-w-[16rem] md:w-64 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">.NET CORE WEB API</h2>
          <p>Basics of .NET Core</p><hr />
          <p>Web API Development</p><hr />
          <p>Data Access</p><hr />
          <p>Advanced Topics</p><hr />
        </div>

        {/* Card 3 */}
        <div className="min-w-[16rem] md:w-64 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">SOLID PRINCIPLES</h2>
          <p>SRP</p><hr />
          <p>OCP</p><hr />
          <p>LSP</p><hr />
          <p>ISP & DIP</p><hr />
        </div>

        {/* Card 4 */}
        <div className="min-w-[16rem] md:w-64 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">DESIGN PATTERNS</h2>
          <p>Singleton</p><hr />
          <p>Factory</p><hr />
          <p>Strategy</p><hr />
          <p>Dependency Injection</p><hr />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {/* Angular */}
        <div className="min-w-[16rem] md:w-64 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">ANGULAR</h2>
          <p>Typescript</p><hr />
          <p>Data Binding</p><hr />
          <p>Routing</p><hr />
          <p>Advanced Topics</p><hr />
        </div>

        {/* React */}
        <div className="min-w-[16rem] md:w-64 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">REACT</h2>
          <p>Components</p><hr />
          <p>State Management</p><hr />
          <p>Props</p><hr />
          <p>Hooks</p><hr />
          <p>Redux</p><hr />
          <p>Project</p><hr />
        </div>

        {/* Mini Projects */}
        <div className="min-w-[16rem] md:w-64 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">2 MINI PROJECTS</h2>
          <p>Project Planning & Setup</p><hr />
          <p>Development</p><hr />
          <p>Testing</p><hr />
          <p>Deployment</p><hr />
        </div>

        {/* SQL */}
        <div className="min-w-[16rem] md:w-64 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">SQL</h2>
          <p>Basic SQL</p><hr />
          <p>Database Design</p><hr />
          <p>Optimization & Management</p><hr />
          <p>Join</p><hr />
        </div>
      </div>

      <hr className="m-10" />
    </div>
  );
};

export default Dotnet;