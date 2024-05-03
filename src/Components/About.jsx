import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Paracetamol | About </title>
      </Helmet>
      <div className="">
        <section className="">
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
                  <h3 className="text-3xl font-semibold">Paracetamol</h3>
                  <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
                    A solution to every disease
                  </span>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                    <h3 className="text-xl font-semibold tracking-wide">
                      Introduction{" "}
                    </h3>
                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                      May 2024
                    </time>
                    <p className="mt-3">
                      1. Introduction: Healthcare is also evolving fast.
                      Paracetamol is a big step forward in this change. It's a
                      web app that brings together the ease of technology with
                      what's important in healthcare. Paracetamol isn't just
                      like any other app you might use. It's a whole new way of
                      thinking about healthcare. It's a smart way to meet the
                      need for healthcare that's easy to get, works well, and
                      includes everyone. Our goal with Paracetamol is clear: we
                      want to make healthcare better for everyone. Using digital
                      tools, we want to make it easier for people to get the
                      care they need, give patients more say in their health,
                      and help doctors and patients work together smoothly. In
                      short, Paracetamol isn't just a tool; it's a big change in
                      how we do healthcare. It's about being creative, working
                      together, and making sure everyone gets the care they
                      deserve, no matter where they are or how much money they
                      haveIn today's digital age, where technology shapes almost
                      every part of our lives, <br />
                      <br /> 1.1 Objectives: <br /> 1.1.1 Enhanced
                      Accessibility: Our commitment is to offer healthcare
                      services to everyone, regardless of the patient's
                      geographic location or socioeconomic status. The purpose
                      of Paracetamol is to narrow down the gap between patients
                      and health care providers so that whoever needs it can
                      readily access essential medical services. <br /> 1.1.2
                      All medicine at one stop: Users will be able to buy all
                      kinds of medicine from our website.Sometimes it's very
                      difficult to find some medicine in rural places.We aim to
                      solve that problem through our website. <br /> 1.1.3
                      Understandability of Prescription: Most of the time normal
                      people can't understand the prescription of the doctor for
                      which they sometimes have over dose of the machine.With AI
                      powered prescription scanner we are providing the accurate
                      text easy to understand by the user.
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                    <h3 className="text-xl font-semibold tracking-wide">
                      Methodology
                    </h3>
                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                      May 2024
                    </time>
                    <p className="mt-3">
                      2. Methodology: <br /> There are 4 methodologies of our website
                      <br />1. Prescription Scanner <br />2. Submitting Prescription for
                      medicine <br />3. Medicine shop <br />4. Doctors Appointment <br />2.1
                      Prescription Scanner: This is a sophisticated AI-driven
                      system designed to accurately scan and interpret medical
                      prescriptions. This technology uses advanced optical
                      character recognition (OCR) coupled with machine learning
                      algorithms to ensure that the prescriptions are read
                      accurately, and the correct medications are identified.
                      <br />2.2 Submitting Prescription: After scanning the
                      prescription if someone submits the prescription we will
                      provide medicine to the user.They don't need to hustle to
                      med shops. <br /> 2.3 Medicine Shop: Users can scroll through our
                      medicine shop to buy any medicine they want. Our delivery
                      persons will deliver the medicines to the user within a
                      day. <br /> 2.4 Doctors Appointment: Access to a network of
                      licensed professionals across various specialties for
                      teleconsultations or in-person visits, bookable directly
                      through the application 2.5 Logistic and delivery
                      department: To complement the digital services,
                      Paracetamol boasts a robust logistics framework that
                      ensures timely delivery of medicines. We understand that
                      many of our users rely on punctuality, especially when it
                      comes to medication for chronic conditions. Our logistics
                      are optimised for speed and accuracy, with a commitment to
                      delivering within the promised time frame, supported by
                      real-time tracking features for users to monitor their
                      orders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
