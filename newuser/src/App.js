import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/nav_bar';
import HomeScreen from './Screens/homescreen';
import {Routes,Route,Switch, BrowserRouter} from 'react-router-dom';
import CartScreen from './Screens/cartScreen';
import BillScreen from './Screens/billScreen';


function App() {
  return (
    <div className="App">
      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route  path="/" exact element={<HomeScreen/>}/>
          <Route  path="/cart" exact element={<CartScreen/>}/>
          <Route  path="/bill" exact element={<BillScreen/>}/>
        </Routes>
      </BrowserRouter>

           
    </div>
  );
}

export default App;
