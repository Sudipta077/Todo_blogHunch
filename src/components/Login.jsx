import React from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
    return (
        <>
            <form className="bg-slate-300 w-fit p-3 mx-auto mt-10 rounded-2xl shadow-md">
                <h1 className="text-center font-serif font-bold mb-10">Login</h1>
                <div className="mb-3  flex gap-2">
                 
                    <input type="email" className="form-control p-1" id="email"  placeholder="email"/>
                </div>

                <div className="mb-3  flex gap-2">
                   
                    <input type="password" className="form-control p-1" id="password" placeholder="password" />
                </div>
                
                <button type="submit" className=" button w-fit text-slate-50 p-2 bg-slate-800 hover:cursor-pointer m-5 rounded-xl">
                    <NavLink to='/'>
                            submit
                    </NavLink>
                    </button>
                <div className="toggle">
                    <p>Don't have account ?</p>
                    <NavLink to='/register'>Click here</NavLink>
                </div>
            </form>
        </>
    );
}
export default Login;