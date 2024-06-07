import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import ProductList from './components/ProductList';
import { ToastContainer } from 'react-bootstrap';
import Photoshoot from './components/Photoshoot'
import Contact from './components/Contact';
import Signin from './components/Signin';
function App() {

  return (
    <div className="App">
   <BrowserRouter>
   <ToastContainer position='bottom-left'/>
   <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path='/products' element={<ProductList/>}/>
    <Route path='/photoshoot' element={<Photoshoot/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/signin' element={<Signin/>}/>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
