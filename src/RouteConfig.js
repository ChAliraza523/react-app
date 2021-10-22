
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import ProductItem from "./components/ProductItem";
import NavBar from "./NavBar";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  
  import Message from './Message';
  import Basics from './Basics';
  
  function App() {
   
  
    return (
      <div>
        <Router>
            <NavBar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/product" component={Product}/>
            <Route path="/productitem" component={ProductItem}/>
            
          </Switch>
        </Router>
      </div>
    );
  }
  
  export default App;