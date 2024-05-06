import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center my-20">
      <Helmet>
        <title>Paracetamol | Register </title>
      </Helmet>
      <div className=" p-2 flex flex-col lg:flex-row items-center justify-start gap-5">
        <div className=" w-1/3 flex justify-center p-2">
          <img
            className="rounded-xl"
            src="https://i.ibb.co/qr7Bghv/Register.gif"
            alt=""
          />
        </div>

        <div className=" p-2">
          <div className="border w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
            <h1 className="text-2xl font-bold text-center">Register Now </h1>
            <form noValidate="" action="" className="space-y-12">
            <div className="space-y-4">
              <div
                className="space-y-1 text-sm"
                data-aos-duration="2000"
                data-aos="fade-left"
              >
                <label htmlFor="name" className="block dark:text-gray-600">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="username"
                  placeholder="Your Name Here"
                  className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <div data-aos-duration="2000" data-aos="fade-right">
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              <div data-aos-duration="2000" data-aos="fade-left">
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="button"
                  className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
            
            <p className="text-xs text-center sm:px-6 dark:text-gray-600">
              Already have an account?
              <NavLink to="/login">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="underline dark:text-green-700 ml-2 font-bold"
                >
                  Log-In
                </a>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
