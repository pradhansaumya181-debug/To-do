import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import TodoApp from "./component/to-do";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  return (
    <>
      {isLoggedIn ? (
        <TodoApp setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <AuthPage setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
