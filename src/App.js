import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home/Home'
import SingleProduct from './pages/SingleProduct/SingleProduct';
// Styles
import Theme from './Styles/theme';

const App = () => {
  return (
    <BrowserRouter> 
      <Theme>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/producto/:slug' element={<SingleProduct />} />
        </Routes>
        
      </Theme>
    </BrowserRouter>
  );
}

export default App;
