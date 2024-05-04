import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <div className=" p-3 flex justify-around items-center gap-5">
        <div className=" w-1/4 p-3">
          <div className="">
            <h1
              className="mb-5 text-5xl font-bold"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Welcome To Paracetamol
            </h1>
            <p className="mb-5 text-yellow-500 font-bold">
              (Under Development)
            </p>
            <p className="mb-5" data-aos="zoom-in" data-aos-duration="1500">
              Welcome to Paracetamol, your comprehensive health service
              platform. From prescription scanning and medication ordering to
              delivery management, medical shop inventory, and doctor
              appointments, we streamline your healthcare journey in one
              convenient destination.
            </p>
            <button className="btn btn-warning btn-outline">Explore Now</button>
          </div>
        </div>

        <div className=" w-1/2 p-3">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                className="hero min-h-screen rounded-3xl"
                style={{
                  backgroundImage: "url(https://i.ibb.co/R3wqqTW/a.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Paracetamol</h1>
                    <p className="mb-5">
                      Paracetamol is a commonly used pain reliever and fever
                      reducer. It is often used to treat headaches, muscle
                      aches, arthritis, backaches, toothaches, colds, and
                      fevers.
                    </p>
                    <button className="btn btn-outline btn-warning">
                      Effective pain relief and fever reduction.
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="hero min-h-screen rounded-3xl"
                style={{
                  backgroundImage: "url(https://i.ibb.co/VvR4HB8/b.png)",
                }}
              >
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Ibuprofen</h1>
                    <p className="mb-5">
                      Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID)
                      used to relieve pain, reduce inflammation, and lower
                      fever. It is commonly used to treat headaches, muscle
                      aches, arthritis, menstrual cramps, and minor injuries.
                    </p>
                    <button className="btn btn-outline btn-warning">
                      Effective pain relief and anti-inflammatory properties.
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="hero min-h-screen rounded-3xl"
                style={{
                  backgroundImage: "url(https://i.ibb.co/b2sxCNq/e.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Omeprazole</h1>
                    <p className="mb-5">
                      Omeprazole is a proton pump inhibitor (PPI) used to reduce
                      stomach acid production. It is commonly used to treat
                      gastroesophageal reflux disease (GERD), ulcers, and
                      heartburn.
                    </p>
                    <button className="btn btn-outline btn-warning">
                    Effective treatment for acid reflux and ulcers.
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
