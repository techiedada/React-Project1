import React from 'react'

const Hadoop = () => {
  return (
    <div>
      <h3 className='mb-2 text-xl font-bold text-blue-800 mt-20 mb-8'>Hadoop/Bigdata Roadmap</h3>

<div className=" bg-white flex space-x-6 p-4 overflow-x-auto justify-center mb-[130px]">

<div className="w-64 bg-blue-900 text-white shadow-lg rounded-lg p-6">
 <h2 className="text-1.2xl font-bold mb-2">Hadoop</h2>
 <p className="text-white-600">Introduction</p><hr />
 <p className="text-white-600">HDFS</p><hr />
 <p className="text-white-600">Hive & Partitions</p><hr />
 <p className="text-white-600">HBase</p><hr />
 <p className="text-white-600">MapReduce</p><hr />
</div>

<div className="w-64 bg-blue-900 text-white shadow-lg rounded-lg p-6">
 <h2 className="text-1.2xl font-bold mb-2">Bigdata</h2>
 <p className="text-white-600">Scala</p><hr />
 <p className="text-white-600">Apache Spark</p><hr />
 <p className="text-white-600">Apache Kafka</p><hr />
 <p className="text-white-600">BigQuery</p><hr />
 <p className="text-white-600">Project</p><hr />
</div>

<div className="w-64 bg-blue-900 text-white shadow-lg rounded-lg p-6">
   <h2 className="text-1.2xl font-bold mb-2">SQL</h2>
   <p className="text-white-600">Basic SQL</p><hr />
   <p className="text-white-600">Database Design</p><hr />
   <p className="text-white-600">Optimization & Management</p><hr />
   <p className="text-white-600">Join</p><hr />
 </div>
</div>
    </div>
  )
}

export default Hadoop
