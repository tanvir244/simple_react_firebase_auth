import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";


const Register = () => {
    const [registerError, setRegisterError] = useState([]);
    const [success, setSuccess] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(accepted);

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 character or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should have at least one upper upper case cahracter');
            return;
        }
        else if(!accepted){
            setRegisterError('Please accept our terms and conditions!');
            return;
        }

        // reset error 
        setRegisterError('');
        setSuccess('');

        // create user 
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Registerd Successfully');
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message);
            })
    }

    return (
        <div className="my-20">
            <div className="mx-auto w-[92%] md:w-1/2 bg-gray-200 py-4 md:py-12">
                <h1 className="text-3xl font-bold mb-4 text-center">Please Register</h1>
                <form className="w-3/4 mx-auto" onSubmit={handleRegister}>
                    <input className="mb-4 py-2 px-4 w-full" placeholder="Email Address" type="email" name="email" id="" required />
                    <br />
                    <div className="mb-4 relative">
                        <input
                            className="w-full py-2 px-4"
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id=""
                            required />
                        <span className="absolute right-[4%] top-[22%] cursor-pointer text-2xl" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <IoMdEye /> : <IoEyeOffSharp />
                            }
                        </span>
                    </div>
                    <br />
                    <div className="w-full mx-auto flex gap-4">
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Accept our terms and conditions</label>
                    </div>
                    <br />
                    <input className="w-full btn btn-secondary text-lg font-bold mb-4" type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-500 font-bold text-center">{registerError}</p>
                }
                {
                    success && <p className="text-green-500 font-bold text-center">{success}</p>
                }
            </div>
        </div >
    );
};

export default Register;