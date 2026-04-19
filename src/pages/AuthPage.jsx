import { useState } from "react";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {isLogin ? <Login /> : <Signup />}

      <p className="mt-4">
        {isLogin ? "Don't have account?" : "Already have account?"}

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="ml-2 text-blue-500"
        >
          {isLogin ? "Signup" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
