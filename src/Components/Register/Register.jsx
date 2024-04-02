
const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

    }

    return (
        <div className="border">
            <div className="mx-auto md:w-1/2 bg-gray-400 text-center py-12">
                <h1 className="text-3xl font-bold mb-4">Please Register</h1>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-3/4 py-2 px-4" placeholder="Email Address" type="email" name="email" id="" />
                    <br />
                    <input className="mb-4 w-3/4 py-2 px-4" placeholder="Password" type="password" name="password" id="" />
                    <br />
                    <input className="btn btn-secondary text-lg font-bold mb-4 w-3/4" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;