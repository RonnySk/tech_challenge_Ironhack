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
    <div>
      <h1>The Phone Cave</h1>
      {allPhones.map((onePhone, index) => {
        return (
          <div className="" key={index}>
            <div className="">
              <h2>{onePhone.name}</h2>
              <p>{onePhone.description}</p>
              <h3>Technical description</h3>
              <ul>
                <li>Processor: {onePhone.processor}</li>
                <li>Ram: {onePhone.ram}</li>
                <li>Screem size: {onePhone.screem}</li>
                <li>Manufacturer: {onePhone.manufacturer}</li>
              </ul>
              <h4>Price: {onePhone.price}</h4>
              <Link className="openMessenger-link" to={`phones/${onePhone.id}`}>
                details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
