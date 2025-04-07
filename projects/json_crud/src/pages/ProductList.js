import React, { useEffect, useState } from "react";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  function fetchProducts() {
    fetch("http://localhost:3001/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => fetchProducts(), []);
  function deleteProduct(id) {
    fetch(`http://localhost:3001/products/` + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => fetchProducts());

  }
  return (
    <>
      <h2 className="text-center mb-3">List of Products</h2>
      <button
        onClick={() => props.showForm()}
        type="button"
        className="btn btn-primary me-2"
      >
        Create
      </button>
      <button
        onClick={() => fetchProducts()}
        type="button"
        className="btn btn-outline-primary me-2"
      >
        Refresh
      </button>
      <table className="table ">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Branch</th>
            <th scope="col">Product Category</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Created At</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.createdAt}</td>
                <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                  <button
                    onClick={() => props.showForm(product)}
                    type="button"
                    className="btn btn-primary btn-sm me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    type="button"
                    className="btn btn-primary btn-sm me-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
