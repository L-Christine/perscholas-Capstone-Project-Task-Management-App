import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from './utilities/users-service'
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  //state to hold the user data. null == not logged in
  const [user, setUser] = useState(getUser())

  return (
    <div className="App">
      {/* when user is logged in, show NavBar, if not, show AuthPage */}
      {user ? (
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/main' element={<MainPage />} />
      </Routes> 
      </>
      ): (<AuthPage setUser={setUser}/>)
      }
    </div>
  );
}

export default App;
