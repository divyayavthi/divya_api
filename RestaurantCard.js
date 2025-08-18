import { Link } from "react-router-dom";



const RestaurentCard = ({ resData }) => {
  return (
    <div className="resCard" style={{ backgroundColor: "#f0f0f0" }}>
      <h2>{resData.gender}</h2>
      <img alt="recard" src={resData.picture.large} />
      <h3>
        Name : {resData.name.title} . {resData.name.first}
      </h3>
      {/* <p>Country : {resData.location.country}</p>
      <p>State : {resData.location.state}</p>
      <p>Email : {resData.email}</p>
      <p>id: {resData.id}</p> */}

     
      <Link to={`/${resData.id}`}>
        View Details
      </Link>
    </div>
  );
};

export default RestaurentCard;



// import { Link } from "react-router-dom";
// const RestaurentCard = ({ resData }) => {
//   return (
//     <div className="resCard" style={{ backgroundColor: "#f0f0f0" }}>
//       <h2>{resData.gender}</h2>
//       <img alt="recard" src={resData.picture.large} />
//       <h3>
//         Name : {resData.name.title} . {resData.name.first}
//       </h3>
//       <p>Country : {resData.location.country}</p>
//       <p>State : {resData.location.state}</p>
//       <p>Email : {resData.email}</p>
//       <p>id:{resData.id}</p>
//     </div>
//   );
// };
// export default RestaurentCard;


