import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import {Layout} from './Layout';
import Main from '../pages/Main/Main.jsx'

function App() {

  return (
    <div className={css.wrapper}>
      <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Main/>} />
            {/* 
            <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts/>} /> } />
            <Route path="*" element={<Home />} /> */}
          </Route>
        </Routes>
    </div>
  );
}

export default App;
