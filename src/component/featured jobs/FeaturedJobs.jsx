import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([])
  const [dataLength, setDataLength] = useState(4)

  useEffect(() => {
    fetch('/public/data/jobs.json')
      .then(res => res.json())
    .then(data=> setJobs(data))
  }, [])

    return (
      <div>
        <div className="text-center">
          <h1 className="text-5xl">Featured Jobs</h1>
          <h2 className="text-sm mt-2 ">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5 ">
          {jobs.slice(0, dataLength).map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
        <div className={`${dataLength===jobs.length && "hidden"} flex items-center justify-center` }>
          <button
            onClick={() => setDataLength(jobs.length)}
            className="bg-gray-700 text-white px-3 py-1 rounded-md "
          >
            See All Jobs
          </button>
        </div>
      </div>
    );
};

export default FeaturedJobs;