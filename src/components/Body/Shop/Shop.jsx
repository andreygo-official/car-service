import React, { useContext, useRef, useState } from "react";
import { cartContext } from "../../cartService";
import "./shop.scss";
import { shopItems } from "./shopItems";

const Shop = () => {
  const { addCart } = useContext(cartContext);
  const marqueeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - marqueeRef.current.offsetLeft);
    setScrollLeft(marqueeRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - marqueeRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    marqueeRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <div className="shop-container">
      <div className="container">
        <div className="text-block">
          <h1 className="block-heading">
            <span className="heading-bold">OUR </span>
            <span className="heading">PRODUCTS</span>
          </h1>
        </div>
        <div className="cards">
          <div className="row">
            {shopItems.map((item, index) => (
              <div key={index} className="col-12 col-md-6 mt-5">
                <div className="card">
                  <div className="card-body">
                    <div className="card-info">
                      <h2 className="card-title">
                        {item.name}
                        <i className={`${item.icon} ms-3`}></i>
                      </h2>
                      <div className="price">${item.price}</div>
                    </div>
                    <p className="card-text">{item.description}</p>
                    <button
                      onClick={() => addCart(item)}
                      className="btn btn-success"
                    >
                      ORDER NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="marquee-container"
      ref={marqueeRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}>
        <div className="marquee">
          <span>🚗 Precision</span>
          <span>🎨 Quality</span>
          <span>🏎️ Speed</span>
          <span>🤝 Trust</span>
          <span>⚒️ Craftsmanship</span>
          <span>🧳 Expertise</span>
          <span>⛑️ Care</span>
          <span>🚗 Precision</span>
          <span>🎨 Quality</span>
          <span>🏎️ Speed</span>
          <span>🤝 Trust</span>
          <span>⚒️ Craftsmanship</span>
          <span>🧳 Expertise</span>
          <span>⛑️ Care</span>
        </div>
      </div>
    </div>
  );
};

export default Shop;
