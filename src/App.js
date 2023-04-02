// import Footer from "./Components/Footer/Footer";
// import NavBar from "./Components/NavBar/NavBar";
// import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
// import ProductCard from "./Components/ProductCard/ProductCard";


// // function App() {
// //   return (
// //     <div>
// //       <NavBar />
// //       <ItemListContainer />
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;


// function App() {
//   return (
//     <>
//   <NavBar/>
//   <ItemListContainer SaludoDeBienvenida= "Hola, tenemos lo que estas buscando"/>
//   <ProductCard />
//   <ProductCard />
//   <ProductCard />
//   <ProductCard />
//   <ProductCard />
//   <ProductCard />
//   <Footer />
//   </>
//   );
//   }
//   export default App;
  

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Form from "./Components/Form/Form";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryName" element={<ItemListContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<h1> error 404: Not found </h1>} />
          </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
