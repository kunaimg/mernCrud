import React, { useState } from "react";
import "../Css/createUser.css";
import { useNavigate } from "react-router-dom";
import { addUser } from "../ReduxToolkit/Reducer";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

function createUser() {
  const dispatch = useDispatch();
  const formDetail = {
    Name: "",
    LastName: "",
    Email: "",
    Password: "",
    id: "",
  };
  const [Detail, setDetail] = useState(formDetail);

  const navigate = useNavigate();

  const formDetails = (e) => {
    setDetail({ ...Detail, [e.target.name]: e.target.value, id: `${v4()}` });
  };

  const addNewUser = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (
      Detail.Name.length < 3 ||
      Detail.LastName.length < 3 ||
      Detail.Email.length < 3 ||
      Detail.Password.length < 3
    ) {
      alert("something went wrong");
    } else {
      dispatch(addUser(Detail));
      navigate("/");
    }
  };

  return (
    <div>
      <div className="form">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <h1>Create User</h1>
              <form onSubmit={addNewUser}>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="Name"
                    onChange={formDetails}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="LastName"
                    required
                    name="LastName"
                    onChange={formDetails}
                    className="form-control"
                    id="exampleInputPassword2"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="Email"
                    onChange={formDetails}
                    className="form-control"
                    id="exampleInputPassword3"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="Password"
                    onChange={formDetails}
                    className="form-control"
                    id="exampleInputPassword4"
                  />
                </div>
                <button type="submit" className="btn btn-primary submit">
                  Create User
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="btn btn-primary"
                >
                  Go Back
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default createUser;
