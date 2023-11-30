import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import {Layout} from './Layout';
import Main from '../pages/Main/Main.jsx'
import Values from '../pages/Values/Values.jsx';
import Electricity from '../pages/Electricity/Electricity.jsx';
import FAQ from '../pages/FAQ/FAQ.jsx';
import ContactUs from '../pages/ContactUs/ContactUs.jsx';
import Cases from '../pages/Cases/Cases.jsx';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';

function App() {

  return (
    <div className={css.wrapper}>
      <Routes>
          <Route path='/' element={<Layout />}>
          {/* <Route path='/' element={<Header/>}/> */}
          <Route index path='/main' element={<Main/>} />
          <Route path='/about' element={<Values/>}/>
          <Route path='/service' element={<Electricity/>}/>
          <Route path='/cases' element={<Cases/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          {/* <Route path='/' element={<Footer/>}/> */}
            {/* 
            <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts/>} /> } />
            <Route path="*" element={<Home />} /> */}
          </Route>
        </Routes>
    </div>
  );
}

export default App;
