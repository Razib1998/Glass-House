import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../../Context/ContextProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(myContext);
  const navigate = useNavigate();
  // google login

  

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // Sign In Method

    signInUser(email, password)
      .then((result) => {
        e.target.reset();
        navigate("/");
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // google Sign In
  
const handleGoogleLogin = ()=>{
  signInWithGoogle()
  .then(result =>{
     navigate("/");
    console.log(result.user)
  })
  .catch(error =>{
    console.error(error)
  })
  
}
  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div>
            <h2 className="text-2xl text-center font-bold">Or</h2>
            <span onClick={handleGoogleLogin} className=" mt-4  text-6xl font-bold flex justify-center"> 
              <FcGoogle className="bg-gray-200 p-2"></FcGoogle>
            </span>
          </div>
          <div className="text-xl ml-10">
            <p>
              New here? Please{" "}
              <Link to={"/register"}>
                <button className="btn btn-link text-xl">Register</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
