import { useState } from "react";
import { login } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-5 w-[50%] border border-blue-500 rounded-lg p-2  "
      >
        <h2 className="text-3xl font-bold text-center">Sign In</h2>
        <div>
          <label className="text-gray-700 text-sm font-bold flex-1">
            Email:
          </label>
          <input
            className="border rounded w-full py-1 px-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="text-gray-700 text-sm font-bold flex-1">
            Password:
          </label>
          <input
            className="border rounded w-full py-1 px-2"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center justify-center ">
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-l rounded-lg w-[30%] mb-3"
          >
            Login
          </button>
          <span className="text-sm" >
            Not Registered ? <Link className="underline text-blue-500" to={'/register'}>Create an account here</Link>
        </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
