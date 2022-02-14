import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tech from './components/Tech';
import Entertainment from './components/Entertainmert';
import Home from './components/Home';
import Sports from './components/Sports';
import Search from './components/Search';
import SearchState from './Context/SearchState';

function App() {
  const [searchText, setsearchText] = useState('');
  const searchT = (Text) => {
    setsearchText(Text);
  }
  return (

    <SearchState>
      <Router>
        <Navbar title='J@GAUR NEWS' dark={true} searchT={searchT} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Sports' element={<Sports />} />
          <Route path='/Tech' element={<Tech />} />
          <Route path='/Entertainment' element={<Entertainment />} />
          <Route path='/Search' element={<Search searchText={searchText} />} />
        </Routes>
      </Router>
    </SearchState>

  );
}

export default App;
