import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Header from './components/Header/Header';
import Theme from './Styles/theme';


const App = () => {
  return (
    <BrowserRouter> 
      <Theme>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
        </Routes>
        
      </Theme>
    </BrowserRouter>
  );
}

export default App;
