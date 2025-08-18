import RestaurentCard from "./RestaurantCard";
import { useEffect, useState } from "react";

import axios from "axios";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://api.freeapi.app/api/v1/public/randomusers",
      params: { page: "1", limit: "10" },
      headers: { accept: "application/json" },
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
      setListofRestaurants(data.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="body">
      <div className="resContainer">
        {listofRestaurants.map((restaurent) => (
          <RestaurentCard key={restaurent.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};
export default Body;
