import React, { useState } from "react";
import "./CSS/sign-up.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addDataUser } from "./store/Slice/UserSlice";
import logo from "./Images/worker-img.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const signUpSchema = Yup.object({
  names: Yup.string()
    .min(2, "Name must more than two characters")
    .max(25, "Name Not more than 25 characters")
    .required("Please enter your name"),
  // password: Yup.string().required("please enter a password"),
  // confirm_password: Yup.string()
  //   .required()
  //   .oneOf([Yup.ref("password"), null], "Password must match"),
  role: Yup.string().required("Please Select the role"),
  // userName: Yup.string()
  //   .email("enter correct userName withe @ and . symbole like email address")
  //   .required("Please enter Your userName"),
  contactNumber: Yup.string()
    .min(10, "Number must more than 10 characters")
    .max(12)
    .required("Name Not more than 12 characters"),
  rating: Yup.string().min(2).required("Please enter your rating"),
  // pinCode: Yup.string().required("Please enter your pinCode"),
  totalExp: Yup.string().required("Please enter your totalExp"),
  specification: Yup.string().required("Please enter your specification"),
});
const initialValues = {
  userName: "",
  password: "",
  image:"",
  names: "",
  contactNumber: "",
  role: "",
  rating: "",
  pinCode: "",
  totalExp: "",
  specification: "",
};

