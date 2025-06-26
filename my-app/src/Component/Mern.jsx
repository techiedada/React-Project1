import React from 'react';

const Mern = () => {
  const roadmap = [
    {
      title: 'HTML',
      items: ['Introduction', 'HTML Elements', 'Forms & Tables', 'Media and Embedding', 'Project'],
    },
    {
      title: 'CSS',
      items: ['Introduction', 'Box Model', 'Layout Techniques', 'Styling', 'Project'],
    },
    {
      title: 'JAVASCRIPT',
      items: ['Basics', 'Functions', 'DOM Manipulation', 'Advanced Topics', 'Project'],
    },
    {
      title: 'NODE AND NODE JS',
      items: [
        'JavaScript Runtime Environment',
        'Server-Side Development Tool',
        'Event-Driven Architecture',
        'Non-Blocking I/O',
        'Project',
      ],
    },
    {
      title: 'MANGO AND EXPRESS',
      items: [
        'Fast Web Server',
        'Scalable Backend API',
        'Database Integration Ease',
        'Asynchronous Data Handling',
      ],
    },
    {
      title: 'REACT',
      items: ['Components', 'State Management', 'Props', 'Hooks', 'Redux', 'Project'],
    },
  ];

  return (
    <div className="px-4 py-8">
      <h3 className="text-xl font-bold text-blue-800 mb-8 mt-8">React MERN Stack Roadmap</h3>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center">
        {roadmap.map(({ title, items }) => (
          <div
            key={title}
            className="bg-blue-900 text-white rounded-lg shadow-lg p-6 w-full sm:w-64"
          >
            <h2 className="text-lg font-bold mb-4">{title}</h2>
            {items.map((item, idx) => (
              <div key={idx}>
                <p className="text-white/90 mb-2">{item}</p>
                {idx !== items.length - 1 && <hr className="border-white/30" />}
              </div>
            ))}
          </div>
        ))}
      </div>

      <hr className="my-10" />
    </div>
  );
};

export default Mern;