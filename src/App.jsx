import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemListContainer, ItemDetailContainer, NavBar, Cart, Checkout, Footer } from "./components"
import {CartProvider} from "./context/CartContext";
import'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Tienda deportiva"} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Tienda deportiva"} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartProvider>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;