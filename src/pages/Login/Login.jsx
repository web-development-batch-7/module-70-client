import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)


    const handleLogIn = () => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        const signUpUser = { email, password }
        // console.log(signUpUser);

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(e => console.log(e))

    }

    return (
        <div className=" py-8 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-center text-3xl font-bold'>Login</h1>
                        <form onSubmit={handleLogIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='text-center my-4'>New to Car Doctor  <Link to='/signup' className='text-orange-600 font-bold' >Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;