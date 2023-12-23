import React, { useEffect, useState } from 'react'
import "./CSS/EmpDes.css"
import logo from "./Images/worker-5.avif";
import { useParams } from 'react-router-dom';
const EmpDes = () => {
    const param=useParams();
    const [name,setName]=useState("")
    const {id}=param

    useEffect(()=>{
        console.log("id",id)
        if(id===1){
            setName("Plumber")
        }
        else if(id===2){
              setName("Electricin")
        }else if(id===3){
            setName("Car-Mechanic")
        }else if(id===4){
            setName("Builder")
        }else if(id===5){
            setName("Painter")
        }else if(id===6){
            setName("House-Appliances")
        }

    },[id])
  return (
   <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
                 <h1>{name}</h1>
            </div>

            <div className='col-12'>
            <div className='Cards-individual mb-4'>
                 <div className='row flex-sm-row flex-column' >
                    <div className='col-3 d-flex'>
                        <img src={logo} className='Img-des' alt="" />
                    </div>
                    <div className='col-9'>
                    <div className="">
                    <h5
                      className="p-sm-1"
                      style={{ margin: 0  ,padding:0}}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                    </div>
                 </div>

            </div>
            <div className='Cards-individual mb-4'>
                 <div className='row flex-sm-row flex-column' >
                    <div className='col-3 d-flex'>
                        <img src={logo} className='Img-des' alt="" />
                    </div>
                    <div className='col-9'>
                    <div className="">
                    <h5
                      className="p-sm-1"
                      style={{ margin: 0  ,padding:0}}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Specification : React-Developer`}{" "}
                    </p>
                  </div>
                    </div>
                 </div>

            </div>
            <div className='Cards-individual mb-4'>
                 <div className='row flex-sm-row flex-column' >
                    <div className='col-3 d-flex'>
                        <img src={logo} className='Img-des' alt="" />
                    </div>
                    <div className='col-9'>
                    <div className="">
                    <h5
                      className="p-sm-1"
                      style={{ margin: 0  ,padding:0}}
                    >{`Name : Varun Gaur`}</h5>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Total-Exp : 10years`}{" "}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
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
  )
}

export default EmpDes
