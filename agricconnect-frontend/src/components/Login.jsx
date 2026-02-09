import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [role, setRole] = useState("farmer");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${role}`);
    // later we connect this to backend REST API
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>AgriConnect</h2>
        <p>Connect Farmers, Experts & Society</p>

        <form onSubmit={handleSubmit}>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="farmer">Farmer</option>
            <option value="expert">Expert / Admin</option>
            <option value="financier">Financier</option>
            <option value="public">Public User</option>
          </select>

          <input type="text" placeholder="Phone / Email" required />
          <input type="password" placeholder="Password" required />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
