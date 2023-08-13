import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";

import SignInPage from "./pages/SignInPage";
import SignupPage from "./pages/SignupPage";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  const formStyles = {
    label: "block pt-4",
    inputFields:
      "text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-2 w-full",
    checkBox: "text-slate-700 pt-5 w-full flex-col flex items-center",
    errorMsg: "text-red-500 text-sm",
  };

  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage styles={formStyles} />} />
            <Route
              path="/register"
              element={<SignupPage styles={formStyles} />}
            />
            <Route path="" element={<PrivateRoute />}>
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
