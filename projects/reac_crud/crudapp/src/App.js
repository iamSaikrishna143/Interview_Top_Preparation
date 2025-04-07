import { useEffect, useState } from "react";
import "./App.css";
import { EmployeeData } from "./EmployeeData";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setData(EmployeeData);
  }, []);

  const handleSave = (e) => {
    let error = "";
    if (name === "") {
      error += `Name is required, `;
    }
    if (address === "") {
      error += `Address is required, `;
    }
    if (age === "") {
      error += `Age is required. `;
    }
    if (error === "") {
      e.preventDefault();
      const dt = [...data];
      const newObject = {
        id: EmployeeData.length + 1,
        name: name,
        address: address,
        age: age,
      };
      dt.push(newObject);
      setData(dt);
      handleClear();
    } else {
      alert(error);
    }
  };
  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };
  const handleEdit = (id) => {
    const dt = data.filter((item) => item.id === id);
    if (dt !== undefined) {
      setIsUpdate(true);
      setId(id);
      setName(dt[0].name);
      setAddress(dt[0].address);
      setAge(dt[0].age);
    }
  };
  const handleUpdate = () => {
    const index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);
    const dt = [...data];
    dt[index].name = name;
    dt[index].address = address;
    dt[index].age = age;
    setData(dt);
    handleClear();
  };
  const handleClear = () => {
    setId(id);
    setName("");
    setAddress("");
    setAge("");
    setIsUpdate(false);
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 10px",
          gap: "10px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <label>First Name : </label>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label>Address : </label>
          <input
            type="text"
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>
        <div>
          <label>Age : </label>
          <input
            type="text"
            placeholder="Enter age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>
        <div>
          {!isUpdate ? (
            <button className="btn btn-primary" onClick={(e) => handleSave(e)}>
              Save
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => handleUpdate()}>
              Update
            </button>
          )}
          &nbsp;
          <button className="btn btn-danger" onClick={() => handleClear()}>
            Clear
          </button>
        </div>
      </div>

      <table className="table tabele-hover">
        <thead>
          <tr>
            <td>Sl No.</td>
            {/* <td>Id</td> */}
            <td>Name</td>
            <td>Address</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                {/* <td>{item.id}</td> */}
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.age}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
