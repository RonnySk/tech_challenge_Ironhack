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
              <img src=""></img>

              <Link className="" to={`/phones/${onePhone.id}`}>
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
