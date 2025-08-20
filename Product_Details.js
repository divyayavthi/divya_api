//   fetch() --> function for sending http methods
// we can get requested data  inside the then()
// so we can get that through the response
// we are getting json data but response dont know what is the data type so
// we should tell that data  response.json()
// this is arrow function so it is return the value and we can get from another then
// then((json)) -->get json data so using this set the value for the setproduct
import { useEffect, useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
const ProductDetails = () => {
  // fetching data from api
  // product showing data to table
  const [products, setproducts] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newCategory, setNewCategory] = useState("");
  //  data fetching from api end point
  //  data showed after ui component loaded

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setproducts(result);
      });
  }, []);

  function addProducts(){
    // these are keys
    const title =newTitle.trim();
    const price =newPrice.trim();
    const description =newDescription.trim();
    const category =newCategory.trim();

    if(title && price && description && category){
      fetch('https://fakestoreapi.com/products',
        // should be in object form
        // should tell fetch function what method 
        // 
        {
          method:"POST",
          body:JSON.stringify({
            title,price,description,category
          }),
          // server should understand what kind of data 
          // ('Content-Type': 'application/json'; chartset=UTF-8 )
          headers:{
            'Content-Type': 'application/json' 
          }
              // we get the response in then function
              // response may be in text format so we should convert it
      }).then((response)=>response.json())
      // we can get that Json data to this then via data variable
      .then (data=>{
        setproducts([...products,data])
        console.log("data is added")
      })
    }
  }
  // [] because of this empty array => useEffect calls only one time
  return (
    <div className="ProductDetails">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <TextField
                  label=""
                  multiline
                  rows={2}
                  variant="outlined"
                  defaultValue={product.description}
                />
              </td>
                <td>{product.category }</td>
              <td>
                <Button variant="contained" color="primary">
                  Update
                </Button>{" "}
              </td>
              <td><Button variant="contained" color="red">
                Delete
              </Button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <TextField
                label="Tile"
                placeholder="Enter Title"
                variant="outlined"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </td>
            <td>
              <TextField
                label="Price"
                placeholder="Enter Price"
                variant="outlined"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
              />
            </td>
            <td>
              <TextField
                label="Description"
                placeholder="Enter Description"
                variant="outlined"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </td>
             <td>
              <TextField
                label="Category"
                placeholder="Enter Description"
                variant="outlined"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </td>
            <td>
              <Button variant="contained" color="black" onClick={addProducts}>
                Add Product
              </Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default ProductDetails;

