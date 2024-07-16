import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const [emailOk, setEmailOk] = useState();
    const [pinOk, setPinOk] = useState();

    const handleLoginForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const emailOrPhone = form.emailOrPhone.value;
        const pin = form.pin.value;

        if (!/^\d{5}$/.test(pin)) {
            toast.error('PIN must be a 5-digit number.')
            return
        }

        const loginInfo = {
            emailOrPhone: emailOrPhone,
            pin: pin
        }

        axios.get('http://localhost:5000/login', loginInfo)
            .then(res => {
                console.log(res);

            })
            .catch(error => console.log(error))
    }

    console.log(emailOk, pinOk);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-900">Login to QuickCash</h2>
                <form className="space-y-6" onSubmit={handleLoginForm}>
                    <div>
                        <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700">Email or Phone</label>
                        <input
                            id="emailOrPhone"
                            name="emailOrPhone"
                            type="text"
                            autoComplete="emailOrPhone"
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="pin" className="block text-sm font-medium text-gray-700">PIN</label>
                        <input
                            id="pin"
                            name="pin"
                            type="password"
                            autoComplete="current-pin"
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;