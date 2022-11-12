 import { Fragment, useState } from 'react';
//  import Test from './components/Test';
//  import TestWindow from './components/TestWindow';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCart = () => {
    setCartIsShown(true);
  };
  const hideCart = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCart}/>}
      <Header onShowCart={showCart}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}
export default App;





// function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [name, secondName] = useState('Test Button 1');
//   const close = () => {
//     setIsOpen(false);
//     secondName('Test Button 1');
//   }
//   const open = () => {
//     setIsOpen(true);
//     secondName('change');
//   }
//   return (
//     <Fragment>
//       <Test name={name} onShow={open}/>
//       {isOpen && <TestWindow onHide={close} name="Close Me !"></TestWindow>}
//     </Fragment>
//   );
// }

// export default App;