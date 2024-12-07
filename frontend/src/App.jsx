import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home'
import LoginPage from './pages/Login/LoginPage';
import RegistrerPages from './pages/Login/RegistrerPages';
import Cart from './pages/Cart/Cart';
import Pizza from './pages/Pizza/Pizza';
import Footer from './views/Footer'
import Navbar from './views/Navbar'
import NotFound from "./views/NotFound";
import Profile from "./views/Profile";
import CardProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CardProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegistrerPages />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/p001" element={<Pizza />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </CardProvider>
    </BrowserRouter>
  )
}

export default App
