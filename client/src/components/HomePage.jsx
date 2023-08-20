import axios from "axios";
import React, { useEffect } from "react";

function HomePage() {
  const getAllPhones = () => {
    axios.get("/phones").then((response) => {
      const { allphones } = response.data;
      console.log(allphones);
    });
  };

  // useEffect(() => {
  //   getAllPhones();
  // }, []);

  return <div>HomePage</div>;
}

export default HomePage;
