import { useEffect } from "react";
import { gsap } from "gsap";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Welcome = () => {
  const { user } = useAuthContext();
  const username = user.username;
  console.log("welcome page: ", username);
  const location = useLocation();
  const { isNewUser } = location.state || {};
  const navigate = useNavigate();

  useEffect(() => {
    // Animate the letters on page load
    gsap.fromTo(
      ".welcome-letter",
      { opacity: 0, x: -1 },
      { opacity: 1, x: 0, duration: 0.2, stagger: 0.13 }
    );
  }, []);

  const createLetterElements = (text) => {
    return [...text].map((letter, index) => (
      <span key={index} className="welcome-letter">
        {letter}
      </span>
    ));
  };

  return (
    <main className="centerPage">
      <div className="w-full text-center">
        {isNewUser ? (
          <h1 className="text-7xl font-light tracking-normal uppercase">
            {/* Wrap each letter in a span with a specific class */}
            {createLetterElements(`Welcome to Muraasilah, ${username}.`)}
          </h1>
        ) : (
          <h1 className="text-7xl font-light text-slate-900 tracking-normal uppercase">
            {createLetterElements(`Welcome Back, ${username}.`)}
          </h1>
        )}
        <button className="common-btn" onClick={() => navigate("/dashboard")}>
          To Dashboard{" "}
        </button>
      </div>
    </main>
  );
};

export default Welcome;
