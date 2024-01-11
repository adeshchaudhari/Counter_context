// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Component/Home';
import Register from './Component/Register';
import Counter from './Component/Counter';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/counter' element={<Counter />}/>
        
      </Routes>
    </div>
  );
}

export default App;
