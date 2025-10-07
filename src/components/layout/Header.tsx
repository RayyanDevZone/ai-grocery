import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MapPin, Search, ShoppingCart, User, Menu, X, Tag } from 'lucide-react';
import { Logo } from '../icons';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = 3;

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 p-2 rounded-md transition-colors ${
      isActive ? 'text-brand-green bg-brand-green/10' : 'text-neutral-600 hover:bg-neutral-200/50'
    }`;

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `block py-2 px-4 text-lg rounded-md ${
    isActive ? 'bg-brand-green text-white' : 'text-neutral-700 hover:bg-neutral-200'
  }`;

  const navItems = (
    <>
      <NavLink to="/account" className={navLinkClasses}>
        <User className="h-5 w-5" />
        <span className="hidden lg:inline">Account</span>
      </NavLink>
      <NavLink to="/cart" className={navLinkClasses}>
        <div className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-yellow text-xs font-bold text-neutral-800">
              {cartItemCount}
            </span>
          )}
        </div>
        <span className="hidden lg:inline">Cart</span>
      </NavLink>
    </>
  );

  return (
    <header className="sticky top-0 z-40 bg-white/80 shadow-sm backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" aria-label="FreshCart Home">
            <Logo />
          </Link>

          <div className="hidden flex-1 justify-center px-8 lg:flex">
            <div className="w-full max-w-lg">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full rounded-full border border-neutral-300 bg-neutral-100 py-2.5 pl-12 pr-4 text-neutral-700 transition-colors focus:border-brand-green focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                />
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            {navItems}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 text-neutral-600 hover:bg-neutral-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 w-full border-t border-neutral-200 bg-white p-4 shadow-lg md:hidden"
          >
            <nav className="flex flex-col gap-4">
              <NavLink to="/" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink to="/account" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Account</NavLink>
              <NavLink to="/cart" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Cart</NavLink>
              <Link to="/login" className="mt-2 w-full rounded-md bg-brand-green py-2 text-center text-white" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
