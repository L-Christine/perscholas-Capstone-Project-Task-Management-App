import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from './utilities/users-service'
import './App.css';
import NavBar from './components/NavBar';
import AuthPage from './pages/AuthPage';
import BoardPage from './pages/BoardPage';

function App() {
  //state to hold the user data. null == not logged in
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {/* when user is logged in, show NavBar, if not, show AuthPage */} 
      {user ? (
      <>
      <NavBar user={user} setUser={setUser}/>
      <BoardPage />
      <Routes>
        {/* client-side route that renders the component instance if the path matches the url in the address bar */}
        <Route path='/board' element={<BoardPage />} />
        {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
        <Route path="/*" element={<Navigate to="/board" />} />
      </Routes> 
      </>
      ): (<AuthPage setUser={setUser}/>)
      }
    </main>
  );
}

export default App;
