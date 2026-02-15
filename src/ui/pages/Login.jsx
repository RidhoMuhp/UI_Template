// pages/Login.jsx
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 p-6">
      
      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl grid md:grid-cols-2 overflow-hidden">
        
        {/* LEFT ILLUSTRATION */}
        <div className="hidden md:flex bg-purple-50 items-center justify-center p-10">
          <img
            src="https://illustrations.popsy.co/white/businesswoman-working.svg"
            alt="illustration"
            className="w-full max-w-xs"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 md:p-10">
          
          {/* Top Right Sign In */}
          <div className="flex justify-end text-sm text-gray-500 mb-4">
            Already have an account?
            <button className="ml-2 text-purple-600 font-medium hover:underline">
              Sign In
            </button>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800">Welcome to Focus!</h2>
          <p className="text-gray-500 text-sm mb-6">Register your account</p>

          {/* Form */}
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Chris"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Button */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg font-medium hover:opacity-90 transition">
              Login
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Create account with
            <div className="flex justify-center gap-4 mt-3">
              <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100">f</button>
              <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100">in</button>
              <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100">G</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
