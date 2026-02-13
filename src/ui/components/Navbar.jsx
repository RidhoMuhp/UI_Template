// components/VscodeNavbar.jsx
import { Moon, Search } from "lucide-react";

export default function VscodeNavbar() {
  return (
    <nav className="w-full bg-gray-100 rounded-lg border border-gray-300 px-6 py-2 flex items-center justify-between">
      {/* Left Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://code.visualstudio.com/favicon.ico"
          alt="VS Code"
          className="w-6 h-6"
        />
        <span className="font-semibold text-gray-800">
          Visual Studio Code
        </span>
      </div>

      {/* Center Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 text-sm font-medium">
        <li className="hover:text-black cursor-pointer">Docs</li>
        <li className="hover:text-black cursor-pointer">Updates</li>
        <li className="hover:text-black cursor-pointer">Blog</li>
        <li className="hover:text-black cursor-pointer">API</li>
        <li className="hover:text-black cursor-pointer">Extensions</li>
        <li className="hover:text-black cursor-pointer">MCP</li>
        <li className="hover:text-black cursor-pointer">FAQ</li>
        <li className="hover:text-black cursor-pointer">Events</li>
      </ul>

      {/* Right Icons + Button */}
      <div className="flex items-center gap-4">
        <Moon className="w-5 h-5 text-gray-700 cursor-pointer hover:text-black" />
        <Search className="w-5 h-5 text-gray-700 cursor-pointer hover:text-black" />

        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 transition">
          Contact
        </button>
      </div>
    </nav>
  );
}
