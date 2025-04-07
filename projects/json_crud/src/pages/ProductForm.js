import React, { useState } from "react";

const ProductForm = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
console.log(props);
console.log(props.product?.id,"sasa");

  function handleSubmit(event) {
    event.preventDefault();

    // read from data
    const formData = new FormData(event.target);

    // covert fromData to object
    const product = Object.fromEntries(formData.entries());

    // form validation
    if (
      !product.name ||
      !product.brand ||
      !product.category ||
      !product.price
    ) {
      setErrorMessage(
        <div className="alert alert-warning" role="alert">
          Please Provide all the the required
        </div>
      );

      return;
    }

    if (props.product?.id) {
      // update product
      fetch(`http://localhost:3001/products/${props.product?.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not OK");
          }
          return res.json();
        })
        .then((data) => props.showList())
        .catch((err) => console.error(err));
    } else {
      // create product
      // create a new product
      product.createdAt = new Date().toISOString().slice(0, 10);

      fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not OK");
          }
          return res.json();
        })
        .then((data) => props.showList())
        .catch((err) => console.error(err));
    }
  }
  return (
    <>
      <h2 className="text-center mb-3">
        {props.product?.id ? "Edit Product" : "Create New Product"}
      </h2>

      <div className="row">
        <div className="col-lg-6 mx-auto">
          {errorMessage}
          <form onSubmit={(event) => handleSubmit(event)}>
            {props.product?.id && (
              <div className="row mb-3">
                <lable className="col-sm-4 col-form-label">Product ID</lable>
                <div className="col-sm-8">
                  <input
                    readOnly
                    className="form-control-plaintext"
                    type="text"
                    name="id"
                    defaultValue={props.product?.id}
                  />
                </div>
              </div>
            )}
            <div className="row mb-3">
              <lable className="col-sm-4 col-form-label">Name</lable>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  defaultValue={props.product?.name}
                />
              </div>
            </div>
            <div className="row mb-3">
              <lable className="col-sm-4 col-form-label">Brand</lable>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  name="brand"
                  defaultValue={props.product?.brand}
                />
              </div>
            </div>
            <div className="row mb-3">
              <lable className="col-sm-4 col-form-label">Category</lable>
              <div className="col-sm-8">
                <select
                  className="form-select"
                  name="category"
                  defaultValue={props.product?.category}
                >
                  <option value="">Select Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Phone">Phone</option>
                  <option value="Gazets">Gazets</option>
                  <option value="Shoes">Shoes</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <lable className="col-sm-4 col-form-label">Price</lable>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  name="price"
                  defaultValue={props.product?.price}
                />
              </div>
            </div>
            <div className="row mb-3">
              <lable className="col-sm-4 col-form-label">Description</lable>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  defaultValue={props.product?.description}
                />
              </div>
            </div>
            <div className="row">
              <div className="offset-sm-4 col-sm-4 d-grid">
                <button type="submit" className="btn btn-primary btn-sm me-3">
                  Save
                </button>
              </div>
              <div className="col-sm-4 d-grid ">
                <button
                  onClick={() => props.showList()}
                  type="button"
                  className="btn btn-secondary me-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
