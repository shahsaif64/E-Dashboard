import React, { useState,useEffect } from "react";
import rImg from '../assets/img.png'
import {useNavigate} from 'react-router-dom';


const Signup = () => {
  const [credentials, setCredentials] = useState({ fname: "", password: "", email: "", cpassword: "" });
  const navigate= useNavigate();
  

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      navigate("/");
    }

    // eslint-disable-next-line
  }, [])
  
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  
  const { fname, password, email, cpassword } = credentials;


  const handleSubmit =async (e) => {
    e.preventDefault();
    if (cpassword === password) {
          let response =await fetch('http://localhost:4505/api/auth/signup', {
            method: 'POST',
            headers:{"Content-type":"application/json"},
            body: JSON.stringify({fname,email,password})
          })
          let data=await response.json();
          console.log(data.success);
          if(data.success){
            console.log("you can now login");
            navigate("/login")
          }

    } else {
      console.log("password does not match");
    }
  }



  return (
    <>
      <section className="reg">
        <div className="form_wrapper row ">
          <div className="register col-md-6 col-sm-12 order-md-1 order-2 my-4">
            <h2 className="mb-5">Sign Up</h2>
            <div className="d-flex justify-content-center">

              <form onSubmit={handleSubmit}>
                <div className="mb-3 d-flex align-items-center mx-3">
                  <i className="fa-solid fa-user"></i>
                  <input type="text" required placeholder="Enter your name" name="fname" onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3 d-flex align-items-center mx-3">
                  <i className="fa-solid fa-envelope"></i>
                  <input type="email" required placeholder="Enter Your email" name="email" onChange={handleChange} className="form-control" />
                </div>

                <div className="mb-3 d-flex align-items-center mx-3">
                  <i className="fa-solid fa-lock"></i>
                  <input type="password" required placeholder="Enter password" name="password" onChange={handleChange} className="form-control" />
                </div>

                <div className="mb-3 d-flex align-items-center mx-3">
                  <i className="fa-solid fa-key"></i>
                  <input type="password" required placeholder="Confirm password" name="cpassword" onChange={handleChange} className="form-control" />
                </div>

                <div className="mb-3 form-check mx-5">
                  <input type="checkbox" required className="form-check-input" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Agree to our <a href="/">Terms and condition</a> </label>
                </div>

                <button type="submit" className="btn_design">Submit</button>
              </form>
            </div>
          </div>
          <div className="img_png col-md-6 col-sm-10 order-md-2 order-1">
            <div className="Sign_img">
              <img src={rImg} className="img-fluid" alt="png" />
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Signup;
