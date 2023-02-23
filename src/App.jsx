import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const message = "Bienvenido a Gerardi Notebooks";

  return (
    <>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={message} />}
            />
            <Route
              path="/category/:category"
              element={<ItemListContainer greeting={message} />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
