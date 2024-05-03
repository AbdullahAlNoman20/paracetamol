import { Helmet } from "react-helmet-async";

const Register = () => {
  return (
    <div className="flex justify-center my-20">
      <Helmet>
        <title>Paracetamol | Register </title>
      </Helmet>
      <div className="">
        <div className="border flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Register Now </h1>
            <p className="text-sm dark:text-gray-600">
              Register to access All Features
            </p>
          </div>
          <form noValidate="" action="" className="space-y-12">
            <div className="space-y-4">
              <div className="space-y-1 text-sm"data-aos-duration="2000"
data-aos="fade-left">
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
              <div data-aos-duration="2000"
data-aos="fade-right">
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
              <div data-aos-duration="2000"
data-aos="fade-left">
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
              <p className="px-6 text-sm text-center dark:text-gray-600">
                Already have an account ?
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline dark:text-violet-600"
                >
                   Log In
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
