import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";
import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
    }
  }, []);
  return (
    <div className="md:w-4/5 px-2 md:px-0 mx-auto mt-10">
      <h1 className="text-center mt-14 mb-4 text-3xl font-semibold ">
        Applied Jobs
      </h1>
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-semibold">
          You have applied in total {appliedJobs.length} jobs
        </h1>
        <select className="outline-none rounded-md px-2 py-1 border-2 border-slate-200">
          <option value="">Filter By</option>
          <option value="All">All</option>
          <option value="All">Onsite</option>
          <option value="All">Remote</option>
        </select>
      </div>

      <div>
        {appliedJobs.map((job) => (
          <div
            className="flex flex-col md:flex-row gap-y-4 md:items-center justify-between border-2 mb-2 rounded-md border-slate-200 p-3"
            key={job.id}
          >
            <div className="flex items-center justify-between gap-4 ">
              <div className="flex items-center justify-center px-4 rounded bg-slate-100 w-[8rem] h-[6rem] ">
                <img className="w-full" src={job.logo} alt="" />
              </div>
              <div>
                <h1 className="text-2xl">{job.job_title} </h1>
                <h2 className="text-sm">{job.company_name}</h2>
                <div className="flex items-center justify-start gap-4 my-3 ">
                  <span className="border-[.09rem] border-blue-500 rounded-md px-3 py-[.1rem] text-blue-500 font-semibold ">
                    {job.remote_or_onsite}
                  </span>
                  <span className="border-[.09rem] border-blue-500 rounded-md px-3 py-[.1rem] text-blue-500 font-semibold ">
                    {job.job_type}
                  </span>
                </div>
                <div className="flex items-center justify-start gap-x-4 ">
                  <div className="flex items-center justify-start ">
                    <GrLocation></GrLocation>
                    <p>{job.location} </p>
                  </div>
                  <div className="flex items-center justify-start ">
                    <AiOutlineDollar></AiOutlineDollar>
                    <p>{job.salary} </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link to={`/job/${job.id}`} className="px-4 py-2 text-white bg-gradient-to-r from-slate-500 to-slate-800 rounded-md ">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;