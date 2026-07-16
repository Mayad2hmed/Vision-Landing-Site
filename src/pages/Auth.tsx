import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { auth, googleProvider } from "../firebase/firebase";

function Auth() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");
  const [firebaseError, setFirebaseError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
    };

    if (!isLogin && formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (formData.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    return (
      !newErrors.name &&
      !newErrors.email &&
      !newErrors.password
    );
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setFirebaseError("");
    setSuccess("");

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        setSuccess("Signed in successfully");
      } else {
        const userCredential =
          await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );

        await updateProfile(userCredential.user, {
          displayName: formData.name,
        });

        setSuccess("Account created successfully");
      }

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error: any) {
      setFirebaseError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      await signInWithPopup(
        auth,
        googleProvider
      );

      navigate("/");
    } catch (error: any) {
      setFirebaseError(error.message);
    } finally {
      setLoading(false);
    }
  };return (
  <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10 overflow-hidden">
    <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-3xl top-10 left-10"></div>
    <div className="absolute w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-3xl bottom-10 right-10"></div>

    <div className="relative max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex flex-col justify-center p-10 bg-gradient-to-br from-cyan-500/10 to-purple-600/10"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Welcome to Vision AI
        </h1>

        <p className="mt-6 text-gray-400">
          Build smarter, faster, and more beautiful digital products with modern AI tools.
        </p>

        <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-black/40 p-6">
          <p className="text-cyan-400 font-semibold">
            AI Dashboard Preview
          </p>

          <div className="mt-6 h-40 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600"></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: .2 }}
        className="p-6 sm:p-10"
      >

        <Link
          to="/"
          className="text-cyan-400 hover:text-purple-400"
        >
          ← Back Home
        </Link>

        <h2 className="mt-8 text-4xl font-bold">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        <p className="mt-3 text-gray-400">
          {isLogin
            ? "Sign in to continue to Vision AI."
            : "Sign up and start your AI journey."}
        </p>

        <div className="mt-8 flex justify-center">
  <button
    type="button"
    onClick={handleGoogleLogin}
    disabled={loading}
    className="flex items-center justify-center gap-2 w-full sm:w-80 rounded-xl border border-white/10 bg-white/5 py-3 hover:bg-white/10 disabled:opacity-50"
  >
    <FcGoogle size={22} />
    <span>Google</span>
  </button>
</div>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10"></div>
          <span className="text-gray-500 text-sm">or</span>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        {success && (
          <p className="mb-4 rounded-xl bg-green-500/10 border border-green-500/30 p-3 text-green-400">
            {success}
          </p>
        )}

        {firebaseError && (
          <p className="mb-4 rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-red-400">
            {firebaseError}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {!isLogin && (
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4 outline-none focus:border-cyan-400"
              />

              {errors.name && (
                <p className="mt-2 text-red-400 text-sm">
                  {errors.name}
                </p>
              )}
            </div>
          )}

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4 outline-none focus:border-cyan-400"
            />

            {errors.email && (
              <p className="mt-2 text-red-400 text-sm">
                {errors.email}
              </p>
            )}
          </div>

          <div>

            <div className="relative">

              <input
                type={showPassword ? "text":"password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4 pr-12 outline-none focus:border-cyan-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword
                  ? <IoEyeOffOutline size={22}/>
                  : <IoEyeOutline size={22}/>}
              </button>

            </div>

            {errors.password && (
              <p className="mt-2 text-red-400 text-sm">
                {errors.password}
              </p>
            )}

          </div>

          <motion.button
            whileHover={{scale:1.03}}
            whileTap={{scale:.97}}
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 py-4 font-semibold disabled:opacity-50"
          >
            {loading
              ? "Loading..."
              : isLogin
                ? "Sign In"
                : "Sign Up"}
          </motion.button>

        </form>

        <p className="mt-6 text-center text-gray-400">

          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={()=>{
              setIsLogin(!isLogin);
              setFirebaseError("");
              setSuccess("");
              setErrors({
                name:"",
                email:"",
                password:"",
              });
            }}
            className="ml-2 text-cyan-400 font-semibold"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>

        </p>

      </motion.div>

    </div>
  </section>
);}

export default Auth;