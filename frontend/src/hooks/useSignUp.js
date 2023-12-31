import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (values) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/users", {
        ...values,
      });

      if (response.status === 201) {
        // save user to localStorage
        localStorage.setItem("user", JSON.stringify(response.data));

        // Update auth context
        dispatch({ type: "LOGIN", payload: response.data });

        setIsLoading(false);
        navigate("/welcome", { state: { isNewUser: true } });
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during signup."); // Set a generic error message
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
