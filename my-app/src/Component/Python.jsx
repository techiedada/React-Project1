import React from 'react';

const Python = () => {
  return (
    <div>
      <h3 className="mb-2 text-2xl font-bold text-blue-800 mt-20 mb-14">
        Python And Data Science Roadmap
      </h3>

      {/* Container for first row of cards */}
      <div className="bg-white flex flex-wrap justify-center gap-6 p-4">
        <div className="w-64 bg-gray-500 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold mb-2">INTRODUCTION TO DATA SCIENCE</h2>
          <p>Overview of Data Science</p>
          <hr />
          <p>Importance in Industry</p>
          <hr />
          <p>Data Science Tools</p>
          <hr />
        </div>

        <div className="w-64 bg-gray-500 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold mb-2">PYTHON FOR DATA SCIENCE</h2>
          <p>Python Basics</p>
          <hr />
          <p>Python Libraries for Data Science</p>
          <hr />
        </div>

        <div className="w-64 bg-gray-500 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold mb-2">DATA PREPROCESSING</h2>
          <p>Data Cleaning</p>
          <hr />
          <p>Data Transformation</p>
          <hr />
        </div>

        <div className="w-64 bg-gray-500 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold mb-2">
            EXPLORATORY DATA ANALYSIS (EDA)
          </h2>
          <p>Descriptive Statistics</p>
          <hr />
          <p>Data Visualization Techniques</p>
          <hr />
        </div>
      </div>

      {/* Container for second row of cards */}
      <div className="bg-white flex flex-wrap justify-center gap-6 p-4">
        <div className="w-64 bg-gray-500 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold mb-2">MACHINE LEARNING</h2>
          <p>Introduction to Machine Learning</p>
          <hr />
          <p>Supervised Learning Algorithms</p>
          <hr />
          <p>Unsupervised Learning Algorithms</p>
          <hr />
        </div>

        <div className="w-64 bg-gray-500 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold mb-2">MODEL EVALUATION AND TUNING</h2>
          <p>Model Evaluation Metrics</p>
          <hr />
          <p>Hyperparameter Tuning</p>
          <hr />
        </div>

        <div className="w-64 bg-gray-500 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold mb-2">DEPLOYING MACHINE LEARNING MODELS</h2>
          <p>Model Deployment Strategies</p>
          <hr />
          <p>Building REST APIs</p>
          <hr />
        </div>

        <div className="w-64 bg-gray-500 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold mb-2">CAPSTONE PROJECT</h2>
          <p>Real-world Data Science Project</p>
          <hr />
          <p>Portfolio Development</p>
          <hr />
        </div>
      </div>

      <hr className="m-10" />
    </div>
  );
};

export default Python;