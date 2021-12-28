import { useState, useEffect } from "react";
import AppRouter from "./Router";
import { authService } from "firebase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} login</footer>
    </>
  );
}

export default App;
