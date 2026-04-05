import React from 'react';
import { BsRobot } from 'react-icons/bs';
import { IoSparkles } from 'react-icons/io5';
import { motion } from 'motion/react';
import { FcGoogle } from 'react-icons/fc';

function Auth() {
  return (
    <>
      <div>Auth Page</div>
      <div className="w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05 }}
          className="w-full max-w-md p-8 rounded-3xl bg-white shadow-2xl border border-gray-200"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-black text-white rounded-lg">
              <BsRobot size={32} className="p-1" />
            </div>
            <h2 className="font-semibold text-lg">InterviewIQ.AI</h2>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold text-center leading-snug mb-4">
            Continue with{' '}
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2">
              <IoSparkles size={16} />
              AI Smart Interview
            </span>
          </h1>

          <p className="text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8">
            Sign in to start AI-powered mock interviews, track your progress,
            and unlock detailed performance insights.
          </p>

          <motion.button
            whileHover={{ opacity: 0.9, scale: 1.03 }}
            whileTap={{ opacity: 1, scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full shadow-md"
          >
            <FcGoogle size={24} />
            Continue with Google
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}

export default Auth;

{
  /* <h2 className="text-2xl font-bold mb-6 text-center">
            Login to Your Account
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder=" "
              />
            </div>
          </form> */
}
