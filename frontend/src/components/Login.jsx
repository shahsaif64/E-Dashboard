import React, {useState, useEffect} from 'react'
import img2 from '../assets/img2.jpg';
import {useNavigate} from 'react-router-dom';

const Login = () => {
   const [email, setEmail] = useState("");
   const [pass, setPass] = useState("");
   const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      navigate("/");
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
   



  
   

 async function handleSubmit(e){
       e.preventDefault();
      //  console.log(email,pass)
      try {
        const response =await fetch('http://localhost:4505/api/auth/signin',{
          method: 'POST',
          headers:{'content-type':'application/json'},
          body: JSON.stringify({email:email,password:pass})
        })
        const data = await response.json();
        // console.log(data.success);
        if(data.success){
          localStorage.setItem('auth-token',data.token);
          navigate('/');
        }else{
          console.log(data.error);
        }
           


          

        
      } catch (error) {
        console.log(error.error);
      }
   }

  return (
    <>
   <section className="reg">
        <div className="login_wrapper d-flex justify-content-center">
          <img src={img2} className='backimage' alt="" />
          <div className="register my-4">
              <form className="loginform" onSubmit={handleSubmit}>
                 <div><h3 className='text-center'>Login</h3></div>
                <div className="mb-3 d-flex align-items-center mx-3">
                  <i className="fa-solid fa-envelope"></i>
                  <input type="email" required placeholder="Enter Your email" onChange={(e)=>setEmail(e.target.value)} className="form-control" />
                </div>

                <div className="mb-3 d-flex align-items-center mx-3">
                  <i className="fa-solid fa-lock"></i>
                  <input type="password" required placeholder="Enter password" onChange={(e)=>setPass(e.target.value)} className="form-control" />
                </div>
                  <div className="mb-3 form-check mx-5">
                  <input type="checkbox" required className="form-check-input" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Agree to our <a href="/">Terms and condition</a> </label>
                </div>

                <button type="submit" className="btn_design">Submit</button>
              </form>
            
          </div>
          
        </div>

      </section>
    
    </>
  )
}

export default Login




