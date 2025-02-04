import React, { useEffect, useState } from "react";
import "./services.scss";
import workingMomentImg from "../../Images/working-moments.webp";
import superCar from "../../Images/super-car.webp";
import engine from "../../Images/engine.jpg";
import carManager from "../../Images/car-manager.jpg";
import { accordionDetails } from "../accordion-info";
const Services = () => {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const infoHandler = (index) => {
    if (index !== active) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActive(index);
        setIsTransitioning(false);
      }, 50);
    }
    setActive(index);
  };
  useEffect(() => {
    console.log(window.location.pathname)
  }, [])
  return (
    <div className="services-container">
      <div className="capabilities-container">
        <div className="container">
          <h1 className="block-heading">
            <span className="heading-bold">OUR </span>
            <span className="heading">CAPABILITIES</span>
          </h1>
          <div className="row pt-5">
            <div className="col-12 col-md-6 pt-3">
              <img
                className="working-moment-img"
                src={workingMomentImg}
                alt="img1"
              />
            </div>
            <div className="col-12 col-md-6 pt-3">
              <h3>Excellence in Automotive Service: What Sets Us Apart</h3>
              <p className="capabilities-description">
                At FixNDrive, we pride ourselves on offering a comprehensive
                range of car repair and maintenance services designed to keep
                your vehicle in top condition. With years of experience and a
                team of certified mechanics, we bring unmatched expertise to
                every task—whether it's routine maintenance, complex engine
                diagnostics, or precision repairs.
              </p>
              <p>
                We understand that your car is not just a means of
                transportation but a part of your daily life. That’s why we
                emphasize transparency, quality, and attention to detail in
                every project. Our technicians work closely with you to explain
                the necessary repairs and provide cost-effective solutions
                tailored to your needs. Beyond technical expertise, customer
                satisfaction is at the core of what we do.
              </p>
              <button
                onClick={() => scrollHandler()}
                className="btn btn-danger"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="offerings-container">
        <div className="grid-container">
          <div className="text-block">
            <h1 className="offer-heading">
              <span className="heading-bold">WHAT </span>
              <span className="heading">WE OFFER</span>
            </h1>
            <div className="points">
              <div className="first-point">
                <div className="first-heading">01</div>
                <h2>Expert Diagnostics and Repair</h2>
                <p>
                  Our team of certified technicians uses advanced diagnostic
                  tools to identify and address issues with precision. From
                  minor fixes to major repairs, we ensure your vehicle is back
                  on the road in optimal condition.
                </p>
              </div>

              <div className="second-point">
                <div className="first-heading">02</div>
                <h2>Preventive Maintenance Services</h2>
                <p>
                  Regular maintenance is key to extending the lifespan of your
                  car. We offer oil changes, brake inspections, tire rotations,
                  and more to keep your vehicle running smoothly and prevent
                  costly breakdowns.
                </p>
              </div>
              <div className="third-point">
                <div className="first-heading">03</div>
                <h2>Expert Diagnostics and Repair</h2>
                <p>
                  Every vehicle and owner is unique. Whether it’s performance
                  tuning, part replacements, or specialty services, we provide
                  tailored solutions that meet your specific requirements and
                  exceed expectations.
                </p>
              </div>
            </div>
          </div>
          <div className="image-block">
            <img src={superCar} alt="img2" />
          </div>
        </div>
      </div>
      <div className="featured-services">
        <div className="container">
          <h1 className="block-heading">
            <span className="heading-bold">FEATURED </span>
            <span className="heading">SERVICES</span>
          </h1>
          <div className="accordion">
            <div className="icons">
              {accordionDetails.map((accordion, index) => (
                <div
                  onClick={() => infoHandler(index)}
                  className="icon-info"
                  style={{ color: active === index ? "red" : "" }}
                  key={index}
                >
                  <i className={accordion.icon}></i>
                  <span>{accordion.title}</span>
                </div>
              ))}
            </div>
            <div className={`info ${isTransitioning ? "" : "visible"}`}>
              <h2>{accordionDetails[active].title.toUpperCase()}</h2>
              <p>{accordionDetails[active].text}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="car-maintenance">
        <div className="container">
          <h1 className="block-heading">
            <span className="heading-bold">CAR MAINTENANCE </span>
            <span className="heading">&amp; CAR ADVICE</span>
          </h1>
          <div className="row">
            <div className="maintenance-info col-md-12 col-lg-6 mt-5">
              <img src={engine} alt="engine" />
            </div>
            <div className="maintenance-text col-md-12 col-lg-6 mt-5">
              <h2>Comprehensive Engine Maintenance &amp; Repair</h2>
              <p>
                Your engine is the heart of your vehicle, and maintaining its
                performance is crucial for reliability and longevity. At
                FixNDrive, we provide a full range of engine maintenance and
                repair services tailored to your needs. From routine oil changes
                and air filter replacements to more complex diagnostics and
                timing belt repairs, our certified mechanics use
                state-of-the-art tools to ensure your engine runs smoothly and
                efficiently. We pride ourselves on delivering top-tier service
                that minimizes downtime and keeps your vehicle performing at its
                best.
                <br />
                <br />
                Our team understands the importance of preventive care and
                transparent communication. Before starting any work, we provide
                a detailed explanation of the required repairs, empowering you
                to make informed decisions. By addressing potential issues
                early, we help you avoid costly breakdowns and extend the
                lifespan of your car. Whether you're tackling engine warning
                lights, unusual noises, or routine maintenance, FixNDrive is
                your trusted partner in automotive care.
              </p>
            </div>
            <div className="maintenance-info col-md-12 col-lg-6 mt-5">
              <img src={carManager} alt="carManager" />
            </div>
            <div className="col-md-12 col-lg-6 mt-5 maintenance-text">
              <h2>Expertise You Can Trust for Your Car’s Health</h2>
              <p>
                At FixNDrive, we believe in a holistic approach to vehicle care,
                addressing every component to ensure safety and optimal
                performance. Our services include comprehensive brake
                inspections, suspension tuning, and precision alignments, all
                designed to enhance your driving experience. With years of
                experience and a commitment to quality, our technicians ensure
                that every detail is carefully checked and repaired to keep your
                car running like new. <br />
                <br />
                We also prioritize customer satisfaction by providing clear,
                honest communication and cost-effective solutions. Whether
                you're preparing for a road trip, dealing with unusual handling,
                or simply ensuring routine maintenance, we are here to meet your
                needs. Trust FixNDrive to deliver exceptional care for your
                vehicle, ensuring both peace of mind and top-notch performance
                every time you hit the road.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
