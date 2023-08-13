import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Auth from "./Pages/Auth";

import { AuthContextProvider } from "./context/AuthContext";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
