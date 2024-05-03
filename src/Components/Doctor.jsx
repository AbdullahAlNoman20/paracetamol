import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DoctorCard from "./DoctorCard";

const Doctor = () => {

	const loadedDoctor = useLoaderData()

	const[doctors] = useState(loadedDoctor);
	// console.log(doctors)




    return (
        <div>
            <div className="flex justify-center m-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor._id}
            doctor={doctor}
          ></DoctorCard>
        ))}
      </div>
      </div>
        </div>
    );
};

export default Doctor;