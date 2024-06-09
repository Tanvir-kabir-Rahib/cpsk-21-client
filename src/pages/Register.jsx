import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [passMatch, setPassMatch] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)

        const form = e.target.form;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;

        if (password !== confirm_password) {
            setPassMatch(false);
        }


        if (password === confirm_password) {
            console(email, password);
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="card lg:w-6/12 w-11/12 shadow-2xl bg-base-100">
            <div className="pb-8 card-body">
                <form className="">
                    <p className="text-center text-3xl font-bold">Register Now</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="displayName" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contact Number</span>
                        </label>
                        <input type="number" name="phoneNumber" placeholder="Phone Number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="Present Address" name="address" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name="confirm_password" placeholder="confirm password" className="input input-bordered" required />
                        {!passMatch && (
                            <div className="my-2">
                                <p className="text-red-500">Passwords do not match!</p>
                            </div>
                        )}
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleSubmit} className="btn text-white bg-lime-500">Register</button>
                    </div>
                </form>
                <div className="mt-6">
                </div>
                <p className="mt-4 text-center">Already have an account? <Link className="text-lime-600 hover:underline" to={'/login'}>Login Now</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Register;