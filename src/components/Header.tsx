"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import Button from './Button';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from './Icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  // Don't render the header on auth pages like /login
  if (pathname === '/login' || pathname === '/signup') {
    return null;
  }

  return (
    <header className="bg-indigo-600 text-white shadow-md relative z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
        <h1 className="text-2xl font-bold">
          <Link href={user ? "/todos" : "/login"} className="text-white hover:text-indigo-100">
            My Todo App
          </Link>
        </h1>
        {user && (
          <>
            <div className="sm:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white" aria-label="Toggle menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                </svg>
              </button>
            </div>
            <ul className={`
              ${isMenuOpen ? 'flex' : 'hidden'} 
              flex-col items-center gap-4 p-4 
              absolute top-full left-0 right-0 bg-indigo-600 
              sm:flex sm:flex-row sm:items-center sm:gap-4 sm:static sm:bg-transparent sm:p-0
            `}>
              <li className="text-sm text-indigo-200">
                {user.email}
              </li>
              <li>
                <button
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className="p-2 rounded-full text-indigo-200 hover:bg-indigo-700"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
                </button>
              </li>
              <li>
                <Button variant="secondary" size="sm" onClick={handleLogout}>Logout</Button>
              </li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
