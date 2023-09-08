import React, { useEffect, useState } from "react";
import "../Css/allUsers.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../ReduxToolkit/Reducer";
import { v4 } from "uuid";
function allUsers() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const useData = useSelector((state) => state.myReducer);

  const deleteParticularUser = (index) => {
    dispatch(deleteUser(index));
  };

  // Initialize the result array with all data
  const [result, setResult] = useState(useData);

  useEffect(() => {
    // Update the result array based on the search input
    const filteredData = useData.filter((obj) => {
      return (
        obj?.Name?.toLowerCase()?.includes(search?.toLowerCase()) ||
        obj?.LastName?.toLowerCase()?.includes(search?.toLowerCase()) ||
        obj?.Email?.toLowerCase()?.includes(search?.toLowerCase()) ||
        obj?.Password?.toLowerCase()?.includes(search?.toLowerCase())
      );
    });

    setResult(filteredData);
  }, [search, useData]); // Listen for changes in 'search' or 'useData'

  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink to={"/createUser"} className="navbar-brand">
            Create Users
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto">
              <input
                className="form-control me-2"
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="table">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {result.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item?.Name}</td>
                        <td>{item?.LastName}</td>
                        <td>{item?.Email}</td>
                        <td>{item?.Password}</td>
                        <td>
                          <button
                            type="button"
                            onClick={() => navigate(`updateUser/${item.id}`)}
                            className="btn btn-success"
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            onClick={() => deleteParticularUser(index)}
                            className="btn btn-warning"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default allUsers;
