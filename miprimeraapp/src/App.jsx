import './App.css';
import Navbar from './components/Navbar';
import Carrito from './components/Carrito';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <header style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Navbar />
        <Carrito />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path='/category/:catid' element={<ItemListContainer/>}/>
        </Routes>
      </main>
      <footer>
      <Footer/>
      </footer>
    </BrowserRouter>
  );
}

export default App;
