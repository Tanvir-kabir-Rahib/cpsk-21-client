import { Link } from "react-router-dom";

const Login = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const form = e.target.form;
        const email = form.email.value;
        const password = form.password.value;
    
        console.log(email, password);
    
      };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card lg:w-6/12 sm:w-10/12 shadow-2xl bg-base-100">
                <div className="card-body">
                    <form className="">
                        <p className="text-center text-3xl font-bold">Login Now</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" name="number" placeholder="Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleSubmit} className="btn text-white bg-lime-500">Login</button>
                        </div>
                    </form>
                        <p className="mt-4 text-center">Create new account? <Link className="text-lime-600 hover:underline" to={'/register'}>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;