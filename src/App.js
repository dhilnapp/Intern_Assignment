import './App.css';
import Navbar from './Components/Navbar';
import AddBlog from './Components/AddBlog';
import { Route, Routes } from 'react-router-dom';
import View from './Components/View';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<View/>}></Route>
        <Route path='/view' element={<AddBlog/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
