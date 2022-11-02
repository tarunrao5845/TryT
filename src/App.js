import "./App.css";
import Navbar from "./components/Navbar";
import TextU from "./Pages/TextU";
import Blogs from './Pages/Blogs'
import { Route, Switch } from 'react-router-dom';
import Footer from "./components/Footer";
import Components from "./components/Components";
import Signin from "./Pages/Signin";
import CurdOp from "./Pages/CurdOp";
import Adduser from "./Pages/Adduser";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
  <Route path="/" component={Components} exact/>
 <Route path="/TextU" component={TextU}/>  
 <Route path="/Blogs" component={Blogs}/>  
 <Route path="/CurdOp" component={CurdOp}/>  
 <Route path="/Adduser" component={Adduser}/>  
 <Route path="/Signin" component={Signin}/>  
  </Switch>
    <Footer/>
    </>
  );
}

export default App;
