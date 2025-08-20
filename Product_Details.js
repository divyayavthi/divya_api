import {useEffect, useState} from "react";
import {TextField, Button,} from "@mui/material";
const ProductDetails = () => {
  const [products, setproducts] = useState([]);
  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newImage, setNewImage] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setproducts(result);
      });
  },[]);
  function addProducts() {
    const id = newId.trim();
    const title = newTitle.trim();
    const price = newPrice.trim();
    const description = newDescription.trim();
    const category = newCategory.trim();
    const image = newImage.trim();
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        id,title,price,description,category,image,}),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setproducts([...products, data]);
        console.log("Data added");
      });
  }
  function onChangeHandler(id, key, value) {
    setproducts((products) => {
      return products.map((product) => {
        return product.id === id ? { ...product, [key]: value } : product;
      });
    });
  }
  function updateProduct(id) {
    const product = products.find((product) => product.id === id);
    const updatedProduct = {
      id: id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
    };
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {});
  }
  function deleteProduct(id) {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setproducts((products) => {
          return products.filter((products) => products.id !== id);
        });
        console.log("products deleted successfully");
      });
  }
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
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <TextField
                  label="Description"
                  multiline
                  rows={2}
                  variant="outlined"
                  defaultValue={product.description}
                  onChange={(e) =>onChangeHandler(product.id, "description", e.target.value)}/>
              </td>
              <td>{product.category}</td>
              <td>
                <img
                  alt="product image"
                  src={product.image}
                  height={150}
                  width={100}
                />
              </td>

              <td>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => updateProduct(product.id)}
                >
                  Update
                </Button>{" "}
              </td>
              <td>
                <Button
                  variant="contained"
                  color="red"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <TextField
                label="Id"
                placeholder="Enter Id"
                variant="outlined"
                value={newId}
                onChange={(e) => setNewId(e.target.value)}
              />
            </td>
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
                placeholder="Enter Category "
                variant="outlined"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </td>
            <td>
              <TextField
                type="file"
                variant="outlined"
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
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
