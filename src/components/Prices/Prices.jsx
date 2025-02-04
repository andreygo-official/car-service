import React, { useEffect, useState } from "react";
import "./prices.style.scss";
import { priceList } from "./pricelist";
const Prices = () => {
  const [filteredArray, setFilteredArray] = useState([]);
  const [active, setActive] = useState(0);
  const firstCategory = () => {
    const newArray = priceList.filter(item => item.price <= 50);
    setFilteredArray(newArray);
  };
  const secondCategory = () => {
    const newArray = priceList.filter(
      (item) => item.price > 50 && item.price <= 100
    );
    setFilteredArray(newArray);
  };
  const thirdCategory = () => {
    const newArray = priceList.filter((item) => item.price > 100);
    setFilteredArray(newArray);
  };
  const showAll = () => {
    setFilteredArray(priceList);
  };
  const chunkArray = (array) => {
    const midIndex = Math.ceil(array.length / 2);
    return [array.slice(0, midIndex), array.slice(midIndex)];
  };
  const [firstTable, secondTable] = chunkArray(filteredArray);

  useEffect(() => {
    showAll();
  }, []);

  const clickHandler = (index) => {
    setActive(index);
  };
  return (
    <div className="prices-container">
      <div className="container">
        <h1 className="block-heading">
          <span className="heading-bold">PRICE </span>
          <span className="heading">LIST</span>
        </h1>
        <div className="btns">
          <div
            style={{ backgroundColor: active === 0 ? "red" : "" }}
            className="button"
            onClick={() => {
              showAll();
              clickHandler(0);
            }}
          >
            SHOW ALL
          </div>
          <div
            className="button"
            style={{ backgroundColor: active === 1 ? "red" : "" }}
            onClick={() => {
              clickHandler(1);
              firstCategory();
            }}
          >
            FIRST CATEGORY
          </div>
          <div
            className="button"
            style={{ backgroundColor: active === 2 ? "red" : "" }}
            onClick={() => {
              clickHandler(2);
              secondCategory();
            }}
          >
            SECOND CATEGORY
          </div>
          <div
            className="button"
            style={{ backgroundColor: active === 3 ? "red" : "" }}
            onClick={() => {
              clickHandler(3);
              thirdCategory();
            }}
          >
            THIRD CATEGORY
          </div>
        </div>
        <div className="tables">
          <table>
            <tbody>
              {firstTable.map((element, index) => (
                <tr key={index}>
                  <td>{element.name}</td>
                  <td>${element.price}</td>
                  <td className="action">{element.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table>
            <tbody>
              {secondTable.map((element, index) => (
                <tr key={index}>
                  <td>{element.name}</td>
                  <td>${element.price}</td>
                  <td className="action">{element.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
};

export default Prices;
