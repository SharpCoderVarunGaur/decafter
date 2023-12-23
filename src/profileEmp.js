import React from "react";
import "./CSS/profileEmp.css";
import logo from "./Images/worker-1.jpg";
import logo2 from "./Images/worker-2.avif";
import logo3 from "./Images/worker-5.avif";
import logo4 from "./Images/worker-img.jpg";

const profileEmp = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-start">
          <div
            className="col-lg-2 col-md-3 col-4 d-md-block d-none checkpoints"
            style={{ padding: 0 }}
          >
            <div className="checkpoint">
              <div className="form-group">
                <div class="form-check cl">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="plumber"
                    name="gender"
                  />
                  <label class="form-check-label" for="plumber">
                    Plumber
                  </label>
                </div>
                <div class="form-check cl">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Electrician"
                    name="gender"
                  />
                  <label class="form-check-label" for="Electrician">
                    ELECTRICIAN
                  </label>
                </div>
                <div class="form-check cl">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="gender"
                    id="car"
                  />
                  <label class="form-check-label" for="car">
                    CAR_MECHANIC
                  </label>
                </div>
                <div class="form-check cl">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="gender"
                    id="builder"
                  />
                  <label class="form-check-label" for="builder">
                    BULDER
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-md-9 col-12">
            {/* <div className='row row-col-lg-4 row-col-sm-3 justify-content-start'>
                    <div className='col-lg-3 col-sm-4 mt-2' >
                       <div className='Cards d-flex justify-content-center'>
                        <div className='CardsView'>
                            <img className='img-sec' src={logo} alt="" />
                        </div>
                       </div>
                    </div>
                    <div className='col-lg-3 col-sm-4  mt-2  ' >
                    <div className='Cards d-flex justify-content-center'>
                        <div className='CardsView'>
                            <img className='img-sec' src={logo} alt="" />
                        </div>
                       </div>
                    </div>
                    <div className='col-lg-3 col-sm-4  mt-2  '>
                    <div className='Cards d-flex justify-content-center'>
                        <div className='CardsView'>
                            <img className='img-sec' src={logo} alt="" />
                        </div>
                       </div>
                    </div>
                    <div className='col-lg-3 col-sm-4  mt-2 ' >
                    <div className='Cards d-flex justify-content-center'>
                        <div className='CardsView'>
                            <img className='img-sec' src={logo} alt="" />
                        </div>
                       </div>
                    </div>
                    <div className='col-lg-3 col-sm-4  mt-2 ' >
                    <div className='Cards d-flex justify-content-center'>
                        <div className='CardsView'>
                            <img className='img-sec' src={logo} alt="" />
                        </div>
                       </div>
                    </div>
                    <div className='col-lg-3 col-sm-4  mt-2 ' >
                    <div className='Cards d-flex justify-content-center'>
                        <div className='CardsView'>
                            <img className='img-sec' src={logo} alt="" />
                        </div>
                       </div>
                    </div>
                    <div className='col-lg-3 col-sm-4  mt-2 ' >
                    <div className='Cards d-flex justify-content-center'>
                        <div className='CardsView'>
                            <img className='img-sec' src={logo} alt="" />
                        </div>
                       </div>
                    </div>
                </div> */}
            <div className="CardsRow">
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logo2} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logo3} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logo2} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logo3} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logo4} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logo3} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logo2} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logo4} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logo2} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logo4} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logo3} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logo2} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default profileEmp;
