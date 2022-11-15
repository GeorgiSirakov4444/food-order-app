import React, { Fragment, useState } from "react";
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
    <Fragment>
      {cart && <Cart onHideCart7={hideCart}/>}
      <Header onShowCart={showCart}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;