import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Paracetamol | Home </title>
      </Helmet>
      <div className="mt-5">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/R3wqqTW/a.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold" data-aos="zoom-in"
data-aos-duration="1000">
                Welcome To Paracetamol
              </h1>
              <p className="mb-5 text-yellow-500 font-bold">
                (Under Development)
              </p>
              <p className="mb-5"data-aos="zoom-in"
data-aos-duration="1500">
                Welcome to Paracetamol, your comprehensive health service
                platform. From prescription scanning and medication ordering to
                delivery management, medical shop inventory, and doctor
                appointments, we streamline your healthcare journey in one
                convenient destination.
              </p>
              <button className="btn btn-warning btn-outline">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="p-6 py-12 dark:bg-yellow-700 dark:text-gray-50">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracking-tighter font-bold">
                Up to
                <br className="sm:hidden" /> 50% Off
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0">
                <span>Plus free shipping! Use code:</span>
                <span className="font-bold text-lg">SAD24</span>
              </div>
              <a
                href="#"
                rel="noreferrer noopener"
                className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <section className="p-6">
          <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
              <p className="text-sm sm:text-base">Clients</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
              <p className="text-sm sm:text-base">Followers on social media</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
              <p className="text-sm sm:text-base">Published books</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
              <p className="text-sm sm:text-base">TED talks</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">7</p>
              <p className="text-sm sm:text-base">Years of experience</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
              <p className="text-sm sm:text-base">Workshops</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
