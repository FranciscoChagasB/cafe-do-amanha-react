import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/home/Home'
import About from './components/about/about';

function App() {


  return (
   <div>
    <Router>
      <Routes>
        <Route path="/sobre-nos" element={<About/>} />
        <Route path="/" element={<Home/>} />
      
      </Routes>
    </Router>

    
   </div>
  )
}

export default App
