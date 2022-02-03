import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { auth } from './db/connect';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { DBfirestore } from './db/connect';

import { signInUser } from './Store/Reducers/Users/Users';
import { useDispatch } from 'react-redux';
// Pages
import Home from './pages/Home/Home'
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Login from './pages/Login/Login';
// Admin
import Layout from './Admin/Layout/Layout';
import DashboardHome from './Admin/Pages/DashboardHome/DashboardHome';
import Products from './Admin/Pages/Products/Products';
import CreateProduct from './Admin/Pages/CreateProduct/CreateProduct';
// Styles
import Theme from './Styles/theme';

const App = () => {

  const dispatch = useDispatch()

  onAuthStateChanged(auth, async (user ) => {
    if(user) {
      const getInfoUser = await getDoc( doc(DBfirestore, `users`, user.uid) )

      dispatch( signInUser( { 
        id: user.uid,
        ...getInfoUser.data()
      } ));
    } else {
      dispatch( signInUser(null) );
    }

  })

  return (
    <BrowserRouter> 
      <Theme>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/producto/:id' element={<SingleProduct />} />
          <Route path='/login' element={ <Login /> } />
          <Route path='/dashboard' element={ <Layout /> } > 
            <Route index element={ <DashboardHome /> } />
            <Route path='products' element={ <Products />} />
            <Route path='products/create' element={ <CreateProduct /> } />
          </Route>
        </Routes>
        
      </Theme>
    </BrowserRouter>
  );
}

export default App;
