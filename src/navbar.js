import React from "react";
import "./CSS/navbar.css";

const Navbar = () => {

  return (
    <>
      <header>
        <div className="container-fluid">
          <div
            className="cat row navbars justify-content-between align-items-start"
            style={{ padding: 0 }}
          >
            <div className="col-xl-1 col-lg-2 d-flex justify-content-xl-center ">
              <div className="logo"></div>
            </div>
            <div className="col-xl-7 col-lg-9 me-5 mt-4">
              <div className="row">
                <div
                  className="d-flex  justify-content-around"
                  style={{ padding: 0 }}
                >
               <p className="">PLUMBER</p>
                  <p>ELECTRICIAN</p>
                  <p>CAR-MECAHNIC</p>
                  <p>BUILDER</p>
                  <p>PAINTER</p>
                  <p>HOUSE-APPLIANCES</p>
                </div>
              </div>
            </div>

            {/* <div className='col-3 mt-2'>
            <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
            </div> */}
            {/* <div className='col-2  borders' >
        <div className='row justify-content-center'>
          <div className='col-2 borders'></div>
        </div>
      </div> */}
          </div>

          <div
            className="catToggle row navbars justify-content-between align-items-start"
            style={{ padding: 0 }}
          >
            <div className="col-4 order-1 d-flex  justify-content-end mt-1">
              <div className="logo"></div>
            </div>
            <div className="col-2  btSty">
              <button
                class="btn borders"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
              >
                <i className="fa-solid fa-bars " style={{ color: "#aba6a6" }} />
              </button>
            </div>
            <div class="collapse order-2" id="navbarSupportedContent">
              <div className="row justify-content-center">
                <div className="col-12">
                  <ul class="list-group list-group-flush" style={{backgroundColor:"none"}}>
                    <li class="list-group-item catCOn catConBorder mb-2">MEN</li>
                    <li class="list-group-item catCOn catConBorder mb-2">WOMEN</li>
                    <li class="list-group-item catCOn catConBorder mb-2">KIDS</li>
                    <li class="list-group-item catCOn  catConBorder mb-2">HOME & LIVING</li>
                    <li class="list-group-item catCOn  catConBorder"> STUDIO</li>
                  </ul>
                </div>
                {/* <div className="col-12 catCOn mt-3" style={{ padding: 0 }}>
                  <p className="dataCat">MEN</p>
                </div>
                <div className="col-12 catCOn mt-3" style={{ padding: 0 }}>
                  <p className="dataCat">WOMEN</p>
                </div>
                <div
                  className="col-12 mt-3"
                  style={{ padding: 0, marginLeft: "30px" }}
                >
                  KIDS
                </div>
                <div
                  className="col-12 mt-3"
                  style={{ padding: 0, marginLeft: "30px" }}
                >
                  HOME & LIVING
                </div>
                <div
                  className="col-12 mt-3"
                  style={{ padding: 0, marginLeft: "30px" }}
                >
                  BEAUTY
                </div>
                <div
                  className="col-12 mt-3"
                  style={{ padding: 0, marginLeft: "30px" }}
                >
                  STUDIO
                </div> */}
                <div className="col-12 mt-2">
                  {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                </div>
              </div>
            </div>

            {/* <div className='col-xl-4 col-lg-3 col-3 borders'></div>
      <div className='col-xl-3 col-4  borders' >
        <div className='row justify-content-center'>
          <div className='col-2 borders'></div>
        </div>
      </div> */}
          </div>
        </div>
      </header>


      
    </>
  );
};

export default Navbar;
