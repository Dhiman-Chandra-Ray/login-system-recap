import { useContext, useEffect } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const SignInPage = () => {
  const {signIn} = useContext(AuthContext);

  const handleSignIn = e => {
    e.preventDefault(),
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(result=> {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch(error => {
        const errorMessage = error.errorMessage;
        setError(errorMessage);
        console.error("Error signing in:", errorMessage);
      })

  };

  useEffect(()=> {
    document.title = "DhimanBD24 || SignIn";
  })

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>  
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p>Don't have an account? <Link to="/signUp" className="font-bold underline">Sign up</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