const Signup = () => {
  const navigate=useNavigate()
  
  const [details, setDetails] = useState(false);
  const [imageProfile,setImageProfile]=useState(logo)
  const dispatch=useDispatch();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    // validateOnChange: true,
    // validateOnBlur: true,
    //// By disabling validation onChange and onBlur formik will validate on submit.
    // onSubmit: (values, action) => {
    //   console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
    //   //// to get rid of all the values after submitting the form
    //   action.resetForm();
    // },
  });

  const selectChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "1") {
      setDetails(false);
    } else if (e.target.value === "2") {
      setDetails(true);
    } else {
      setDetails(false);
    }
  };
  const imagePro=(ev)=>{
    if(ev.target.value){
    const file =ev.target.files[0];
    const reader=new FileReader();

    reader.onload=function(event){
      setImageProfile(event.target.result)
      console.log("image",file)
    } 
    reader.readAsDataURL(file);

      // setImageProfile(file)
    }

  }

  const onSubmit = async (e) => {
    e.preventDefault();
   
    // let payload={
    //   userName: formik.values.userName,
    //   password: formik.values.password,
    //   name: formik.values.names,
    //   contactNumber: formik.values.contactNumber,
    //   role: formik.values.role,
    //   rating: formik.values.rating,
    //   pinCode: formik.values.pinCode,
    //   totalExp:formik.values.totalExp,
    //   specification: formik.values.specification,
    // }
    let payload={
      name: formik.values.names,
      image:imageProfile,
      contactNumber: formik.values.contactNumber,
      rating: formik.values.rating,
      totalExp:formik.values.totalExp,
      specification: formik.values.specification,
    }
    console.log("valuess", formik.values);
    // setDataSession([...dataSes,payload])
try{
  if(payload.name!==""){
    // sessionStorage.setItem("RealData",JSON.stringify(dataSes))
    dispatch(addDataUser(payload))
    toast.success("SuccessFully Added",{
      position: "top-center",
      autoClose: 2000,
     hideProgressBar: true,
     theme: "light",

    })
    navigate('/')
  }else{
    alert("please fill details first")
  }
}catch(e){

}


    // try{
    //   let payload={
    //     userName:fieldData.userName,password:fieldData.password,name:fieldData.name,contactNumber:fieldData.contactNumber,role:{
    //       id:fieldData.role
    //     },rating:fieldData.rating,pinCode:fieldData.pinCode,totalExp:fieldData.totalExp,specification:fieldData.specification
    //   }
    //   console.log(payload)
    //   const data=await axios.post("http://localhost:9091/Sign-up",payload)
    //   console.log(data)
    // }catch(e){

    // }
  };
  //  useEffect(()=>{
  //    console.log(fieldData)
  //  },[fieldData])
  return (
    <>
      <div className="content">
        <div className="container-fluid " style={{ padding: 0 }}>
          <div className="row ">
            <div className="col  d-flex   justify-content-center">
             
          
              <div className="Cards-Container">
                <form onSubmit={formik.handleSubmit} className="row">

                 <div  className=" col d-flex flex-column align-items-center ">
                   <div className="img-clas mb-2 ">
                    <img name="image" id="image" className="img-sec1" src={imageProfile} alt={logo}/>
                   </div>
                   
                  <input 
                  type="file"
                    className="form-control custom-file-input"
                    onChange={imagePro}
                  />
                 </div>
                  {/* <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control db mb-2 bo"
                      name="userName"
                      id="userName"
                      placeholder="UserName"
                      key="1"
                      value={formik.values.userName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.userName && formik.errors.userName ? (
                      <p className="form-error">{formik.errors.userName}</p>
                    ) : null}
                  </div>
                  <div className="col-md-12">
                    <input
                      type="password"
                      className="form-control mb-3  bo"
                      name="password"
                      id="password"
                      placeholder="Password"
                      key="2"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <p className="form-error bg-red">
                        {formik.errors.password}
                      </p>
                    ) : null}
                  </div> */}
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control mb-3 bo"
                      name="names"
                      id="names"
                      placeholder="Name"
                      key="3"
                      value={formik.values.names}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.names && formik.errors.names ? (
                      <p className="form-error">{formik.errors.names}</p>
                    ) : null}
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control mb-3 bo"
                      name="contactNumber"
                      id="contactNumber"
                      placeholder="Contact-details"
                      key="4"
                      value={formik.values.contactNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.contactNumber &&
                    formik.errors.contactNumber ? (
                      <p className="form-error">
                        {formik.errors.contactNumber}
                      </p>
                    ) : null}
                  </div>
                  <div className="col-md-12 mb-3">
                    <select
                      name="role"
                      id="role"
                      className="form-select bo"
                      aria-label="multiple select example"
                      key="5"
                      // value={fieldData.role}
                      // onChange={(ev)=>{
                      //   onChangeForm(ev)
                      //   selectChange(ev)
                      // }}
                      value={formik.values.role}
                      onChange={(ev) => {
                        formik.handleChange(ev);
                        selectChange(ev);
                      }}
                      onBlur={formik.handleBlur}
                    >
                      <option label="Select-Role"></option>
                      <option value={1} label="Service-Provider"></option>
                      <option value={2} label="User"></option>
                    </select>
                  </div>

                  {formik.values.role === "1" ? (
                    <>
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control mb-3 bo"
                          name="rating"
                          id="rating"
                          placeholder="Rating"
                          key="6"
                          value={formik.values.rating}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.rating && formik.errors.rating ? (
                          <p className="form-error">{formik.errors.rating}</p>
                        ) : null}
                      </div>
                      {/* <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control mb-3 bo"
                          name="pinCode"
                          id="pinCode"
                          placeholder="Pin-Code"
                          key="7"
                          value={formik.values.pinCode}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.pinCode && formik.errors.pinCode ? (
                          <p className="form-error">{formik.errors.pinCode}</p>
                        ) : null}
                      </div> */}
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control mb-3 bo"
                          name="totalExp"
                          id="totalExp"
                          placeholder="total-Exp"
                          key="8"
                          value={formik.values.totalExp}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.totalExp && formik.errors.totalExp ? (
                          <p className="form-error">{formik.errors.totalExp}</p>
                        ) : null}
                      </div>
                      <div className="col-md-12 mb-2">
                      <select
                      name="specification"
                      id="specification"
                      className="form-select bo"
                      aria-label="multiple select example"
                      key="9"
                      // value={fieldData.role}
                      // onChange={(ev)=>{
                      //   onChangeForm(ev)
                      //   selectChange(ev)
                      // }}
                      value={formik.values.specification}
                      onChange={(ev) => {
                        formik.handleChange(ev);
                      }}
                      onBlur={formik.handleBlur}
                    >
                      <option label="Select-Specification"></option>
                      <option value={1} label="Plumber"></option>
                      <option value={2} label="Electricin"></option>
                      <option value={3} label="Car-Mechanic"></option>
                      <option value={4} label="Builder"></option>
                      <option value={5} label="Painter"></option>
                      <option value={6} label="House-Appliances"></option>
                    </select>
                     
                      </div>
                    </>
                  ) : null}
                  <button
                    disabled={
                      formik.isValid === true || details === true ? false : true
                    }
                    className="btn btn-dark"
                    onClick={(ev) => {
                      formik.handleSubmit(ev);
                      onSubmit(ev);
                    }}
                    type="Submit"
                  >
                  {'Submit'}
                  </button>
             

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
