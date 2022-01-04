import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import { GlobalStyle } from './styles';
import Header from './components/Header/Header';



const App = () => {
  return (
    <BrowserRouter> 
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
