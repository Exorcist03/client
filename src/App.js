import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loginsignup from './components/Loginsignup/Loginsignup';
import Landingpage from './components/Landingpage/Landingpage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path='/' element = {<Loginsignup/>}></Route>
        <Route path='/land' element = {<Landingpage/>} />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
