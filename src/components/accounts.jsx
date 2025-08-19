import React from "react";

const Account = ({ setPage, user }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center bg-light mt-5">
      <div
        className="card shadow-sm p-4"
        style={{ width: "320px", height: "600px" }}
      >
        <h6 className="fw-bold">Account Settings</h6>

        <div className="d-flex align-items-center mt-3">
          {/* Avatar Placeholder */}
          <img
            src="https://via.placeholder.com/50"
            alt="avatar"
            className="rounded-circle me-3"
          />
          <div>
            <h6 className="fw-bold">{user?.fullName}</h6>
            <p className="mb-0 text-muted small">{user?.email}</p>
          </div>
        </div>

        <p className="mt-3 small text-muted">
          You are registered as {user?.agency === "Yes" ? "an Agency" : "an Individual"} at{" "}
          {user?.company || "No Company"}.
        </p>

        <button
          className="btn btn-outline-dark w-100 mt-auto"
          onClick={() => setPage("welcome")}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
