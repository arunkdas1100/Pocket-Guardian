import React from 'react';
import { signInWithGoogle } from '../firebaseConfig';
import logo from './imagee.png'; // Import your logo

const SignInPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
          {/* Sign-In Card with Logo and Text */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-96 text-center flex flex-col items-center">
            {/* Logo Section */}
            <div className="flex flex-col items-center mb-6">
              <img
                src={logo} // Use the imported image
                alt="Pocket Guardian Logo"
                className="h-45 w-24 mb-4" // Adjusted size for better fit
              />
              {/* Text Section */}
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-700">Pocket Guardian</h1>
                <p className="text-gray-500">Your trusted companion for managing personal finances.</p>
              </div>
            </div>
      
            {/* Google Sign-In Button */}
            <button
              onClick={signInWithGoogle}
              className="w-full px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      );
      
};

export default SignInPage;
