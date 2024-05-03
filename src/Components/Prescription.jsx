import { Helmet } from "react-helmet-async";

const Prescription = () => {
  return (
    <div className="">
      <Helmet>
        <title>Paracetamol | Prescription </title>
      </Helmet>
        <div className="flex flex-col lg:flex-row gap-10 justify-around items-center my-20">
        <div className="">
          <fieldset className="w-full space-y-1 dark:text-gray-800">
            <label htmlFor="files" className="block text-sm font-medium">
              Upload Your Prescription
            </label>
            <div className="flex">
              <input
                type="file"
                name="files"
                id="files"
                className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-green-200"
              />
            </div>
          </fieldset>
        </div>
        <div className="border bg-green-200 p-24 rounded-3xl">
          <button className="btn btn-success"><i className="fa-solid fa-paint-roller"></i> Scan Your Prescription</button>
        </div>
      </div>
      <div className="">
        <div className="p-5 mx-auto sm:p-10 md:p-16 ">
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img
              src="https://i.ibb.co/VvR4HB8/b.png"
              alt=""
              className="w-full h-60 sm:h-96 dark:bg-gray-500"
            />
            <div className="p-6 pb-12 m-4 mx-auto lg:-mt-14 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-green-400">
              <div className="space-y-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-block text-2xl font-semibold sm:text-3xl"
                >
                  Streamline your medication orders with our scan prescription
                  feature. Simply upload your prescriptions, and let our
                  advanced technology accurately identify your prescribed
                  medications, ensuring a seamless and hassle-free ordering
                  process.
                </a>
                <p className="text-xs dark:text-gray-600">
                  By 
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline"
                  >
                     Artificial inelegance(AI)
                  </a>
                </p>
              </div>
              <div className="dark:text-gray-800">
                <p>Effortless Prescription Management here...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Prescription;
