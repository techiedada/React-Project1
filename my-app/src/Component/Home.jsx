import React from 'react';
import lab from '../Assets/lab.jpg';
import personimg from '../Assets/personimg.jpg';

const Home = () => {
  return (
    <div className="px-4 py-8">
      <h4 className="text-2xl font-bold mb-4">MERN Infotech</h4>

      {/* Main Banner Image */}
      <img
        src={lab}
        alt="Home page"
        className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg mb-6"
      />

      {/* Intro Paragraph */}
      <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-8">
        <strong>MERN Infotech</strong> is one of the top IT Training Institutes in Pune, specializing in leading Software Technologies. We provide best-in-class training to both freshers and experienced professionals. Our mission is to develop students into independent and dedicated developers through hands-on, project-based training.
        <br /><br />
        We’ve placed hundreds of students in top MNCs, earning a reputation as one of Pune’s best placement training institutes. With modern courses, real-time projects, and mock interviews, our curriculum is designed to bridge the industry skill gap.
      </p>

      <hr className="my-6" />

      {/* Online Course Benefits */}
      <h3 className="text-xl font-bold text-purple-800 mb-2">Benefits of Online Courses & Training</h3>
      <p className="text-gray-700 mb-6">
        Get hands-on knowledge with real-time projects through our online training programs. Rated as a top course provider from India with placement assistance. Enroll for free courses and access sample self-paced videos on trending technologies.
      </p>

      {/* Course Cards - 3 rows */}
      {[
        ['HTML', 'https://www.w3schools.com/html/'],
        ['CSS', 'https://www.w3schools.com/Css/'],
        ['JAVASCRIPT', 'https://www.w3schools.com/js/default.asp'],
        ['REACT', 'https://www.w3schools.com/react/default.asp'],
        ['NODE JS', 'https://www.w3schools.com/nodejs/'],
        ['MONGO DB', 'https://www.w3schools.com/mongodb/'],
        ['JAVA', 'https://www.w3schools.com/java/'],
        ['MYSQL', 'https://www.w3schools.com/mysql/default.asp'],
        ['HADOOP', 'https://hadoop.apache.org/']
      ].reduce((rows, item, i) => {
        if (i % 3 === 0) rows.push([]);
        rows[rows.length - 1].push(item);
        return rows;
      }, []).map((row, index) => (
        <div key={index} className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          {row.map(([title, link]) => (
            <div key={title} className="bg-blue-800 text-white p-6 rounded-lg shadow-lg w-full sm:w-64">
              <h2 className="text-lg font-bold mb-2">{title}</h2>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <u>More Details</u>
              </a>
            </div>
          ))}
        </div>
      ))}

      {/* Person Image at Bottom */}
      <img
        src={personimg}
        alt="Learning Image"
        className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Home;