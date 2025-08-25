import React from 'react';

const Login = () => {
  return (
    <div className="min-h-[93vh] bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username or Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              placeholder="Enter your username or email"
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              placeholder="Enter your password"
              aria-required="true"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            aria-label="Sign in"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline"
            aria-label="Forgot your password?"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;