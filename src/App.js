import './App.css';
// import { useEffect } from 'react';
import Products from './components/Products';
import {Store} from './Redux/Store.js';
// import Counter from './components/UseReducer';
import { Provider } from 'react-redux';
import Test from './components/Test';
import Users from './components/Users';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Users2 from './components/Users2';


function App() {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Users</a>
        </li>
      </ul>
    </div>
  </nav>
<Provider store = {Store}>
<BrowserRouter>
<Routes>
<Route index element={"Yooo"}></Route>
<Route path='/products' element={<Products />}></Route>
<Route path='/users' element={<Users />}></Route>
<Route path='/users2' element={<Users2 />}></Route>

</Routes>

</BrowserRouter>
</Provider>
</>
  );
}

export default App;
