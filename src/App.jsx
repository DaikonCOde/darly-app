import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { auth } from './db/connect';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { DBfirestore } from './db/connect';
// Redux
import { signInUser } from './Store/Reducers/Users/Users';
import { useDispatch, useSelector } from 'react-redux';
// Hooks
import { useGetListOfCategories } from './Hooks/useGetListOfCategories';
import { useGetListProducts } from './Hooks/useGetListProducts';
// Pages
import Home from './pages/Home/Home'
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Login from './pages/Login/Login';
import Category from './pages/Category/Category';
// Admin
import Layout from './Admin/Layout/Layout';
import DashboardHome from './Admin/Pages/DashboardHome/DashboardHome';
import Products from './Admin/Pages/Products/Products';
import CreateProduct from './Admin/Pages/CreateProduct/CreateProduct';
import EditProduct from './Admin/Pages/EditProduct/EditProduct';
// Styles
import Theme from './Styles/theme';
// Layout
import HeaderDefaultLayout from './Layout/HeaderDefaultLayout';

const App = () => {

  const { products } = useSelector((state) => state.listProducts);
  const { listCategories } = useSelector((state) => state.categories);
  const dispatch = useDispatch()

  const [ getListProducts ] = useGetListProducts();
  const [ getListOfCategories ] = useGetListOfCategories();
  
  useGetListOfCategories();
  if( listCategories.length === 0) {
    getListOfCategories();
  }

  if ( products.length === 0) {
    getListProducts()
  }

  
  onAuthStateChanged(auth, async (user ) => {
    if(user) {
      const getInfoUser = await getDoc( doc(DBfirestore, `users`, user.uid) )
      console.log('auth')
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
          <Route path='/' element={<HeaderDefaultLayout />} >
            <Route index element={ <Home /> } />
            <Route path='category' element={ <Category /> } />
          </Route>
          <Route path='/producto/:id' element={<SingleProduct />} />
          <Route path='/login' element={ <Login /> } />
          {/* DASHBOARD */}
          <Route path='/dashboard' element={ <Layout /> } > 
            <Route index element={ <DashboardHome /> } />
            <Route path='products'  >
              <Route index element={ <Products /> } />
              <Route path='create' element={ <CreateProduct /> } />
              <Route path='edit' element={ <EditProduct /> } />
            </Route>
          </Route>
        </Routes>
        
      </Theme>
    </BrowserRouter>
  );
}

export default App;
