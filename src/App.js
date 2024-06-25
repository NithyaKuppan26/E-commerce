import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Photoshoot from './components/Photoshoot'
import Contact from './components/Contact';
import Signin from './components/Signin';
import Keychain from './assests/Keychain';
import SearchResults from './components/SearchResults';
function App() {

  return (
    <div className="App">
   <BrowserRouter>
   <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/search' element={<SearchResults/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path='/products' element={<ProductList/>}/>
    <Route path='/photoshoot' element={<Photoshoot/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/keychain' element={<Keychain/>}/>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
