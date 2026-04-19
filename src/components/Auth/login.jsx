import { useState } from "react";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setMessage("No account found ❗ Please signup");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      setMessage("Login successful ✅");

      localStorage.setItem("isLoggedIn", "true");

      setIsLoggedIn(true); // 🔥 important
    } else {
      setMessage("Invalid email or password ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded border w-80">
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

      {message && <p className="text-center text-sm mb-3">{message}</p>}

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border mb-3"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border mb-3"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-full bg-blue-500 text-white p-2">
        Login
      </button>
    </form>
  );
};

export default Login;
