import React from "react";
import "./CSS/sign-up.css";
const Signup = () => {
  return (
    <>
      <div className="container-fluid content" style={{ padding: 0 }}>
        <div className="row-col-1">
          <div className="col d-flex justify-content-center">
            <div className="Cards-Container">
              <form action="" className="row">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control db mb-3"
                    name=""
                    id=""
                    placeholder="UserName"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="password"
                    className="form-control mb-3 "
                    name=""
                    id=""
                    placeholder="Password"
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <select
                    name=""
                    id=""
                    className="form-select"
                    aria-label="multiple select example"
                  >
                    <option >Select Role</option>
                    <option value="1">Service-Provider</option>
                    <option value="2">User</option>
               
                  </select>
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control mb-3"
                    name=""
                    id=""
                    placeholder="Contact-details"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="Email"
                    className="form-control mb-3"
                    name=""
                    id=""
                    placeholder="Email-address"
                  />
                </div>
                <button className="btn btn-dark">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
