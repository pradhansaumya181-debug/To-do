import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Fill all fields ❗");
      return;
    }

    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));

    setMessage("Account created successfully ✅");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded border w-80">
      <h2 className="text-xl font-bold mb-4 text-center">Signup</h2>

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

      <button className="w-full bg-green-500 text-white p-2">
        Signup
      </button>
    </form>
  );
};

export default Signup;
