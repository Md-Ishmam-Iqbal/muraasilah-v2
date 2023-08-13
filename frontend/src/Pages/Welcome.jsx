import { useState, useEffect } from "react";
import { gsap } from "gsap";

const Welcome = () => {
  const [isNewUser, setIsNewUser] = useState(null);

  useEffect(() => {
    // Animate the letters on page load
    gsap.fromTo(
      ".welcome-letter",
      { opacity: 0, x: -1 },
      { opacity: 0.8, x: 0, duration: 0.5, stagger: 0.2 }
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
      <div>
        {isNewUser ? (
          <h1 className="text-6xl font-light text-slate-900 tracking-normal uppercase">
            {/* Wrap each letter in a span with a specific class */}
            {createLetterElements("Welcome to Muraasilat, User.")}
          </h1>
        ) : (
          <h1 className="text-6xl font-light text-slate-900 tracking-normal uppercase">
            {createLetterElements("Welcome Back, User.")}
          </h1>
        )}
        <button className="common-btn" onClick={() => setIsNewUser(!isNewUser)}>
          Test newUser
        </button>
      </div>
    </main>
  );
};

export default Welcome;
