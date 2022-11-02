import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

export default function AuthPage({setUser}) {
  const [showSignUp, setShowSignUp] = useState(true); 
  return (
      <main>
        <h1>AuthPage</h1>
        {showSignUp ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser}/>}
        <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? "Log In" : "Sign Up"}</button>
      </main>
    );
  }