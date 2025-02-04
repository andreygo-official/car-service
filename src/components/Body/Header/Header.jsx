import { useContext, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import carLogo from "../../../Images/car-logo.png";
import { cartContext } from "../../cartService";
import "./header.style.scss";
export const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { cart, increment, decrement, removeCart } = useContext(cartContext);
  const isModalTrue = () => {
    setModalOpen(!modalOpen);
  };
  const totalPrice = useMemo(() => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total;
  }, [cart]);
  return (
    <div className="header-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="main-logo" to={"/"}>
            <div>
              <img className="car-logo" src={carLogo} alt="carLogo" />
              <span className="logo-name">FixNDrive</span>
            </div>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4 ms-mb-0">
              <li>
                <NavLink to={"/"}>
                  {({ isActive }) => (
                    <button className={isActive ? "active" : ""}>Home</button>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/services"}>
                  {({ isActive }) => (
                    <button className={isActive ? "active" : ""}>
                      Services
                    </button>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/prices"}>
                  {({ isActive }) => (
                    <button className={isActive ? "active" : ""}>Prices</button>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/shop"}>
                  {({ isActive }) => (
                    <button className={isActive ? "active" : ""}>Shop</button>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contacts"}>
                  {({ isActive }) => (
                    <button className={isActive ? "active" : ""}>
                      Contacts
                    </button>
                  )}
                </NavLink>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <div className="cart-block">
                <i className="bi bi-cart" onClick={isModalTrue}></i>
                <span style={{display: cart.length > 0? "block" : "none"}} className="cart-length">{cart.length}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {modalOpen && (
        <div
          className="modal"
          style={{ display: modalOpen ? "block" : "none" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <div className="shopping-cart" role="search">
                <p>
                  <i className="bi bi-cart me-3"></i>
                </p>
                <p>Shopping Cart</p>
              </div>
              <span>{cart.length} items</span>
            </div>
            <div className="modal-body">
              {cart.length > 0 ? (
                <div className="row">
                  {cart.map((item, index) => (
                    <div key={index} className="row main align-items-center">
                      <div className="col-2">
                        <img
                          className="img-fluid item-img"
                          src={item.img}
                          alt={`item${index}`}
                        />
                      </div>
                      <div className="col">
                        <div className="row">{item.name}</div>
                      </div>
                      <div className="col increment-decrement">
                        <button
                          onClick={() => decrement(item.id)}
                          className="decrement"
                        >
                          -
                        </button>
                        <span className="border">{item.quantity}</span>
                        <button
                          onClick={() => increment(item.id)}
                          className="increment"
                        >
                          +
                        </button>
                      </div>
                      <div className="col">
                        <span className="price">
                          $ {item.price * item.quantity}
                        </span>{" "}
                        <span
                          onClick={() => removeCart(item.id)}
                          className="close"
                        >
                          &#10005;
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-cart">
                  <h3>Your cart is empty</h3>
                  <p>
                    Here your items will appear when you add them to the cart.
                  </p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <h3 className="total-price">
                Total Price: $ {totalPrice > 0 ? totalPrice : 0}
              </h3>
              <div className="footer">
                <div className="back-to-shop">
                  <a href="#" onClick={isModalTrue}>
                    ←
                  </a>
                  <span className="text-muted"> Back to shop</span>
                </div>
                <button className="btn btn-warning">CHECKOUT NOW</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
