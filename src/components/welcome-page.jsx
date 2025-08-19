const Welcome = ({ setPage }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center bg-light mt-5">
      <div
        className="card shadow-sm text-center d-flex flex-column"
        style={{ width: "320px", height: "600px" }}
      >
        {/* Image / Logo Placeholder */}
        <div className="mt-5">
          <div
            className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center mx-auto"
            style={{ width: "30px", height: "30px", fontWeight: "bold", cursor: "pointer" }}
          >
            1
          </div>
        </div>

        {/* Welcome Text */}
        <div className="mt-auto p-4">
          <h5 className="fw-bold">Welcome to PopX</h5>
          <p className="text-muted small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          {/* Buttons */}
          <div className="d-grid gap-2 mt-3">
            <button
              className="btn btn-primary fw-bold"
              style={{ backgroundColor: "#8a2be2", border: "none" }}
              onClick={() => setPage("signup")}  // 👈 moves to Signup page
            >
              Create Account
            </button>
            <button
              className="btn fw-bold text-dark"
              style={{ backgroundColor: "#e6e0f8" }}
              onClick={() => setPage("login")}   // 👈 moves to Login page
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
