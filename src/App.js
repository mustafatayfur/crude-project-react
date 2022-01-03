
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/all" element={<AllUsers/>}/>
          <Route path="/add" element={<AddUser/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
