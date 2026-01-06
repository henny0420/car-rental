"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Calendar, MapPin, ChevronRight, Search } from "lucide-react"; // Make sure you installed lucide-react

export default function Hero() {
  return (
    <div className="relative bg-gray-900 min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* 🌑 BACKGROUND EFFECTS */}
      {/* A large gradient blob to make the car pop */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* 👈 LEFT: TEXT CONTENT */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-sm text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Premium Fleet Available
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Drive the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Extraordinary.
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              Don't just rent a car. Experience the thrill of the world's most exclusive supercars. Instant booking, zero paperwork.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/cars" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition flex items-center gap-2">
                Browse Fleet <ChevronRight className="w-5 h-5" />
              </Link>
              <Link href="/how-it-works" className="px-8 py-4 rounded-full font-bold text-lg text-white border border-gray-700 hover:bg-gray-800 transition">
                How it works
              </Link>
            </div>

            {/* 🏆 Stats */}
            <div className="flex gap-8 pt-8 border-t border-gray-800 mt-8">
              <div>
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-gray-500 text-sm">Supercars</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-gray-500 text-sm">Support</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">0%</p>
                <p className="text-gray-500 text-sm">Hidden Fees</p>
              </div>
            </div>
          </div>

          {/* 👉 RIGHT: BIG CAR IMAGE */}
          <div className="relative">
            {/* The Circle behind the car */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-gray-800/50 to-transparent rounded-full z-0"></div>
            
            {/* 🚗 THE CAR IMAGE */}
            {/* Replace this src with your actual transparent car image */}
            <Image 
              src="https://res.cloudinary.com/demo/image/upload/v1692735732/porsche_car_transparent.png" 
              alt="Luxury Sports Car"
              width={800}
              height={500}
              className="relative z-10 drop-shadow-2xl hover:scale-105 transition duration-500"
              priority
            />
          </div>
        </div>

        {/* 👇 BOTTOM: FLOATING SEARCH BAR (The "Glass" Effect) */}
        <div className="mt-20 -mb-12 relative z-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-3xl shadow-2xl max-w-5xl mx-auto">
                <form className="grid grid-cols-1 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-700">
                    
                    {/* Location */}
                    <div className="px-4">
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Pick Up Location</label>
                        <div className="flex items-center gap-2 text-white">
                            <MapPin className="text-blue-500 w-5 h-5" />
                            <input type="text" placeholder="New York, USA" className="bg-transparent w-full outline-none placeholder-gray-500 font-medium" />
                        </div>
                    </div>

                    {/* Date */}
                    <div className="px-4 pt-4 md:pt-0">
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Pick Up Date</label>
                        <div className="flex items-center gap-2 text-white">
                            <Calendar className="text-blue-500 w-5 h-5" />
                            <input type="date" className="bg-transparent w-full outline-none text-white font-medium [color-scheme:dark]" />
                        </div>
                    </div>

                     {/* Return Date */}
                     <div className="px-4 pt-4 md:pt-0">
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Return Date</label>
                        <div className="flex items-center gap-2 text-white">
                            <Calendar className="text-blue-500 w-5 h-5" />
                            <input type="date" className="bg-transparent w-full outline-none text-white font-medium [color-scheme:dark]" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pl-4 pt-4 md:pt-0 flex items-center justify-center">
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-blue-600/30">
                            <Search className="w-5 h-5" /> Find Car
                        </button>
                    </div>

                </form>
            </div>
        </div>

      </div>
    </div>
  );
}