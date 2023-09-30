import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="shadow-md rounded-md p-6 ">
      <img src={logo} alt="" />
      <h1 className="text-3xl mt-3">{job_title} </h1>
      <h1 className="uppercase text-sm">{company_name} </h1>
      <div className="flex items-center justify-start gap-4 my-3 ">
        <span className="border-[.09rem] border-blue-500 rounded-md px-3 py-[.1rem] text-blue-500 font-semibold ">
          {remote_or_onsite}
        </span>
        <span className="border-[.09rem] border-blue-500 rounded-md px-3 py-[.1rem] text-blue-500 font-semibold ">
          {job_type}
        </span>
      </div>

      <div className="flex items-center justify-start gap-x-4 ">
        <div className="flex items-center justify-start ">
          <GrLocation></GrLocation>
          <p>{location} </p>
        </div>
        <div className="flex items-center justify-start ">
          <AiOutlineDollar></AiOutlineDollar>
          <p>{salary} </p>
        </div>
      </div>
      <Link to={`/job/${id}`} className="text-white bg-gray-700 px-3 py-2 rounded-md ">
        <button className="mt-6">View Details </button></Link>
    </div>
  );
};

export default Job;