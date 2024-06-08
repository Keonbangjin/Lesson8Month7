import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GeneralLayout from './components/GeneralLayout';
import Home from './components/Home';
import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import CategoryPage from './components/CategoryPage';
import ProductPage from './components/Product/ProductPage';


function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<GeneralLayout />} >
          <Route index  element={<Home />} />
          <Route path='/category'  element={<CategoryPage />} />
          <Route path='/product'  element={<ProductPage />} />
        </Route>
        <Route path='register' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
