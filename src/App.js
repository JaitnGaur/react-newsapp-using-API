
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Tech from './components/Tech';
import Entertainment from './components/Entertainmert';
import Home from './components/Home';
import Sports from './components/Sports';

function App() {
  return (
    <>
      <Router>
        <Navbar title='J@GAUR NEWS' dark={true} />

        <Routes>
          <Route path='/' element={<div id='news-container'><Home /> </div>} />
          <Route path='/Sports' element={<div id='news-container'><Sports /> </div>} />
          <Route path='/Tech' element={<div id='news-container'><Tech /> </div>} />
          <Route path='/Entertainment' element={<div id='news-container'><Entertainment /> </div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
