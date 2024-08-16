

import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthPovider";


const Login = () => {
  const {signIn} = useContext(AuthContext)
    const handleLogin = (e) =>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log(email,password)

    signIn(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user)
    })
    .catch(error=>console.log(error))
    }
    return (
        <div className="hero bg-base-200 min-h-screen rounded-lg my-8">
  <div className="hero-content flex-col lg:flex-row gap-20">
    <div className="text-center lg:text-left">
      <img src={login} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-2xl text-center mt-4 font-bold">Login now!</h1>

      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          
          <input className="btn btn-primary bg-orange-600" type="submit" value="Login" />
        </div>
      </form>
      <p className="text-md text-center my-4">New here <Link to='/signup' className="text-orange-600">SignUp</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;