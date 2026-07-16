import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { auth, googleProvider } from "../../firebase/firebase";
function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
const navigate = useNavigate();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      newErrors.email = "Email is invalid";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.password;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const isValid = validateForm();
  if (!isValid) return;

  setLoading(true);
  setSuccess("");
  setFirebaseError("");

  try {
    if (isLogin) {
      await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      setSuccess("Signed in successfully!");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });

      setSuccess("Account created successfully!");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    }

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  } catch (error) {
    console.error("Firebase authentication error:", error);

    if (error instanceof Error) {
      setFirebaseError(error.message);
    } else {
      setFirebaseError("Authentication failed. Please try again.");
    }
  } finally {
    setLoading(false);
  }
};

 const handleGoogleLogin = async () => {
  setLoading(true);
  setSuccess("");
  setFirebaseError("");

  try {
    await signInWithPopup(auth, googleProvider);

    setSuccess("Signed in with Google successfully!");

    setTimeout(() => {
      navigate("/");
    }, 1000);
  } catch (error) {
    console.error("Google login error:", error);

    if (error instanceof Error) {
      setFirebaseError(error.message);
    } else {
      setFirebaseError("Google sign-in failed.");
    }
  } finally {
    setLoading(false);
  }
  console.log("Google button clicked");
};

  return (
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
          <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Welcome to Vision AI
          </h1>

          <p className="mt-6 text-gray-400 leading-8">
            Build smarter, faster, and more beautiful digital products with
            modern AI tools.
          </p>

          <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-black/40 p-6">
            <p className="text-cyan-400 font-semibold">AI Dashboard Preview</p>
            <div className="mt-6 h-40 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-6 sm:p-10"
        >
          <Link
            to="/"
            className="text-cyan-400 hover:text-purple-400 transition"
          >
            ← Back Home
          </Link>

          <h2 className="mt-8 text-3xl sm:text-4xl font-bold">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>

          <p className="mt-3 text-gray-400">
            {isLogin
              ? "Sign in to continue to Vision AI."
              : "Sign up and start your AI journey."}
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3 hover:bg-white/10 transition disabled:opacity-50"
            >
              <FcGoogle size={22} />
              Google
            </button>

            <button
              type="button"
              disabled={loading}
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3 hover:bg-white/10 transition disabled:opacity-50"
            >
              <FaGithub size={22} />
              GitHub
            </button>
          </div>

          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          {success && (
            <p className="mb-4 rounded-xl border border-green-400/30 bg-green-400/10 p-3 text-green-400 text-sm">
              {success}
            </p>
          )}
{firebaseError && (
  <p className="mb-4 rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-400">
    {firebaseError}
  </p>
)}
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4 outline-none focus:border-cyan-400 transition"
                />

                {errors.name && (
                  <p className="mt-2 text-red-400 text-sm">{errors.name}</p>
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
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4 outline-none focus:border-cyan-400 transition"
              />

              {errors.email && (
                <p className="mt-2 text-red-400 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4 pr-12 outline-none focus:border-cyan-400 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <IoEyeOffOutline size={22} />
                  ) : (
                    <IoEyeOutline size={22} />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="mt-2 text-red-400 text-sm">{errors.password}</p>
              )}
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm text-gray-400">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-cyan-400 hover:text-purple-400"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 py-4 font-semibold disabled:opacity-50"
            >
              {loading ? "Loading..." : isLogin ? "Sign In" : "Sign Up"}
            </motion.button>
          </form>

          <p className="mt-6 text-center text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}

            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({ name: "", email: "", password: "" });
                setSuccess("");
              }}
              className="ml-2 text-cyan-400 hover:text-purple-400 font-semibold"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Auth;