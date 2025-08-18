import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
// const CardDetails = ({ list }) => {
//   const { id } = useParams();
//   const restaurant = list.find((item) => item.id === id);

//   if (!restaurant) {
//     return <h2>Details not found</h2>;
//   }

//   return (
//     <div className="resDetails">
//       <h1>Details Page</h1>
//       <img alt="res-img" src={restaurant.picture.large} />
//       <h2>
//         {restaurant.name.title}. {restaurant.name.first}
//       </h2>
//       <p>Gender: {restaurant.gender}</p>
//       <p>Email: {restaurant.email}</p>
//       <p>Country: {restaurant.location.country}</p>
//       <p>State: {restaurant.location.state}</p>
//     </div>
//   );
// };
const CardDetails = () => {
  const { id } = useParams();
  const [specificUser, setSpecificUser] = useState({});
  useEffect(() => {
    fetchSpecificUserData();
  }, []);

  const fetchSpecificUserData = async () => {
    const options = {
      method: "GET",
      url: `https://api.freeapi.app/api/v1/public/randomusers/${id}`,
      params: { page: "1", limit: "10" },
      headers: { accept: "application/json" },
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
      setSpecificUser(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="resDetails">
      <h1>Details</h1>
      <h3>Gender : {specificUser?.gender}</h3>
      <h3>Name : {specificUser?.name?.first}</h3>
      <h3>Email :  {specificUser?.email}</h3>
      <h3>Street Name :{specificUser?.location?.street?.name}</h3> 
      <h3>City :{specificUser?.location?.city} ,{specificUser?.location?.state}
        ,{specificUser?.location?.country}-{specificUser?.location?.postcode}
      </h3>
      <h3>Username :{specificUser?.login?.username} Password  :{specificUser?.login?.password}  </h3>
       <h3>DOB :{specificUser?.dob?.date} Age  :{specificUser?.dob?.age}  </h3>
    </div>
  );
};

export default CardDetails;
