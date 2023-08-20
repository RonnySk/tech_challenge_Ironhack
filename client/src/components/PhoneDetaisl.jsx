import axios from "axios";
import React, { useState } from "react";

function PhoneDetaisl() {
  const [onePhone, setAllPhone] = useState([]);

  const getAllPhones = () => {
    axios.get("http://localhost:5005/api/phones").then((response) => {
      const allPhonesData = response.data;

      setAllPhones(allPhonesData);
    });
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return <div>PhoneDetaisl</div>;
}

export default PhoneDetaisl;
