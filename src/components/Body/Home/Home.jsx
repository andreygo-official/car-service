import React, { useEffect, useState } from "react";
import "./home.style.scss";
import backGroundImageOne from "../../../Images/car-repair-background.jpg";
import backgroundImageTwo from "../../../Images/car-repair-background-2.jpg";
import backgroundImageThree from "../../../Images/car-repair-backround-3.jpg";
import lexusEngine from "../../../Images/lexus-engine.jpg";
import lexusInterior from "../../../Images/lexus-interior.jpg";
import sedan from "../../../Images/sedan.png";
import engine from "../../../Images/car-engine.png";
import service from "../../../Images/service.png";
import battery from "../../../Images/car-battery.png";
import firstRepair from "../../../Images/car-repair.jpeg";
import secondRepair from "../../../Images/car-repair-1.jpg";
import thirdRepair from "../../../Images/car-repair-2.jpg";
import fourthRepair from "../../../Images/car-repair-3.webp";
import iconOne from "../../../Images/person-icon-1.png";
import iconTwo from "../../../Images/person-icon-2.png";
import iconThree from "../../../Images/person-icon-3.webp";
import { homeDetails } from "./home-details";
const Home = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const images = [backGroundImageOne, backgroundImageTwo, backgroundImageThree];
  const [paragraphAnimationActive, setParagraphAnimationActive] =
    useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const nextSlide = (n) => {
    let newIndex = currentSlideIndex + n;
    if (newIndex >= images.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setAnimationKey(animationKey + 1);
    setCurrentSlideIndex(newIndex);
  };

  const goToSlide = (index) => {
    if (index !== currentSlideIndex) {
      setCurrentSlideIndex(index);
      setAnimationKey(animationKey + 1);
    }
  };
  useEffect(() => {
    setParagraphAnimationActive(false);
    const timer = setTimeout(() => {
      setParagraphAnimationActive(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [animationKey]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
      setAnimationKey((prevKey) => prevKey + 1);
    }, 10000);

    return () => clearInterval(slideInterval);
  }, [currentSlideIndex, images.length]);

  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="home-container">
      <div className="slide-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${images[currentSlideIndex]})`,
          }}
        >
          <div className="container">
            <div className="buttons">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${
                    currentSlideIndex === index ? "active-btn" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>
            <div className="home-info">
              <h1
                key={animationKey}
                className="home-heading animate__animated animate__backInDown"
              >
                <span className="heading">
                  {homeDetails[currentSlideIndex].heading}
                </span>
                <br />
                <span className="heading-bold">
                  {homeDetails[currentSlideIndex].headingBold}
                </span>
              </h1>
              <p
                className={`${
                  paragraphAnimationActive
                    ? "animate__animated animate__backInDown"
                    : ""
                }`}
                style={{
                  visibility: paragraphAnimationActive ? "visible" : "hidden",
                }}
              >
                {homeDetails[currentSlideIndex].paragraph}
              </p>
            </div>
          </div>
        </div>

        <a className="prev" onClick={() => nextSlide(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => nextSlide(1)}>
          &#10095;
        </a>
      </div>
      <div className="about-us">
        <div className="container">
          <h1 className="heading">A FEW WORDS</h1>
          <h1 className="heading-bold">ABOUT US</h1>
          <p>
            For nearly 20 years, residents throughout the local area have turned
            to Car Repair for all of their automotive repair needs. With free
            estimates and fast turnaround, we are known for our personal service
            and expertise in all forms of specialized engine repair. We use the
            latest and most modern diagnostic technology to have you back in
            your car.
          </p>
          <button onClick={() => scrollHandler()} className="btn btn-danger">
            READ MORE
          </button>
        </div>
      </div>
      <div className="grid-container">
        <div className="item-one">
          <img src={lexusEngine} alt="engine" />
        </div>
        <div className="item-two">
          <h1 className="heading">BEST</h1>
          <h1 className="heading-bold">SERVICES</h1>
          <p>
            Car Repair can solve almost any problem that occurs with your
            vehicle. From engine repairs and oil change to regular maintenance
            and diagnostics, you will always get reliable services from our ASE
            certified technicians who use the latest in automotive equipment and
            diagnostic software.
          </p>
          <button onClick={() => scrollHandler()} className="btn">
            READ MORE
          </button>
        </div>
        <div className="item-three">
          <h1 className="heading">100% RESULT</h1>
          <h1 className="heading-bold">GUARANTEE</h1>
          <p>
            Car Repair stands for expertise, value, and professionalism - and
            has from the day the company began. We were the first automotive
            aftermarket repair company to offer a lifetime guarantee on select
            services, and today we guarantee that the results of our work will
            meet your expectations.
          </p>
          <button onClick={() => scrollHandler()} className="btn">
            READ MORE
          </button>
        </div>
        <div className="item-four">
          <img src={lexusInterior} alt="interior" />
        </div>
      </div>
      <div className="advantages">
        <div className="container">
          <h1 className="advantages-heading">
            <span className="heading-bold">OUR </span>
            <span className="heading">ADVANTAGES</span>
          </h1>
          <div className="row">
            <div className="advantage-block col-md-12 col-lg-6">
              <div className="col-md-8 p-5 order-1 order-lg-0">
                <div>
                  <h2>ALL CAR MAKES</h2>
                  <p>
                    We provide a variety of repair and maintenance services for
                    all car makes and models, even for exotic and vintage ones.
                  </p>
                </div>
              </div>
              <div className="col-md-4 order-0 order-lg-1">
                <img className="car-part" src={sedan} alt="sedan" />
              </div>
            </div>
            <div className="advantage-block col-md-12 col-lg-6">
              <div className="col-md-4">
                <img className="car-part" src={engine} alt="engine" />
              </div>
              <div className="col-md-8 p-5">
                <div>
                  <h2>SERVICE VARIETY</h2>
                  <p>
                    The main principle of our work is to offer a wide range of
                    quality car repair services and we’ve been doing it since
                    our first day.
                  </p>
                </div>
              </div>
            </div>
            <div className="advantage-block col-md-12 col-lg-6">
              <div className="col-md-8 p-5 order-1 order-lg-0">
                <div>
                  <h2>QUALITY SUPPORT</h2>
                  <p>
                    Car Repair offers quality support programs for any vehicles
                    that allow them to always stay fully functional.
                  </p>
                </div>
              </div>
              <div className="col-md-4 order-0 order-lg-1">
                <img className="car-part" src={service} alt="service" />
              </div>
            </div>
            <div className="advantage-block col-md-12 col-lg-6">
              <div className="col-md-4">
                <img className="car-part" src={battery} alt="battery" />
              </div>
              <div className="col-md-8 p-5">
                <div>
                  <h2>ACCESSORIES</h2>
                  <p>
                    At our car repair center, you can also buy any accessories
                    you need for your vehicle, including car tires and filters.
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => scrollHandler()}
              className="btn btn-secondary"
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="blurred-backdrop"></div>
        <div className="container">
          <h1 className="service-heading">
            <span className="heading">OUR </span>
            <span className="heading-bold">SERVICES</span>
          </h1>
          <div className="service-block">
            <div className="row services-row">
              <div className="card mb-3 col-md-12 col-lg-6">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      width="100%"
                      height="100%"
                      src={firstRepair}
                      className=""
                      alt="firstRepair"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h3 onClick={() => scrollHandler()}>BRAKE REPAIR</h3>
                      <p>
                        From the brake pedal to hydraulic brake fluid, our
                        technicians can perform brake repair on any make and
                        model.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 col-md-12 col-lg-6">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      width="100%"
                      height="100%"
                      src={secondRepair}
                      className=""
                      alt="secondRepair"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h3 onClick={() => scrollHandler()}>ENGINE REPAIR</h3>
                      <p>
                        We take the welfare of your engine seriously and offer
                        services to prevent the need for future engine
                        replacement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 col-md-12 col-lg-6">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      width="100%"
                      height="100%"
                      src={thirdRepair}
                      className=""
                      alt="thirdRepair"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h3 onClick={() => scrollHandler()}>OIL CHANGE</h3>
                      <p>
                        One of the most effective and inexpensive ways to help
                        protect your car, is to change the oil and the oil
                        filter regularly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 col-md-12 col-lg-6">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      width="100%"
                      height="100%"
                      src={fourthRepair}
                      className=""
                      alt="fourthRepair"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h3 onClick={() => scrollHandler()}>WHEEL CHANGE</h3>
                      <p>
                        We provide extensive wheel change services that include
                        emergency tire replacement when you are on the road.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feedback-container">
        <div className="container">
          <h1 className="clients-heading">
            <span className="heading-bold">WHAT OUR </span>
            <span className="heading">CLIENTS SAY</span>
          </h1>
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to="0"
                className="active selector"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="image-block">
                  <img
                    src={iconOne}
                    className="d-block person-icon"
                    alt="iconOne"
                  />
                  <i className="bi bi-quote"></i>
                </div>
                <div className="carousel-caption d-md-block">
                  <h3>PETER SMITH</h3>
                  <p>
                    I have been going to Car Repair for almost four years now,
                    and have always received great service and fair prices. They
                    always go out of their way to finish the work on time, and
                    if it’s very busy they will rent a car. Also, you can’t beat
                    their National Certified Auto Guarantee.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="image-block">
                  <img
                    src={iconTwo}
                    className="d-block person-icon"
                    alt="iconTwo"
                  />
                  <i className="bi bi-quote"></i>
                </div>
                <div className="carousel-caption d-md-block">
                  <h3>TOM DOE</h3>
                  <p>
                    The owner of Car Repair didn’t want me to have to leave with
                    a car that doesn’t work. So she adjusted the price to meet
                    my ability to pay and did the work at a great rate as a
                    favor to me. Besides they offered the top-notch customer
                    service that’s hard to find nowadays.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="image-block">
                  <img
                    src={iconThree}
                    className="d-block person-icon"
                    alt="iconThree"
                  />
                  <i className="bi bi-quote"></i>
                </div>
                <div className="carousel-caption d-md-block">
                  <h3>JANE WILLIAMS</h3>
                  <p>
                    I love Car Repair because they treat their customers with
                    special knowledge of all auto repairs, big or small. They
                    are always courteous and friendly and contact you about any
                    extra needed repairs before the work is done. I would
                    recommend them to everyone for your auto needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
