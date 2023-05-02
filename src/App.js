import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './Components/Navigation';
import About from './Page/About';
import Registration from './Page/Registration';
import Login from './Page/Login';
import Home from './Page/Home';
import React, { useState } from 'react';
import Forms from './Components/Forms';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    // do something with email and password
  };
  return (
    <div className="App">
      <Navi/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/aboutUS' element = {<About/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/registration' element = {<Registration/>} />
      </Routes>
      <div>
    </div>
    </div>
  );
}

export default App;
