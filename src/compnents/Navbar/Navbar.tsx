import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import type { User } from "firebase/auth";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setShowProfile(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[999] border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">

      
        <a
          href="#home"
          className="text-xl sm:text-2xl font-bold text-cyan-400"
        >
          Vision AI
        </a>

       
      <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base text-gray-300">
  <a href="/#home" className="hover:text-cyan-400">
    Home
  </a>

  <a href="/#features" className="hover:text-cyan-400">
    Features
  </a>

  <a href="/#pricing" className="hover:text-cyan-400">
    Pricing
  </a>

  <Link to="/contact" className="hover:text-cyan-400">
  Contact
</Link>
</div>

    
        <div className="hidden md:block">
          {user ? (
            <div className="relative">

              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center gap-3"
              >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold border-2 border-cyan-400">
  {(user.displayName || user.email || "U")
    .charAt(0)
    .toUpperCase()}
</div>
              

                <span className="text-white">
                  {user.displayName || "User"}
                </span>
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-4 w-72 rounded-2xl bg-[#111] border border-white/10 shadow-2xl overflow-hidden">

                  <div className="p-6 flex flex-col items-center">

                  <div className="w-11 h-11 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg border-2 border-cyan-400">
  {(user.displayName || user.email || "U")
    .charAt(0)
    .toUpperCase()}
</div>
                    <h3 className="mt-4 text-lg font-bold">
                      {user.displayName || "Vision AI User"}
                    </h3>

                    <p className="text-gray-400 text-sm break-all">
                      {user.email}
                    </p>
                  </div>

                  <div className="border-t border-white/10 p-4">

                    <button
                      onClick={handleLogout}
                      className="w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 transition"
                    >
                      Logout
                    </button>

                  </div>

                </div>
              )}

            </div>
          ) : (
            <Link
              to="/auth"
              className="inline-flex px-5 lg:px-6 py-2.5 lg:py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold text-white hover:scale-105 transition-all"
            >
              Get Started
            </Link>
          )}
        </div>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
        </button>

      </div>

    
     {isOpen && (
  <div className="fixed top-[65px] sm:top-[73px] left-0 right-0 z-[999] md:hidden bg-black/95 border-t border-white/10 px-6 py-6 flex flex-col gap-5">

    <a href="/#home" onClick={() => setIsOpen(false)}>
      Home
    </a>

    <a href="/#features" onClick={() => setIsOpen(false)}>
      Features
    </a>

    <a href="/#pricing" onClick={() => setIsOpen(false)}>
      Pricing
    </a>

    <Link to="/contact" onClick={() => setIsOpen(false)}>
  Contact
</Link>

    {user ? (
      <>
        <div className="border-t border-white/10 pt-4">
          <p className="font-semibold text-white">
            {user.displayName || "Vision AI User"}
          </p>

          <p className="text-sm text-gray-400">
            {user.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-2 w-full rounded-full bg-red-500 py-3 hover:bg-red-600"
        >
          Logout
        </button>
      </>
    ) : (
      <Link
        to="/auth"
        className="mt-2 w-full text-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 py-3 font-semibold"
      >
        Get Started
      </Link>
    )}
  </div>
)}
    </nav>
  );
}

export default Navbar;