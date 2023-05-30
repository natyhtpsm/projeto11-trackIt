import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import axios from "axios";
import Habits from './pages/Habits';
import History from './pages/History';
import SignUp from './pages/SignUp';
import Today from './pages/Today';


function App() {

  axios.defaults.headers.common['Authorization'] = 'oiB9hIuMz9ZKmrlUSboWNc1R';

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/cadastro' element={<SignUp/>}/>
          <Route path='/habitos' element={<Habits/>}/>
          <Route path='/hoje' element={<Today/>}/>
          <Route path='/historico' element={<History/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
