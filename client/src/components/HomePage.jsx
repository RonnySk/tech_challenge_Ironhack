import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [allPhones, setAllPhones] = useState([]);

  const getAllPhones = () => {
    axios.get("http://localhost:5005/api/phones").then((response) => {
      const allPhonesData = response.data;

      setAllPhones(allPhonesData);
    });
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div className="home-container">
      <h1>The Phone Cave</h1>

      {allPhones.map((onePhone, index) => {
        return (
          <div className="phone-container" key={index}>
            <h2>{onePhone.name}</h2>
            <img
              className="phone-img"
              src={`images/${onePhone.imageFileName}`}
              alt={onePhone.name}
            ></img>
            <Link className="link-btn" to={`/phones/${onePhone.id}`}>
              Details
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
