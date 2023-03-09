import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <div style={{ marginTop: "6rem" }}>
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting={"Menú Principal"} />}
              />
              <Route
                path="/category/:category"
                element={<ItemListContainer greeting={"Categoría - "} />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
