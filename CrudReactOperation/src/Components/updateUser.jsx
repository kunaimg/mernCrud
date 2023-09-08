import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUserWork } from "../ReduxToolkit/Reducer";
import { v4 } from "uuid";

function updateUser() {
  const dispatch = useDispatch();

  const useData = useSelector((state) => state.myReducer);
  const { id } = useParams();
  const formDetail = {
    Name: "",
    LastName: "",
    Email: "",
    Password: "",
    id: "",
  };

  const [data, setData] = useState(formDetail);
  useEffect(() => {
    let dataa = useData.filter((item) => item.id === id);
    setData(dataa[0]);
  }, []);
  const navigate = useNavigate();

  const formDetails = (e) => {
    setData({ ...data, [e.target.name]: e.target.value, id: `${id}` });
  };

  const addNewUser = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (
      data.Name.length < 3 ||
      data.LastName.length < 3 ||
      data.Email.length < 3 ||
      data.Password.length < 3
    ) {
      alert("something went wrong");
    } else {
      dispatch(updateUserWork(data));
      navigate("/");
    }
  };

  return (
    <div>
      <div className="form">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <h1>Update User</h1>

              <form onSubmit={addNewUser}>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Name"
                    name="Name"
                    value={data?.Name}
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
                    name="LastName"
                    value={data?.LastName}
                    onChange={formDetails}
                    className="form-control"
                    id="exampleInputPassword2"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={formDetails}
                    name="Email"
                    value={data?.Email}
                    className="form-control"
                    id="exampleInputPassword3"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={formDetails}
                    name="Password"
                    value={data?.Password}
                    className="form-control"
                    id="exampleInputPassword4"
                  />
                </div>
                <button type="submit" className="btn btn-primary submit">
                  Update User
                </button>
                <button
                  onClick={() => navigate("/")}
                  type="submit"
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

export default updateUser;
