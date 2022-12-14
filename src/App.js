import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from './utilities/users-service'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  //state to hold the user data. null == not logged in 
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {/* when user is logged in, show NavBar, if not, show AuthPage */} 
      {user ? (
      <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
      </>
      ): (<AuthPage setUser={setUser}/>)
      }
    </main>
  );
}

export default App;
