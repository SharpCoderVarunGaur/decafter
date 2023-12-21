
import './App.css';
import Cursole from './Cursole';
import Navbar from './navbar';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Cursole />} />
    </Routes>
   </>
  );
}

export default App;
