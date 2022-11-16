import React, { useState } from "react";
import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState(false);

  const showCart = () => {
    setCart(true);
  };

  const hideCart = () => {
    setCart(false);
  };

  return (
    <CartProvider>
      {cart && <Cart onHideCart7={hideCart}/>}
      <Header onShowCart={showCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;