import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GeneralLayout from './components/GeneralLayout';
import Home from './components/Home/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Categery from './components/Category/Categeries';


function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<GeneralLayout />} >
          <Route index  element={<Home />} />
          <Route path='/category'  element={<Categery />} />
        </Route>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
