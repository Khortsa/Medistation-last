import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/About'
import Courses from './pages/Courses'
import Beginner from './pages/Beginner'
import Advance from './pages/Advance'
import Intermediate from './pages/Intermediate'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Faq from './pages/Faq'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
          
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />}  />
            <Route path="/about" element={user ? <About /> : <Navigate to="/login" />} />
            <Route path="/courses" element={user ? <Courses /> : <Navigate to="/login" />}  />
            <Route path="/beginner" element={user ? <Beginner /> : <Navigate to="/login" />}  />
            <Route path="/intermediate"  element={user ? <Intermediate /> : <Navigate to="/login" />} />
            <Route path="/advance" element={user ? <Advance /> : <Navigate to="/login" />} />
            <Route path="/faq" element={user ? <Faq /> : <Navigate to="/login" />}  />
            <Route path="/login"  element={!user ? <Login /> : <Navigate to="/" />}  />
            <Route path="/signup"  element={!user ? <Signup /> : <Navigate to="/" />} />
        
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
