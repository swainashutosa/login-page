import React, { useState } from "react";
import Welcome from "./components/welcome-page";
import Signup from "./components/signup-page";
import Login from "./components/login";
import Account from "./components/accounts";


const App = () => {
  const [page, setPage] = useState("welcome");
  const [user, setUser] = useState(null);

  return (
    <>
      {page === "welcome" && <Welcome setPage={setPage} />}
      {page === "signup" && <Signup setPage={setPage} setUser={setUser} />}
      {page === "login" && <Login setPage={setPage} user={user} />}
      {page === "account" && <Account setPage={setPage} user={user} />}
    </>
  );
};

export default App;
