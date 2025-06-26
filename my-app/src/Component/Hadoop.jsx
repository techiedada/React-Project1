import React from 'react';

const Hadoop = () => {
  return (
    <div className="px-4">
      <h3 className="text-xl font-bold text-blue-800 mt-20 mb-8 text-center">
        Hadoop/Big Data Roadmap
      </h3>

      {/* Responsive Card Layout */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mb-32">
        {/* Hadoop Card */}
        <div className="w-full sm:w-72 bg-blue-900 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold mb-2">Hadoop</h2>
          <p className="text-white-600">Introduction</p><hr />
          <p className="text-white-600">HDFS</p><hr />
          <p className="text-white-600">Hive & Partitions</p><hr />
          <p className="text-white-600">HBase</p><hr />
          <p className="text-white-600">MapReduce</p><hr />
        </div>

        {/* Bigdata Card */}
        <div className="w-full sm:w-72 bg-blue-900 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold mb-2">Bigdata</h2>
          <p className="text-white-600">Scala</p><hr />
          <p className="text-white-600">Apache Spark</p><hr />
          <p className="text-white-600">Apache Kafka</p><hr />
          <p className="text-white-600">BigQuery</p><hr />
          <p className="text-white-600">Project</p><hr />
        </div>

        {/* SQL Card */}
        <div className="w-full sm:w-72 bg-blue-900 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold mb-2">SQL</h2>
          <p className="text-white-600">Basic SQL</p><hr />
          <p className="text-white-600">Database Design</p><hr />
          <p className="text-white-600">Optimization & Management</p><hr />
          <p className="text-white-600">Join</p><hr />
        </div>
      </div>
    </div>
  );
};

export default Hadoop;