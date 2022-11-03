import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

export default function AuthPage({setUser}) {
  //when useState(true), by default show sign up form
  const [showSignUp, setShowSignUp] = useState(true); 
  return (
    <main>
        <h1>AuthPage</h1>
        {/* show sign up form(default), if not, show log in form */}
        {showSignUp ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}

        {/* setShowSignUp(!showSignUp) == useState(false), line12-->show log in form */}
        {/* when sign up form is up, show 'log in' button, when log in form is up, show 'sign up' button */}
        <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? "Log In" : "Sign Up"}</button>
      </main>
    );
  }