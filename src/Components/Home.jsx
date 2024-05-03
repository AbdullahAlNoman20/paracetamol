const Home = () => {
  return (
    <div className="">
      <div className="my-5">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/R3wqqTW/a.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">
                Welcome To Paracetamol
              </h1>
              <p className="mb-5 text-red-700 font-bold">(Under Development)</p>
              <p className="mb-5">
                Welcome to Paracetamol, your comprehensive health service
                platform. From prescription scanning and medication ordering to
                delivery management, medical shop inventory, and doctor
                appointments, we streamline your healthcare journey in one
                convenient destination.
              </p>
              <button className="btn btn-primary btn-outline">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
