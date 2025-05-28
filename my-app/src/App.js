import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Courses from './Component/Courses';
import Events from './Component/Events';
import Contact from './Component/Contact';
import Mern from './Component/Mern';
import Footer from './Component/Footer';
import Java from './Component/Java';
import Dotnet from './Component/Dotnet';
import Angular from './Component/Angular';
import Hadoop from './Component/Hadoop';
import Python from './Component/Python';
import Register from './Component/Register';
import Careers from './Component/Careers';
import Help from './Component/Help';

function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/courses/mern" element={<Mern />} />
      <Route path="/courses/java" element={<Java />} />
      <Route path="/courses/dotnet" element={<Dotnet />} />
      <Route path="/courses/angular" element={<Angular />} />
      <Route path="/courses/hadoop" element={<Hadoop />} />
      <Route path="/courses/python" element={<Python />} />
      <Route path="/events/register" element={<Register />} />
      <Route path="/contact/careers" element={<Careers />} />
      <Route path="/contact/help" element={<Help />} />
    </Routes>
  
    
    <Footer/>
    </div>
  );
}

export default App;
