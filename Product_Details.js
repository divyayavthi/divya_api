//   fetch() --> function for sending http methods
// we can get requested data  inside the then()
// so we can get that through the response
// we are getting json data but response dont know what is the data type so
// we should tell that data  response.json()
// this is arrow function so it is return the value and we can get from another then
// then((json)) -->get json data so using this set the value for the setproduct
import { useEffect, useState } from "react";
import { Typography, TextField ,Button} from "@mui/material";
const ProductDetails = () => {
  // fetching data from api
  // product showing data to table
  const [products, setproducts] = useState([]);
  const [newTitle,setNewTitle]=useState('')
  //  data fetching from api end point
  //  data showed after ui component loaded

  useEffect(() => {
    fetch(
      "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches"
    )
      .then((res) => res.json())
      .then((result) => {
        setproducts(result.data.data);
      });
  }, []);
  // [] because of this empty array => useEffect calls only one time
  return (
    <div className="ProductDetails">
      <table>
        <thead>
          <th>id</th>
          <th>title</th>
          <th>description</th>
          <th>price</th>
          <th>discountPercentage</th>
          <th>rating</th>
          <th>Action</th>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>*59.0
              <td>{product.discountPercentage}</td>
              
              <td>
                <TextField
                  label=""
                  multiline
                  rows={1}
                  variant="outlined"
                  defaultValue={product.rating}
                />
              </td>

              <td>
                <Button variant="contained" color="black">
                  Update
                </Button>{" "}
              </td>
              <Button variant="contained" color="black">
                Delete
              </Button>
            </tr>
          ))}
        </tbody>
        <tfoot>
            <tr>
                <td><TextField
  label="Tile"
  placeholder="Enter Title"
  variant="outlined"
  value={newTitle}
  onChange={(e)=>setNewTitle(e.target.value)}
/></td>
<td><Button variant="contained" color="black" onClick={addproduct}>
                Add Product
              </Button></td>
            </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default ProductDetails;
