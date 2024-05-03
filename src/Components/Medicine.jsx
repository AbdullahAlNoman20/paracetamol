import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MedicineCard from "./MedicineCard";

const Medicine = () => {

    const loadedMedicine = useLoaderData();
// console.log(loadedMedicine)
const [medicines, setMedicines] = useState(loadedMedicine);

    return (
        <div>
           

           <div className="flex justify-center m-10">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
        {medicines.map((medicine) => (
          <MedicineCard
            key={medicine._id}
            medicine={medicine}
          ></MedicineCard>
        ))}
      </div>
      </div>


        </div>
    );
};

export default Medicine;