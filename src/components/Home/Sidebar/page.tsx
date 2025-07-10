import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { MoveUp } from "lucide-react";

export default function VerticalSidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-16 bg-[rgba(11,11,11,1)] flex flex-col items-center justify-between py-6 z-50">
      <div className="text-white text-2xl font-bold">
        <a href="/">Y</a>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <MoveUp className="text-white w-5 h-5 mb-8" />
        <Link
          href="/contact"
          className="transform -rotate-90 text-sm tracking-widest text-white hover:text-gray-400 whitespace-nowrap mb-8"
        >
          contact
        </Link>
        
        {/* Divider */}
        <div className="w-8 h-px bg-white" />

        {/* Social Icons */}
        <div className="flex flex-col items-center space-y-4 text-white text-lg">
          <Link href="https://github.com/yasserfedsi" target="_blank">
            <FaGithub className="hover:text-gray-400 transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/yasser-fedsi" target="_blank">
            <FaLinkedin className="hover:text-gray-400 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}
