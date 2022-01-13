import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home/Home'
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Login from './pages/Login/Login';
// Styles
import Theme from './Styles/theme';

const App = () => {
  return (
    <BrowserRouter> 
      <Theme>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/producto/:slug' element={<SingleProduct />} />
          <Route path='/login' element={ <Login /> } />
        </Routes>
        
      </Theme>
    </BrowserRouter>
  );
}

export default App;
