import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import { Helmet } from "react-helmet-async";

const Doctor = () => {
  const loadedDoctor = useLoaderData();

  const [doctors] = useState(loadedDoctor);
  // console.log(doctors)

  return (
    <div>
      <Helmet>
        <title>Paracetamol | Doctors </title>
      </Helmet>
      <div className="flex justify-center">
        <div className="">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="flex justify-center m-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
