
import './App.css';
import Cursole from './Cursole';
import Navbar from './navbar';
import { Route,Routes } from 'react-router-dom';
import Signup from './Signup';

function App() {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Cursole />} />
      <Route path='/login-signup' element={<Signup />} />
    </Routes>
   </>
  );
}

export default App;
