import React from "react";
import { useLocation } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const navigateTo = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };
  const date = new Date().getFullYear();
  const location = useLocation();
  const pathname = location.pathname;
  const renderFooterForServices = () => (
    <div className="expert-tips">
      <div className="container">
        <div className="text-block">
          <h1 className="block-heading">
            <span className="heading-bold">EXPERT </span>
            <span className="heading">TIPS</span>
          </h1>
          <p>
            Regular maintenance is essential to ensure your vehicle performs at
            its best. From timely oil changes to tire rotations, adopting a
            proactive approach can prevent costly repairs and extend your car's
            lifespan. Keep an eye on dashboard warning lights and unusual
            sounds, as these can be early indicators of potential issues.
          </p>
        </div>
        <div className="arrow">
          <i
            onClick={() => scrollHandler()}
            className="bi bi-arrow-right-circle-fill"
          ></i>
        </div>
      </div>
    </div>
  );
  const renderFooterForPrices = () => (
    <div className="special-offer">
      <div className="container">
        <div className="text-block">
          <h1 className="block-heading">
            <span className="heading-bold">SPECIAL </span>
            <span className="heading">OFFER</span>
          </h1>
          <p>
            Upgrade your driving experience with our exclusive special offer! For
            a limited time, enjoy 20% off on all premium car maintenance
            packages, including oil changes, tire rotations, and engine
            diagnostics. Keep your vehicle running smoothly while saving money
            on essential services.
          </p>
        </div>
        <div className="arrow">
          <i
            onClick={() => scrollHandler()}
            className="bi bi-arrow-right-circle-fill"
          ></i>
        </div>
      </div>
    </div>
  );

  return (
    <div className="footer-container">
      <div className="contact-container">
        {pathname === "/" && (
          <>
            <h1 className="contacts-heading">
              <span className="heading">OUR </span>
              <span className="heading-bold">CONTACTS</span>
            </h1>
            <p className="address">
              ADDRESS:{" "}
              <span onClick={() => scrollHandler()}>
                {"4578 Marmora Road, Glasgow D04 89GR".toUpperCase()}
              </span>
            </p>
            <div className="pnone-numbers">
              <i className="bi bi-telephone-fill"></i>
              <div className="numbers">
                <a href="tel: 800-2345-6789">800-2345-6789</a>
                <br />
                <a href="tel: 800-2345-6790">800-2345-6790</a>
              </div>
            </div>
          </>
        )}
        {pathname === "/services" && renderFooterForServices()}
        {pathname === "/prices" && renderFooterForPrices()}

        <div className="social-media-icons">
          <i
            onClick={() => navigateTo("https://www.facebook.com")}
            className="bi bi-facebook"
          ></i>
          <i
            onClick={() => navigateTo("https://www.twitter.com")}
            className="bi bi-twitter-x"
          ></i>
        </div>
        <footer>
          <div>© {date} Car repair. All Rights Reserved.Privacy Policy</div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
