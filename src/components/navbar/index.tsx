import Link from 'next/link';
import React from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const ctx = React.useContext(AuthContext);

  const handleSignOut = () => {
    ctx.signOut();
  };

  return (
    <nav className="flex justify-between md:px-4 md:py-3 bg-blue-500 bg-gradient-to-t from-blue-500 to-blue-600 shadow-sm shadow-black/40 items-center sticky">
      <h1 className="text-2xl font-bold text-gray-200 font-mono tracking-widest drop-shadow-md">
        /DASHBOARD
      </h1>
      <div className="text-gray-200 hover:text-white drop-shadow-md">
        <Link onClick={handleSignOut} href="/">
          Sair
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
