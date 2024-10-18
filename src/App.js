import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore } from './stores/store';
import LoginForm from './components/LoginForm';
import PurchasedItems from "./components/PurchasedItems";
import ProductDetails from "./components/ProductDetails";

const store = initStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />}></Route>
          <Route path='/purchasedItems' element={<PurchasedItems />}></Route>
          <Route path='/productDetails/:id' element={<ProductDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
