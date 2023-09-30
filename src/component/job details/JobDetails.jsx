import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { saveJobApplication } from "../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  
  const handleApplyJob = () => {
    saveJobApplication(idInt)
    toast("Apply Successful")
  }
  return (
    <div className="md:w-4/5 px-2 md:px-0 mx-auto mt-10">
      <h1 className="text-center mt-14 mb-4 text-3xl font-semibold ">Job Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 ">
        <div className="p-5 shadow-md rounded-md md:col-span-4 ">
          <p className="text-xs">#{idInt}</p>
          <h2 className="text-xl mb-2">{job.company_name} </h2>

          <p className="mb-3">
            <span className="font-semibold ">Job Description : </span>
            <span className="text-sm">{job.job_description}</span>
          </p>
          <p className="mb-3">
            <span className="font-semibold">Job Responsibility : </span>
            <span className="text-sm col-span-3 ">
              {job.job_responsibility}
            </span>
          </p>
          <p className="mb-3">
            <span className="font-semibold ">Educational Requirements : </span>
            <span className="text-sm">{job.educational_requirements}</span>
          </p>
          <p className="mb-3">
            <span className="font-semibold ">Experience : </span>
            <span className="text-sm col-span-4 ">{job.experiences}</span>
          </p>
        </div>

        <div className="md:col-span-2 w-full flex flex-col gap-y-5 ">
          <div className="bg-gray-200 rounded-md py-5 px-3 ">
            <h1 className="font-semibold">Job Details</h1>
            <hr className="my-3 border-[.01rem] rounded-md border-gray-300 " />
            <p className="flex items-center justify-start gap-1 mb-2 ">
              <AiOutlineDollar></AiOutlineDollar>
              <span className="text-sm">
                <span className="font-semibold">Salary: </span> {job.salary}{" "}
                (Per Month)
              </span>
            </p>
            <p className="flex items-center justify-start gap-1 ">
              <BsBriefcase></BsBriefcase>
              <span className="text-sm">
                <span className="font-semibold">Job Title: </span>{" "}
                {job.job_title}
              </span>
            </p>
            <p className="mt-8">Contact Information</p>
            <hr className="my-3 border-[.01rem] rounded-md border-gray-300 " />
            <p className="flex items-center justify-start gap-1 mb-2">
              <HiOutlinePhone></HiOutlinePhone>
              <span className="text-sm">
                <span className="font-semibold">Phone: </span>01750-00 00 00
              </span>
            </p>
            <p className="flex items-center justify-start gap-1 mb-2">
              <HiOutlineMail></HiOutlineMail>
              <span className="text-sm">
                <span className="font-semibold">E-mail: </span>info@gmail.com
              </span>
            </p>
            <p className="flex items-start gap-1">
              <GrLocation className="text-xl"></GrLocation>
              <span className="text-sm">
                <span className="font-semibold">Address: </span>
                Dhanmondi 32, Sukrabad Dhaka, Bangladesh
              </span>
            </p>
          </div>

          <div>
            <button onClick={handleApplyJob} className="bg-gray-600 hover:bg-gray-700 text-white rounded-md w-full py-2 mx-auto block">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;