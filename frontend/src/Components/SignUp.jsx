const SignUp = () => {
  return (
    <main className="center">
      <section className="wrapper">
        <h1 className="text-4xl">Sign Up</h1>
        <div className="form-wrapper">
          <label>Email address</label>
          <input type="text" className="bg-slate-200" />
          <label>Username</label>
          <input type="text" className="bg-slate-200" />
          <label>Password</label>
          <input type="text" className="bg-slate-200" />
          <label>Re-type password</label>
          <input type="text" className="bg-slate-200" />
          <button type="submit" className="common-btn">
            Sign Up
          </button>
        </div>
        <p>
          Already have an account? <span>Sign In</span>
        </p>
      </section>
    </main>
  );
};

export default SignUp;
