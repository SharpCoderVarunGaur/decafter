import React from "react";
import "./CSS/profileEmp.css";
import logo from "./Images/worker-1.jpg";

const profileEmp = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-start">
          <div className="col-lg-2 col-md-3 col-4 d-md-block d-none checkpoints" style={{padding:0}}>
            <div className="checkpoint">
              <div class="form-check cl">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  
                />
                <label class="form-check-label" for="flexCheckDefault">
                 Plumber
                </label>
              </div>
              <div class="form-check cl">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  
                />
                <label class="form-check-label" for="flexCheckChecked">
                  ELECTRICIAN
                </label>
              </div>
              <div class="form-check cl" >
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                 CAR_MECHANIC
                </label>
              </div>
              <div class="form-check cl">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                BULDER
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-md-9 col-8">
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
              <div className="Cards d-flex  ">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />

                  <div className="description">
                    <h5 className=" p-1" style={{margin:0}}>{`Name : Varun Gaur`}</h5>
                    <p className="p-1"  style={{margin:0}}>{`Rating : 3.5`} </p>
                    <p className="p-1"  style={{margin:0}}>{`Total-Exp : 10years`} </p>
                    <p className="p-1"  style={{margin:0}}>{`Specification : React-Developer`} </p>
                  
                  </div>
                </div>
              </div>
              <div className="Cards d-flex  ">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />
                </div>
              </div>
              <div className="Cards d-flex  ">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />
                </div>
              </div>
              <div className="Cards d-flex  ">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />
                </div>
              </div>
              <div className="Cards d-flex   ">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />
                </div>
              </div>
              <div className="Cards d-flex  ">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />
                </div>
              </div>
              <div className="Cards d-flex  ">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />
                </div>
              </div>
              <div className="Cards d-flex  ">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />
                </div>
              </div>
              <div className="Cards d-flex  ">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />
                </div>
              </div>
              <div className="Cards d-flex ">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />
                </div>
              </div>
              <div className="Cards d-flex ">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />
                </div>
              </div>
              <div className="Cards d-flex  ">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />
                </div>
              </div>
              <div className="Cards d-flex  ">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />
                </div>
              </div>
              <div className="Cards d-flex  ">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />
                </div>
              </div>
              <div className="Cards d-flex  ">
                <div className="CardsView">
                  <img className="img-sec" src={logo} alt="" />
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
