import './App.css';
import Navbar from "./components/Navbartop";
import NavbarVazia from './components/NavbarVazia';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselIndex from './components/CarouselIndex';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <NavbarVazia/>

      <CarouselIndex/>


    </div>
  );
}

export default App;
