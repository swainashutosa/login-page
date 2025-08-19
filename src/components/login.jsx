import React, { useState } from "react";

const Login = ({ setPage, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (user && email === user.email && password === user.password) {
      setPage("account");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center bg-light mt-5">
      <div
        className="card shadow-sm p-4"
        style={{ width: "320px", height: "600px" }}
      >
        <h5 className="fw-bold">Login to your PopX account</h5>

        <form className="mt-4" onSubmit={handleLogin}>
          <label className="form-label fw-bold small">Email address</label>
          <input
            type="email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="form-label fw-bold small">Password</label>
          <input
            type="password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn fw-bold w-100"
            style={{ backgroundColor: "#8a2be2", color: "white" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
