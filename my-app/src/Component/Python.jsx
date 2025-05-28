import React from 'react'

const Python = () => {
  return (
    <div>
    <h3 className='mb-2 text-2xl font-bold text-blue-800 mt-20 mb-14'>Python And Data Science Roadmap</h3>

    <div className=" bg-white flex space-x-6 p-4 overflow-x-auto justify-center">
 
    <div className="w-64 bg-gray-500 text-white shadow-lg rounded-lg p-6">
     <h2 className="text-1.2xl font-bold mb-2">INTRODUCTION TO DATA SCIENCE</h2>
     <p className="text-white-600">Overview of Data Science</p><hr />
     <p className="text-white-600">Importance in Industry</p><hr />
     <p className="text-white-600">Data Science Tools</p><hr />
   </div>
 
   <div className="w-64 bg-gray-500 text-white shadow-lg rounded-lg p-6">
     <h2 className="text-1.2xl font-bold mb-2">PYTHON FOR DATA SCIENCE</h2>
     <p className="text-white-600">Python Basics</p><hr />
     <p className="text-white-600">Python Libraries for Data Science</p><hr />
   </div>
 
   <div className="w-64 bg-gray-500 text-white shadow-lg rounded-lg p-6">
     <h2 className="text-1.2xl font-bold mb-2">DATA PREPROCESSING</h2>
     <p className="text-white-600">Data Cleaning</p><hr />
     <p className="text-white-600">Data Transformation</p><hr />
    </div>
 
     <div className="w-64 bg-gray-500 text-white shadow-lg rounded-lg p-6">
     <h2 className="text-1.2xl font-bold mb-2">EXPLORATORY DATA ANALYSIS (EDA)</h2>
     <p className="text-white-600">Descriptive Statistics</p><hr />
     <p className="text-white-600">Data Visualization Techniques</p><hr />
    </div> 
    </div>

    <div className=" bg-white flex space-x-6 p-4 overflow-x-auto justify-center">
    <div className="w-64 bg-gray-500 text-white shadow-lg rounded-lg p-6">
     <h2 className="text-1.2xl font-bold mb-2">MACHINE LEARNING</h2>
     <p className="text-white-600">Introduction to Machine Learning</p><hr />
     <p className="text-white-600">Supervised Learning Algorithms</p><hr />
     <p className="text-white-600">Unsupervised Learning Algorithms</p><hr />
   </div>
   
   <div className="w-64 bg-gray-500 text-white shadow-lg rounded-lg p-6">
   <h2 className="text-1.2xl font-bold mb-2">MODEL EVALUATION AND TUNING</h2>
   <p className="text-white-600">Model Evaluation Metrics</p><hr />
   <p className="text-white-600">Hyperparameter Tuning</p><hr />
 </div>

 <div className="w-64 bg-gray-500 text-white shadow-lg rounded-lg p-6">
   <h2 className="text-1.2xl font-bold mb-2">DEPLOYING MACHINE LEARNING MODELS</h2>
   <p className="text-white-600">Model Deployment Strategies</p><hr />
   <p className="text-white-600">Building REST APIs</p><hr />
 </div>
 <div className="w-64 bg-gray-500 text-white shadow-lg rounded-lg p-6">
   <h2 className="text-1.2xl font-bold mb-2 p-2">CAPSTONE PROJECT</h2>
   <p className="text-white-600">Real-world Data Science Project</p><hr />
   <p className="text-white-600">Portfolio Development</p><hr />
 </div>
 </div>

 <hr className='m-10' />
     </div>
  )
}

export default Python
