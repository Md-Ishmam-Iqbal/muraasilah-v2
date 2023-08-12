import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Auth from "./Pages/Auth";

import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Auth />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
