import './App.css';
import Home from './comps/Home/Home';
import Navbar from './comps/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
}

export default App;