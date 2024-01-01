import React, { useEffect, useState } from 'react'
import "./CSS/EmpDes.css"
import logo from "./Images/worker-5.avif";
import logoFe from "./Images/contentFemale.webp"
import boy from './Images/boyContetn.avif'
import boy2 from './Images/boy2con.jpg'
import boy3 from './Images/boy3.jpeg'
import logo4 from "./Images/worker-img.jpg";
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
const EmpDes = () => {
    const param=useParams();
    const [name,setName]=useState("")
    const [descData,setDescData]=useState([]);
    const[data2,setData2]=useState([]);
    // const selector=useSelector()
    const data=useSelector((state)=>{
       return state.workers;
    })
    const {id}=param

    // const apiCall=async()=>{
    // //  const data= await axios.get("http://localhost:9091/Role")
    // //  console.log("data",data.data)
    // console.log("data",data)
    //   setDescData(Array.isArray(data)? data :[])

    // }

    useEffect(()=>{
      console.log("data",data)
      setDescData(Array.isArray(data)? data :[])
      // apiCall()
      console.log("id",id) 
      if(id==="1"){
          setName("Plumber")
      }
      else if(id==="2"){
            setName("Electricin")
      }else if(id==="3"){
          setName("Car-Mechanic")
      }else if(id==="4"){
          setName("Builder")
      }else if(id==="5"){
          setName("Painter")
      }else if(id==="6"){
          setName("House-Appliances")
      }     
      setData2(descData.filter((d,i)=>d.specification===id))
    },[descData,id,data])
    
  return (
   <>
    
    <div className='container-fluid'>
        <div className='row '>
            <div className='col-12 d-flex justify-content-center'>
                 <h1>{name}</h1>
            </div>
            {data2.length>0 && data2.map((da)=>{
          return (
            <>
            <div className='col-12'>

            <div className='Cards-individual mb-4'>
                 <div className='row flex-sm-row flex-column' >
                    <div className='col-3 d-flex img-he'>
                        <img src={da.image} className='Img-des' alt={logo4} />
                    </div>
                    <div className='col-sm-4'>
                    <div className="">
                    <h5
                      className="p-sm-1"
                      style={{ margin: 0  ,padding:0}}
                    >{`Name : ${da.name}`}</h5>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Rating : ${da.rating}`}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Total-Exp : ${da.totalExp}`}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                    {id ==='1'? `Specification : Plumber` : id==='2' ? `Specification : Electricin`: id==='3' ? `Specification : Car-Mechanic` :id==='4' ? `Specification : Builder`: id==='5' ?`Specification : Painter`:`Specification : House-Appliances`}
                    </p>
                  </div>
                    </div>
                 </div>

            </div>
         
           
            </div>  
            </>
          )
         }) }
            <div className='col-12'>
            <div className='Cards-individual mb-4'>
                 <div className='row flex-sm-row ' >
                    <div className='col-sm-1 col-12 d-flex img-he'>
                        <img src={logo} className='Img-des' alt="" />
                    </div>
                    <div className='col-sm-4'>
                    <div className="">
                    <h5
                      className="p-sm-1 mt-sm-4"
                      style={{ margin: 0  ,padding:0}}
                    >{`Name : Hari Singh`}</h5>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Total-Exp : 13 years`}{" "}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                    {id ==='1'? `Specification : Plumber` : id==='2' ? `Specification : Electricin`: id==='3' ? `Specification : Car-Mechanic` :id==='4' ? `Specification : Builder`: id==='5' ?`Specification : Painter`:`Specification : House-Appliances`}
                    </p>
                  </div>
                    </div>
                 </div>

            </div>
            <div className='Cards-individual mb-4'>
                 <div className='row flex-sm-row flex-column align-align-items-lg-start' >
                    <div className='col-sm-1 col-12  d-flex img-he' >
                        <img src={logoFe} className='Img-des'img-he alt="" />
                    </div>
                    <div className='col-sm-4'>
                    <div className="">
                    <h5
                      className="p-sm-1 mt-sm-4"
                      style={{ margin: 0  ,padding:0}}
                    >{`Name : Preeti Kumari`}</h5>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Rating : 3.7`}{" "}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Total-Exp : 9 years`}{" "}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                    {id ==='1'? `Specification : Plumber` : id==='2' ? `Specification : Electricin`: id==='3' ? `Specification : Car-Mechanic` :id==='4' ? `Specification : Builder`: id==='5' ?`Specification : Painter`:`Specification : House-Appliances`}
                    </p>
                  </div>
                    </div>
                 </div>

            </div>
            <div className='Cards-individual mb-4'>
                 <div className='row flex-sm-row flex-column' >
                    <div className='col-sm-1 col-12 d-flex img-he'>
                        <img src={boy2} className='Img-des ' alt="" />
                    </div>
                    <div className='col-sm-4'>
                    <div className="">
                    <h5
                      className="p-sm-1 mt-sm-4"
                      style={{ margin: 0  ,padding:0}}
                    >{`Name : Suresh Tomar`}</h5>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Rating : 3.5`}{" "}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Total-Exp : 7 years`}{" "}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                    {id ==='1'? `Specification : Plumber` : id==='2' ? `Specification : Electricin`: id==='3' ? `Specification : Car-Mechanic` :id==='4' ? `Specification : Builder`: id==='5' ?`Specification : Painter`:`Specification : House-Appliances`}
                    </p>
                  </div>
                    </div>
                 </div>

            </div>
            <div className='Cards-individual mb-4'>
                 <div className='row flex-sm-row flex-column' >
                    <div className='col-sm-1 col-12 d-flex img-he'>
                        <img src={boy3} className='Img-des ' alt="" />
                    </div>
                    <div className='col-sm-4'>
                    <div className="">
                    <h5
                      className="p-sm-1 mt-sm-4"
                      style={{ margin: 0  ,padding:0}}
                    >{`Name : Ankit Singh`}</h5>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Rating : 3.2`}{" "}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Total-Exp : 9 years`}{" "}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                    {id ==='1'? `Specification : Plumber` : id==='2' ? `Specification : Electricin`: id==='3' ? `Specification : Car-Mechanic` :id==='4' ? `Specification : Builder`: id==='5' ?`Specification : Painter`:`Specification : House-Appliances`}
                    </p>
                  </div>
                    </div>
                 </div>

            </div>
            <div className='Cards-individual mb-4'>
                 <div className='row flex-sm-row flex-column' >
                    <div className='col-sm-1 col-12d-flex img-he'>
                        <img src={boy} className='Img-des ' alt="" />
                    </div>
                    <div className='col-sm-4'>
                    <div className="">
                    <h5
                      className="p-sm-1 mt-sm-4"
                      style={{ margin: 0  ,padding:0}}
                    >{`Name : Monish Sahu`}</h5>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Rating : 4.5`}{" "}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {`Total-Exp : 1 years`}{" "}
                    </p>
                    <p className="p-sm-1" style={{ margin: 0  ,padding:0}}>
                      {id ==='1'? `Specification : Plumber` : id==='2' ? `Specification : Electricin`: id==='3' ? `Specification : Car-Mechanic` :id==='4' ? `Specification : Builder`: id==='5' ?`Specification : Painter`:`Specification : House-Appliances`}
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
