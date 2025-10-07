import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/icons';
import { Mail, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginPage: React.FC = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-neutral-100 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center">
          <Logo className="mx-auto justify-center" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-neutral-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-neutral-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-brand-green hover:underline">
              Sign up
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="space-y-4 rounded-md shadow-sm">
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="h-5 w-5 text-neutral-400" />
              </span>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border-neutral-300 py-3 pl-10 pr-3 focus:border-brand-green focus:outline-none focus:ring-brand-green"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
               <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-neutral-400" />
              </span>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full rounded-md border-neutral-300 py-3 pl-10 pr-3 focus:border-brand-green focus:outline-none focus:ring-brand-green"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-neutral-300 text-brand-green focus:ring-brand-green"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-brand-green hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-md border border-transparent bg-brand-green py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-brand-green-dark focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
