import React from 'react';

const Java = () => {
  return (
    <div className="px-4 py-8">
      <h3 className="text-xl font-bold text-blue-800 mb-8 mt-8">Java Full Stack Roadmap</h3>

      {/* First row */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center mb-8">
        {[
          {
            title: 'CORE JAVA',
            items: ['Introduction', 'Core Java', 'OOPS', 'Tools & Testing'],
          },
          {
            title: 'ADVANCE JAVA',
            items: ['JDBC', 'Servlets', 'JSP', 'Collection'],
          },
          {
            title: 'SPRING',
            items: ['Core Spring', 'Spring MVC', 'Spring Boot', 'Spring Data & Security'],
          },
          {
            title: 'SPRING BOOT',
            items: ['Auto-configuration', 'Spring Boot starters', 'RESTful services', 'Microservices'],
          },
        ].map(({ title, items }) => (
          <div
            key={title}
            className="bg-gray-100 text-gray-800 rounded-lg shadow-lg p-6 w-full sm:w-64"
          >
            <h2 className="text-lg font-bold mb-4">{title}</h2>
            {items.map((item, i) => (
              <div key={i}>
                <p className="text-gray-600 mb-2">{item}</p>
                {i !== items.length - 1 && <hr />}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Second row */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center">
        {[
          {
            title: 'ANGULAR',
            items: ['Typescript', 'Data Binding', 'Routing', 'Advanced Topics'],
          },
          {
            title: 'REACT',
            items: ['Components', 'State Management', 'Props', 'Hooks', 'Redux', 'Project'],
          },
          {
            title: '2 MINI PROJECTS',
            items: ['Project Planning & Setup', 'Development', 'Testing', 'Deployment'],
          },
          {
            title: 'LIVE PROJECT',
            items: ['Project Planning & Setup', 'Development', 'Testing', 'Deployment'],
          },
        ].map(({ title, items }) => (
          <div
            key={title}
            className="bg-gray-100 text-gray-800 rounded-lg shadow-lg p-6 w-full sm:w-64"
          >
            <h2 className="text-lg font-bold mb-4">{title}</h2>
            {items.map((item, i) => (
              <div key={i}>
                <p className="text-gray-600 mb-2">{item}</p>
                {i !== items.length - 1 && <hr />}
              </div>
            ))}
          </div>
        ))}
      </div>

      <hr className="my-10" />
    </div>
  );
};

export default Java;