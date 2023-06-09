import Main from './pages/main';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './layout/navBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
