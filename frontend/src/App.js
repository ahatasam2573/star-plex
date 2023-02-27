import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import './stylesheets/alignments.css'
import './stylesheets/custom.css'
import './stylesheets/formElements.css'
import './stylesheets/sizes.css'
import './stylesheets/theme.css'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
