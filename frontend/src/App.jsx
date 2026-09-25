  import React from 'react'
  import {BrowserRouter,Route,Routes} from 'react-router-dom';
  import Signup from './Pages/Signup';
  import Login from './Pages/Login';
  import Dashboard from './Pages/Dashboard';
  import AddProduct from './Pages/AddProduct';
  import EditProduct from './Pages/EditProduct';
  const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/add' element={<AddProduct/>}></Route>
          <Route path='/edit' element={<EditProduct/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }

  export default App
