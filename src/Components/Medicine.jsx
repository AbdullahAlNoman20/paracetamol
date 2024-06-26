import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MedicineCard from "./MedicineCard";
import { Helmet } from "react-helmet-async";

const Medicine = () => {
  const loadedMedicine = useLoaderData();
  // console.log(loadedMedicine)
  const [medicines] = useState(loadedMedicine);

  return (
    <div>
      <Helmet>
        <title>Paracetamol | Medicine </title>
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
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
          {medicines.map((medicine) => (
            <MedicineCard key={medicine._id} medicine={medicine}></MedicineCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Medicine;
