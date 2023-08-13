import { useState } from "react";

const Welcome = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  return (
    <main className="centerPage">
      <div>
        {isNewUser ? (
          <h1>Welcome to Muraasilat, User</h1>
        ) : (
          <h1>Welcome Back, User</h1>
        )}
        <button className="common-btn" onClick={() => setIsNewUser(!isNewUser)}>
          Test newUser
        </button>
      </div>
    </main>
  );
};

export default Welcome;
