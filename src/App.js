
import './App.css';
import Cursole from './Cursole';
import Navbar from './navbar';
import { Route,Routes } from 'react-router-dom';
import Signup from './Signup';
import EmpDes from './EmpDes';

function App() {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Cursole/>} />
      <Route path='/login-signup' element={<Signup/>} />
      <Route path="/Emp-Des/:id" element={<EmpDes/>} />
    </Routes>
   </>
  );
}

export default App;
