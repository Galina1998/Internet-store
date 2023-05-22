import { Nav } from 'react-bootstrap';
import './App.css';
import Products from './components.js/Products';
import SingleProduct from './components.js/SingleProduct';
import About from './components.js/About';
import Home from './components.js/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className='container'> 

      <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
   <Link to="/" className={'nav-link'}>Home</Link>
  </Nav.Item>
  <Nav.Item>
  <Link to="/products" className={'nav-link'}>Products</Link>
  </Nav.Item>
  <Nav.Item>
  <Link to="/about" className={'nav-link'}>About</Link>
  </Nav.Item>
</Nav>
      <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/products">
        <h1 className='text-center'>Products</h1>
      <Products/>

           </Route>
           <Route path="/product/:productId">
              <SingleProduct/>
          </Route>
          <Route path="/">
          <h1>Home</h1>
       <Home/>
          </Route>
         
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
