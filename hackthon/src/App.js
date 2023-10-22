
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import Home from './Component/Home';
import Header from './Component/Header';
import Category from './Component/Category';
import AddnewCategory from './Component/AddnewCategory';
import Products from './Component/Products';
import AddnewProducts from './Component/AddnewProducts';
import ForgetPassword from './Component/ForgetPassword';
import Logout from './Component/Logout';
import Delete from './Component/Delete';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/header' element={<Header />} />
          <Route path='/home' element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/addnewcategory' element={<AddnewCategory />} />
          <Route path='/products' element={<Products />} />
          <Route path='/addnewproducts' element={<AddnewProducts />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/delete' element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
