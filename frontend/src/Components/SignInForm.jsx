const SignInForm = () => {
  return (
    <main className="center">
      <section className="wrapper">
        <h1 className="text-4xl">Sign In</h1>
        <div className="form-wrapper">
          <label>Username or Email</label>
          <input type="text" className="bg-slate-200" />
          <label>Password</label>
          <input type="text" className="bg-slate-200" />
          <button type="submit" className="common-btn">
            Sign In
          </button>
        </div>
        <p>Forgot your password?</p>
        <p>
          Don't have an account? <span>Sign Up</span>
        </p>
      </section>
    </main>
  );
};

export default SignInForm;
