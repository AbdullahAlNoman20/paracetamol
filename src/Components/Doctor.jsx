import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import { Helmet } from "react-helmet-async";

const Doctor = () => {

	const loadedDoctor = useLoaderData()

	const[doctors] = useState(loadedDoctor);
	// console.log(doctors)




    return (
        <div>
          <Helmet>
        <title>Paracetamol | Doctors </title>
      </Helmet>
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