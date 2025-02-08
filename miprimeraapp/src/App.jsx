import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import CartWidget from './components/CartWidget';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './components/CartContainer';
import { useEffect } from 'react';
import { exportProductsWithBatch } from './data/database';

function App() {

    useEffect(() => {
        async function uploadProducts() {
            try {
                await exportProductsWithBatch();
                console.log("✅ Productos subidos automáticamente a Firebase");
            } catch (error) {
                console.error("❌ Error al subir productos:", error);
            }
        }

        uploadProducts();
    }, []);

  return (
    <CartContextProvider >
      <BrowserRouter>
        <header style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Navbar />
          <CartWidget />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path='/category/:catid' element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer/>}></Route>
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </CartContextProvider>
  );
}



export default App;
