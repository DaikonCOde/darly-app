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
// Styles
import Theme from './Styles/theme';

const App = () => {

  const dispatch = useDispatch()

  onAuthStateChanged(auth, async (user ) => {
    if(user) {
      const getInfoUser = await getDoc( doc(DBfirestore, `users`, user.uid) )

      dispatch( signInUser(getInfoUser.data()) );
    } else {
      dispatch( signInUser(null) );
    }

  })

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
