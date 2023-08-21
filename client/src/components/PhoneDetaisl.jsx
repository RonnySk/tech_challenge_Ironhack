import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PhoneDetaisl() {
  const [onePhone, setOnePhone] = useState({});
  const { id } = useParams();

  const getAllPhones = () => {
    axios.get(`http://localhost:5005/api/phones/${id}`).then((response) => {
      const onePhoneData = response.data;

      console.log("one phone data", onePhoneData);

      setOnePhone(onePhoneData);
    });
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div className="details-container">
      <h2>{onePhone.name}</h2>
      <img
        className="phone-img"
        src={`/images/${onePhone.imageFileName}`}
        alt={onePhone.name}
      ></img>
      <p>{onePhone.description}</p>
      <h3>Technical description</h3>
      <ul>
        <li>Processor: {onePhone.processor}</li>
        <li>Ram: {onePhone.ram}</li>
        <li>Screem size: {onePhone.screem}</li>
        <li>Manufacturer: {onePhone.manufacturer}</li>
      </ul>
      <h4>Price: €{onePhone.price}</h4>
      <Link className="link-btn" to="/">
        Back to Phones
      </Link>
    </div>
  );
}

export default PhoneDetaisl;
