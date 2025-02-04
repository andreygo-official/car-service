import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Body/Footer/Footer";
import { Header } from "./components/Body/Header/Header";
import Shop from "./components/Body/Shop/Shop";
import CartService from "./components/cartService";
import Contacts from "./components/Contacts/Contacts";
import Prices from "./components/Prices/Prices";
import Services from "./components/Services/Services";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        if (window.scrollY >= 200 && !isVisible) {
          setIsVisible(true);
          setIsAnimating(true);
        }
      } else if (window.scrollY < 200 && isVisible) {
        setIsAnimating(true);
        setTimeout(() => {
          setIsVisible(false);
          setIsAnimating(false);
        }, 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="App">
      <CartService>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/services" element={<Services />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />

        <div
          onClick={() => scrollHandler()}
          className={`arrow-up ${
            isVisible && isAnimating
              ? "arrow-forward"
              : isAnimating
              ? "arrow-reverse"
              : ""
          }`}
          style={{ display: isVisible || isAnimating ? "block" : "none" }}
        >
          &#8593;
        </div>
      </CartService>
    </div>
  );
}

export default App;
