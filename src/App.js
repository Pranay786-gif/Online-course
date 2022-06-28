import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from "./components/Login";
import SignUp from './components/Signup';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path="/about" element={<About />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<SignUp />} />

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
