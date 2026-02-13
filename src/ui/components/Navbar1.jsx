// components/DoveeNavbar.jsx
export default function Navbar1() {
  return (
    <nav className="w-full bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl px-6 py-3 flex items-center justify-between shadow-sm max-w-7xl mx-auto mt-4">
      
      {/* Left Menu */}
      <ul className="flex gap-6 text-sm text-gray-600 font-medium">
        <li className="hover:text-black cursor-pointer">Personal</li>
        <li className="hover:text-black cursor-pointer">Business</li>
        <li className="hover:text-black cursor-pointer">Company</li>
        <li className="hover:text-black cursor-pointer">Blog</li>
      </ul>

      {/* Center Logo */}
      <div className="flex items-center gap-2 font-semibold text-lg">
        <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center text-white font-bold">
          D
        </div>
        <span>Dovee</span>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6 text-sm font-medium">
        <button className="text-gray-600 hover:text-black">Log in</button>

        <button className="bg-black text-white px-4 py-1.5 rounded-lg hover:bg-gray-900 transition flex items-center gap-1">
          Sign Up →
        </button>
      </div>

    </nav>
  );
}
