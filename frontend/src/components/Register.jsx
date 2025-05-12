import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const [message, setMessage] = useState("");
    const { registerUser, signInWithGoogle } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await registerUser(data.email, data.password);
            alert("User registered successfully!");
            navigate("/");
        } catch (error) {
            setMessage("Please provide a valid email and password");
            console.error(error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert("Login successful!");
            navigate("/");
        } catch (error) {
            alert("Google sign-in failed!");
            console.error(error);
        }
    };

    return (
        <div className="min-h-[calc(100vh-120px)] flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg px-8 py-10">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Создать свой аккаунт 📝</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                        <input
                            {...register("email", { required: true })}
                            type="email"
                            id="email"
                            placeholder="email@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Пароль</label>
                        <input
                            {...register("password", { required: true })}
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    {message && <p className="text-red-500 text-sm mb-4">{message}</p>}
                    <button
                        type="submit"
                        className="w-full bg-[#3057FF] hover:bg-[#1f3ed9] text-white font-semibold py-2.5 rounded-md transition"
                    >
                        Зарегистрироваться
                    </button>
                </form>

                <p className="mt-4 text-sm text-center text-gray-600">
                    У вас уже есть аккаунт?{" "}
                    <Link to="/login" className="text-[#3057FF] hover:underline">Войти</Link>
                </p>

                <div className="mt-6">
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center gap-2 border border-gray-300 text-[#282828] hover:bg-[#F4F4FF] py-2.5 rounded-md transition"
                    >
                        <FaGoogle />
                        Войти через Google
                    </button>
                    <p className="mt-6 text-center text-xs text-gray-400">© 2025 Smart People.Все права защищены.</p>
                </div>
            </div>
        </div>
    );
};

export default Register;
