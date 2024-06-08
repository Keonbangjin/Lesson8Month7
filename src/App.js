import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GeneralLayout from './components/GeneralLayout';
import Home from './components/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<GeneralLayout />} >
          <Route index  element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
