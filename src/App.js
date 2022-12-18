import './App.css';
// import { useEffect } from 'react';
import Products from './components/Products';
import {Store} from './Redux/Store.js';
// import Counter from './components/UseReducer';
import { Provider } from 'react-redux';
import Test from './components/Test';


function App() {

  return (

<Provider store = {Store}>
<Products />
</Provider>

  );
}

export default App;
