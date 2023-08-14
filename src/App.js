import React, { useEffect, useState } from 'react';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';


function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };
  
  

  const handleLogout = async () => {
    try {
      console.log("start")
      await axios.get('http://127.0.0.1:8000/api/logout/');
      setUser(null);
      console.log("end")
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      setUser(user);
    }
  }, [])

  useEffect(() => {
    return () => {
      // this is the cleanup ... function 
    }
  }, [user])



  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        {/* {user ? (
          <MainPage userData={user} onLogout={handleLogout} />
        ) : (
          <LoginPage onLogin={handleLogin} />
        )} */}

        {
          user !== null ? (
            <MainPage userData={user} onLogout={handleLogout} />
          ) : (
            <LoginPage onLogin={handleLogin} />
          )
        }


      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
