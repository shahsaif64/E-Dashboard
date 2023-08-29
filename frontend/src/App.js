
import './App.css';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Footer from './components/footer';
import { BrowserRouter , Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<h1>Product Listing</h1>} />
        <Route path='/add' element={<h1>Add Listing</h1>} />
        <Route path='/update' element={<h1>Update Product Listing</h1>} />
        <Route path='/delete' element={<h1>Delete Product Listing</h1>} />
        <Route path='/profile' element={<h1>User's profile</h1>} />
        <Route path='/logout' element={<h1>Logout</h1>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      
      <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
