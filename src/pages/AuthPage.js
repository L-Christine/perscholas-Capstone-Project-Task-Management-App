import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm"

export default function AuthPage() {
    return (
      <main>
        <h1>AuthPage</h1>
        <SignUpForm />
        <LoginForm />
      </main>
    );
  }