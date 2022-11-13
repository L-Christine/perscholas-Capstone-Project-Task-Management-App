import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from './utilities/users-service'
import './App.css';
import NavBar from './components/NavBar';
import AuthPage from './pages/AuthPage';

function App() {
  //state to hold the user data. null == not logged in
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {/* when user is logged in, show NavBar, if not, show AuthPage */} 
      {user ? (
      <>
      <NavBar user={user} setUser={setUser}/>


      <Routes>
        {/* client-side route that renders the component instance if the path matches the url in the address bar */}
        {/* <Route path='/board' element={<BoardPage />} /> */}
      </Routes> 
      </>
      ): (<AuthPage setUser={setUser}/>)
      }
    </main>
  );
}

export default App;
