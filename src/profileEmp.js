import React, { useEffect, useState } from "react";
import "./CSS/profileEmp.css";
import logo from "./Images/worker-1.jpg";
import logo2 from "./Images/worker-2.avif";
import logo3 from "./Images/worker-5.avif";
import logo4 from "./Images/worker-img.jpg";
import logoFe from "./Images/contentFemale.webp"
import boy from './Images/boyContetn.avif'
import boy2 from './Images/boy2con.jpg'
import boy3 from './Images/boy3.jpeg'
import boy4 from './Images/boy4.jpeg'
import { useSelector } from "react-redux";

const ProfileEmp = () => {
const [realData,setRealData]=useState([])
  const data= useSelector((state)=>{
       return state.workers;
  })

useEffect(()=>{
  setRealData(Array.isArray(data)? data :[])
},[data])  


  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-start">
          <div
            className="col-lg-2 col-md-3 col-4 d-md-block d-none checkpoints"
            style={{ padding: 0 }}
          >
            {/* <div className="checkpoint">
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
            </div> */}
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
            {realData && realData.map((d)=>{
              return(

                <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={d.image} alt={logo4} />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : ${d.name}`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : ${d.rating}`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : ${d.totalExp}`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                    {d.specification ==='1'? `Specification : Plumber` : d.specification==='2' ? `Specification : Electricin`: d.specification==='3' ? `Specification : Car-Mechanic` :d.specification==='4' ? `Specification : Builder`: d.specification==='5' ?`Specification : Painter`:`Specification : House-Appliances`}
                    </p>
                  </div>
                </div>
              </div>
              )
            }).reverse()}
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
                      {`Total-Exp : 2 years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logoFe} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Harshita Mishra`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 5.0`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 2 years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : Backend-Developer`}
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
                    >{`Name : Sushant Gupta`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 2.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 1 years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : Data-base Developer`}
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
                    >{`Name : Sharad Bhardwaj`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 3years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : Backend-Developer`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={boy2} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Utsav Gaur`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 4.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : Quality Analyst`}
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
                    >{`Name : Vinit Chauhan`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 9years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : Ios Developer`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={boy3} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Pranjal Jaiswal`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 8 years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : React-Developer`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={boy} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Mohit Dubey`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : Android-Developer`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={boy4} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Manoj Kumar Sharma`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 5 years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : Larvel Developer`}
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
                    >{`Name : Ankur Sharma`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10 years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : Angular Developer`}
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
                    >{`Name : Anubhav Singh`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 7 years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : Php Developer`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={logoFe} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Manisha Sharma`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 4.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 4 years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : Data Analyst`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={boy} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Anirudh Chaudhary`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10 years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : Node.Js-Developer`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={boy2} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Alok Chauhan`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 5.5`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 10 years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : Android-Developer`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Cards d-flex">
                <div className="CardsView">
                  <img className="img-sec" src={boy3} alt="" />

                  <div className="description">
                    <h5
                      className=" p-1"
                      style={{ margin: 0 }}
                    >{`Name : Manish kumar`}</h5>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Rating : 5.0`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Total-Exp : 7 years`}{" "}
                    </p>
                    <p className="p-1" style={{ margin: 0 }}>
                      {`Specification : Android-Developer`}
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

export default ProfileEmp;
