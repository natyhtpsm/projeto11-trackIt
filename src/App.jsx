import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './style/GlobalStyle';
import HomePage from './pages/HomePage';
import axios from "axios";
import Habits from './pages/Habits';
import History from './pages/History';
import SignUp from './pages/SignUp';
import Today from './pages/Today';
import ResetStyle from "./style/ResetStyle";
import { useState } from "react";
import userContext from "./context/UserContext";
import PercentageContext from './context/PercentageContext';


function App() {

  const [userData, setUserData] = useState(localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')):null);
  const [percentage, setPercentage] = useState(localStorage.getItem('percentage')? JSON.parse(localStorage.getItem('percentage')):0);
  axios.defaults.headers.common['Authorization'] = 'oiB9hIuMz9ZKmrlUSboWNc1R';

  return (
    <>

      <userContext.Provider value = {{userData, setUserData}}>
        <PercentageContext.Provider value = {{percentage, setPercentage}}>
          <GlobalStyle/>
          <ResetStyle/>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/cadastro' element={<SignUp/>}/>
              <Route path='/habitos' element={<Habits/>}/>
              <Route path='/hoje' element={<Today/>}/>
              <Route path='/historico' element={<History/>}/>
            </Routes>
          </BrowserRouter>
        </PercentageContext.Provider>
      </userContext.Provider>
    </>
  )
}

export default App
