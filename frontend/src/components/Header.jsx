import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import {
  FiHome,
  FiInfo,
  FiPhone,
  FiLogIn,
  FiUserPlus,
  FiSun,
  FiMoon,
} from "react-icons/fi";

import logo from "../assets/fitvia.png";

const Header = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <>
      {/* HEADER */}

      <header className="fixed top-0 inset-x-0 z-50">
        <div
          className={`h-20 flex items-center justify-between px-5 md:px-10 lg:px-16 backdrop-blur-2xl border-b transition-all duration-300 ${
            darkMode
              ? "bg-[#0F172A]/90 border-[#7C3AED]/20 shadow-[0_8px_35px_rgba(0,0,0,.35)]"
              : "bg-white/90 border-[#A78BFA] shadow-lg"
          }`}
        >
          {/* LOGO */}

          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group"
          >
            <img
              src={logo}
              alt="FitNova"
              className="w-15 h-15 object-contain transition-all mt-3 duration-300 group-hover:scale-110"
            />

            <div className="leading-none">

              <h1 className="text-3xl font-black tracking-tight bg-linear-to-r from-[#C4B5FD] via-[#7C3AED] to-[#5B21B6] bg-clip-text text-transparent">
                FitNova
              </h1>

              <p
                className={`text-[10px] uppercase tracking-[0.35em] ${
                  darkMode
                    ? "text-[#A78BFA]/80"
                    : "text-gray-500"
                }`}
              >
                AI Health & Fitness
              </p>

            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden md:flex items-center gap-2">
            {[
              { title: "Home", to: "/" },
              { title: "About", to: "/about" },
              { title: "Contact", to: "/contact" },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  darkMode
                    ? "text-gray-300 hover:text-[#C4B5FD] hover:bg-[#7C3AED]/10"
                    : "text-gray-700 hover:text-[#6D28D9] hover:bg-[#EDE9FE]"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}

          <div className="hidden md:flex items-center gap-3">

            {/* THEME */}

            <button
              onClick={toggleTheme}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                darkMode
                  ? "bg-white/5 border border-[#7C3AED]/30 hover:bg-[#7C3AED]/10"
                  : "bg-[#F5F3FF] border border-[#A78BFA] hover:bg-[#EDE9FE]"
              }`}
            >
              {darkMode ? (
                <FiSun className="text-xl text-yellow-400" />
              ) : (
                <FiMoon className="text-xl text-[#6D28D9]" />
              )}
            </button>

            {/* LOGIN */}

            <button
              onClick={() => navigate("/login")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border transition-all duration-300 ${
                darkMode
                  ? "border-[#7C3AED]/50 text-white hover:bg-[#7C3AED]/10 hover:border-[#A78BFA]"
                  : "border-[#7C3AED] text-[#6D28D9] hover:bg-[#EDE9FE]"
              }`}
            >
              <FiLogIn className="text-lg" />
              Login
            </button>

            {/* SIGNUP */}

            <button
              onClick={() => navigate("/signup")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white bg-linear-to-r from-[#A78BFA] via-[#7C3AED] to-[#6D28D9] hover:shadow-[0_0_25px_rgba(198,123,82,.45)] transition-all duration-300"
            >
              <FiUserPlus className="text-lg" />
              Create Account
            </button>

          </div>

          {/* MOBILE */}

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden"
          >
            <HiOutlineMenu
              className={`text-4xl ${
                darkMode
                  ? "text-[#A78BFA]"
                  : "text-[#6D28D9]"
              }`}
            />
          </button>
        </div>
      </header>
            {/* Mobile Overlay */}

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Drawer */}

      <aside
        className={`fixed right-0 top-0 h-screen w-[82vw] max-w-[320px] overflow-y-auto backdrop-blur-3xl border-l z-50 transition-transform duration-300 md:hidden ${
          darkMode
            ? "bg-linear-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] border-[#7C3AED]/20"
            : "bg-white border-[#A78BFA]"
        } ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer Header */}

        <div
          className={`flex items-center justify-between px-5 h-20 border-b ${
            darkMode
              ? "border-[#7C3AED]/20"
              : "border-[#A78BFA]"
          }`}
        >
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="FitNova"
              className="w-10 h-10 object-contain"
            />

            <div className="leading-none">
              <h1 className="text-2xl font-black bg-linear-to-r from-[#C4B5FD] via-[#7C3AED] to-[#5B21B6] bg-clip-text text-transparent">
                FitNova
              </h1>

              <p
                className={`text-[10px] uppercase tracking-[0.3em] ${
                  darkMode
                    ? "text-[#A78BFA]/70"
                    : "text-gray-500"
                }`}
              >
                AI Health & Fitness
              </p>
            </div>
          </Link>

          <button
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            <HiOutlineX
              className={`text-4xl ${
                darkMode
                  ? "text-[#7C3AED]"
                  : "text-[#6D28D9]"
              }`}
            />
          </button>
        </div>

        {/* Drawer Navigation */}

        <nav className="px-4 py-5">
          <div className="space-y-2">
            {[
              {
                title: "Home",
                icon: <FiHome />,
                to: "/",
              },
              {
                title: "About",
                icon: <FiInfo />,
                to: "/about",
              },
              {
                title: "Contact",
                icon: <FiPhone />,
                to: "/contact",
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${
                  darkMode
                    ? "text-gray-300 hover:bg-[#7C3AED]/10 hover:text-[#C4B5FD]"
                    : "text-gray-700 hover:bg-[#EDE9FE] hover:text-[#6D28D9]"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
                    {/* Theme Toggle */}

          <div
            className={`mt-6 pt-6 border-t ${
              darkMode
                ? "border-[#7C3AED]/20"
                : "border-[#A78BFA]"
            }`}
          >
            <button
              onClick={toggleTheme}
              className={`w-full flex items-center justify-center gap-3 py-3 rounded-xl transition-all duration-300 ${
                darkMode
                  ? "bg-white/5 border border-[#7C3AED]/30 text-white hover:bg-[#7C3AED]/10"
                  : "bg-[#F5F3FF] border border-[#A78BFA] text-[#6D28D9] hover:bg-[#EDE9FE]"
              }`}
            >
              {darkMode ? (
                <>
                  <FiSun className="text-xl text-yellow-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <FiMoon className="text-xl text-[#6D28D9]" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Login / Signup */}

          <div
            className={`mt-6 pt-6 space-y-3 border-t ${
              darkMode
                ? "border-[#7C3AED]/20"
                : "border-[#A78BFA]"
            }`}
          >
            {/* Login */}

            <button
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
              className={`w-full flex items-center justify-center gap-3 py-3 rounded-xl border transition-all duration-300 ${
                darkMode
                  ? "border-[#7C3AED]/50 text-white hover:bg-[#7C3AED]/10 hover:border-[#A78BFA]"
                  : "border-[#7C3AED] text-[#6D28D9] hover:bg-[#EDE9FE]"
              }`}
            >
              <FiLogIn className="text-lg" />
              Login
            </button>

            {/* Signup */}

            <button
              onClick={() => {
                navigate("/signup");
                setMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-white bg-linear-to-r from-[#A78BFA] via-[#7C3AED] to-[#6D28D9] hover:shadow-[0_0_25px_rgba(198,123,82,.45)] transition-all duration-300"
            >
              <FiUserPlus className="text-lg" />
              Create Account
            </button>
          </div>
        </nav>

        {/* Footer */}

        <div
          className={`border-t p-5 ${
            darkMode
              ? "border-[#7C3AED]/20"
              : "border-[#A78BFA]"
          }`}
        >
          <p
            className={`text-center text-xs ${
              darkMode
                ? "text-[#A78BFA]/70"
                : "text-gray-500"
            }`}
          >
            © {new Date().getFullYear()} FitNova. All Rights Reserved.
          </p>
        </div>
      </aside>
          </>
  );
};

export default Header;