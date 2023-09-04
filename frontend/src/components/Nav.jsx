import React, { useEffect } from "react";
import { Link, useNavigate ,useLocation} from "react-router-dom";
const Nav = () => {
  
  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    //  console.log(location.pathname)
  }, [location]);


  const handlelogout = () => {
    localStorage.removeItem("auth-token");
    navigate("/login");
  }
   


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid navback">
        <Link className="navbar-brand" to="/"><i className="fa-solid fa-shop"></i></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-1 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/add">Add</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/update">Update</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/delete">Delete</Link>
            </li>
            <li className="nav-item">
            {localStorage.getItem("auth-token")?'':<Link className="nav-link" aria-current="page" to="/signup">Register</Link>}
              
            </li>
          </ul>
          <div className="d-flex">
            {localStorage.getItem("auth-token")?<><Link className="nav-link me-4" to="/profile">Profile</Link><button onClick={handlelogout} className='btn-logout'>Logout</button></>:<Link className="nav-link me-2" to="/login">Login</Link>}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;

