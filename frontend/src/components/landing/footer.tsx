import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineArrowNarrowRight, HiOutlineClipboardCopy } from "react-icons/hi";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "info@kuwaitinvestments.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-6 sm:px-10 rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left CTA Section */}
        <div className="space-y-6">
          <p className="text-sm text-indigo-400 font-semibold uppercase">Contact Us</p>
          <h2 className="text-3xl font-bold leading-tight max-w-md">
            Let’s Grow Your Wealth. With Us.
          </h2>
          <button className="flex items-center gap-2 bg-white text-gray-900 px-6 py-2 rounded-full font-medium shadow hover:bg-gray-100 transition">
            Schedule a call now <HiOutlineArrowNarrowRight className="w-5 h-5" />
          </button>

          <div className="space-y-2">
            <p className="text-sm text-gray-400 uppercase">Or email us at</p>
            <button
              onClick={copyEmail}
              className="bg-gray-800 text-sm px-4 py-2 rounded-full flex items-center gap-2 w-max hover:bg-gray-700 transition"
            >
              {email}
              <HiOutlineClipboardCopy className="w-4 h-4 text-indigo-400" />
              {copied && <span className="text-green-400 text-xs ml-2">Copied</span>}
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-10 md:col-span-2 md:grid-cols-3">
          <div>
            <p className="text-sm text-indigo-400 font-semibold mb-4 uppercase">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-indigo-400">Home</a></li>
              <li><a href="/about" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="/services" className="hover:text-indigo-400">Services</a></li>
              <li><a href="/blog" className="hover:text-indigo-400">Blog</a></li>
              <li><a href="/contact" className="hover:text-indigo-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-indigo-400 font-semibold mb-4 uppercase">Investments</p>
            <ul className="space-y-2 text-sm">
              <li><a href="/real-estate" className="hover:text-indigo-400">Real Estate</a></li>
              <li><a href="/wealth" className="hover:text-indigo-400">Wealth Management</a></li>
              <li><a href="/consulting" className="hover:text-indigo-400">Consulting</a></li>
              <li><a href="/advisory" className="hover:text-indigo-400">Advisory</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-indigo-400 font-semibold mb-4 uppercase">Information</p>
            <ul className="space-y-2 text-sm">
              <li><a href="/terms" className="hover:text-indigo-400">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-indigo-400">Privacy Policy</a></li>
              <li><a href="/cookies" className="hover:text-indigo-400">Cookie Settings</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-xs text-gray-500">© Kuwait Investment Company 2024. All rights reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-indigo-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-indigo-400"><FaTwitter /></a>
          <a href="#" className="hover:text-indigo-400"><FaInstagram /></a>
          <a href="#" className="hover:text-indigo-400"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}
