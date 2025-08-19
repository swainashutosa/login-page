import React, { useState } from "react";

const Signup = ({ setPage, setUser }) => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    setUser(form); // Save user details
    setPage("account"); // Go to login
  };

  return (
    <div className="container d-flex justify-content-center align-items-center bg-light mt-5">
      <div
        className="card shadow-sm p-4"
        style={{ width: "320px", height: "600px" }}
      >
        <h5 className="fw-bold">Create your PopX account</h5>

        <form className="mt-3" onSubmit={handleSubmit}>
          <label className="form-label fw-bold small">Full Name*</label>
          <input
            type="text"
            name="fullName"
            className="form-control mb-2"
            value={form.fullName}
            onChange={handleChange}
            required
          />

          <label className="form-label fw-bold small">Phone number*</label>
          <input
            type="number"
            name="phone"
            className="form-control mb-2"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <label className="form-label fw-bold small">Email address*</label>
          <input
            type="email"
            name="email"
            className="form-control mb-2"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label className="form-label fw-bold small">Password*</label>
          <input
            type="password"
            name="password"
            className="form-control mb-2"
            value={form.password}
            onChange={handleChange}
            required
          />

          <label className="form-label fw-bold small">Company name</label>
          <input
            type="text"
            name="company"
            className="form-control mb-2"
            value={form.company}
            onChange={handleChange}
          />

          <label className="form-label fw-bold small">Are you an Agency?*</label>
          <div className="d-flex gap-3 mb-3">
            <div>
              <input
                type="radio"
                name="agency"
                value="Yes"
                checked={form.agency === "Yes"}
                onChange={handleChange}
              />{" "}
              Yes
            </div>
            <div>
              <input
                type="radio"
                name="agency"
                value="No"
                checked={form.agency === "No"}
                onChange={handleChange}
              />{" "}
              No
            </div>
          </div>

          <button
            type="submit"
            className="btn fw-bold w-100"
            style={{ backgroundColor: "#8a2be2", color: "white" }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
