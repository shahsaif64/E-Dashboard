
import './App.css';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Addproduct from './components/Addproduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<h1>Product Listing</h1>} />
        <Route path='/add' element={<Addproduct/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/update' element={<h1>Update Product Listing</h1>} />
        <Route path='/delete' element={<h1>Delete Product Listing</h1>} />
        <Route path='/profile' element={<h1>User's profile</h1>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      
      <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
