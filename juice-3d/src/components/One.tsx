import React from 'react';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#f4f9f4] font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-2 font-bold text-2xl text-[#2D4A22]">
          {/* <div className="w-8 h-8 bg-green-600 rounded-lg"></div> */}
          <Image
            src="/plantaLogo.png"
            alt="Planta Logo"
            width={32}
            height={32}
            className="object-contain rounded-2xl"
          />
          Planta
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-green-600">
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Community</a>
          <a href="#">Download</a>
          <a href="#">Blog</a>
        </div>
        <button className="bg-[#86bc25] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition">
          Get the app
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto text-center pt-6 md:pt-16 px-4 relative">
        <h1 className="text-2xl md:text-5xl font-extrabold text-[#1a1a1a] leading-tight tracking-tight">
          Your plants are so glad you are <br />
          here. It &rsquo;s plant{' '}
          <span className="bg-[#e2f0d9] px-4 pr-8 rounded-2xl italic">
            care time!
          </span>
        </h1>

        <p className="m-6 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
          Your plants are thriving because of you! They&rsquo;re so happy to
          have your care and attention. It&rsquo;s time to water them, trim any
          dry leaves, and maybe even give them some extra nutrients.
        </p>

        {/* <button className="mt-8 bg-[#86bc25] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
          Download app
        </button> */}

        <Image
          src="/mockupBanner.png"
          alt="mobile app showcase"
          width={1400}
          height={800}
          className="rounded-4xl mx-auto mb-6"
        />

        {/* Phone Mockups Placeholder */}
        {/* <div className="mt-16 flex justify-center items-end gap-4 md:gap-8 overflow-hidden"> */}
        {/* <div className="w-64 h-112.5 bg-white rounded-[3rem] border-[8px] border-black shadow-2xl transform -rotate-3 translate-y-10"> */}
        {/* Add content for left phone here */}
        {/* </div> */}
        {/* <div className="w-64 h-125 bg-white rounded-[3rem] border-8 border-black shadow-2xl z-10"> */}
        {/* Add content for middle phone here */}
        {/* </div> */}
        {/* <div className="w-64 h-112.5 bg-white rounded-[3rem] border-8 border-black shadow-2xl transform rotate-3 translate-y-10"> */}
        {/* Add content for right phone here */}
        {/* </div> */}
        {/* </div> */}
      </main>

      {/* Stats Section */}
      {/* <section className="bg-white py-16 px-10"> */}
      {/* <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"> */}
      {/* Black Stats Card */}
      {/* <div className="md:col-span-2 bg-black text-white p-10 rounded-4xl flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-300 overflow-hidden">
                  <p>Profile Image </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">32+</h3>
                  <p className="text-gray-400 text-xs">
                    Join 100K+ users growing with the Planta App!
                  </p>
                </div>
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-bold">100K+</h3>
                <p className="text-gray-400 text-xs">
                  Join 100K+ users growing with the Planta App!
                </p>
              </div>
            </div>
            <div className="mt-10 h-px bg-gray-800 w-full" />
            <div className="mt-6 flex justify-between text-xs text-gray-400">
              <p>Join 100K+ users growing with the Planta App!</p>
              <p>Download the Planta App and green collection today.</p>
            </div>
          </div> */}
      {/* <Image
            src="/BlackStatsCard.png"
            alt="Plant Stats"
            width={1000}
            height={800}
            // className="w-full h-auto object-contain rounded-2xl"
            className="
            md:col-span-2
            bg-black
            text-white
            p-10
            rounded-4xl
            flex
            flex-col
            justify-between"
          /> */}

      {/* Rating Card */}
      {/* <div className="bg-[#86bc25] p-10 rounded-4xl text-white flex flex-col justify-between relative overflow-hidden">
            <div>
              <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Top rated app
              </span>
              <h2 className="text-5xl font-bold mt-6">
                4.9<span className="text-yellow-300 text-3xl">*</span>
              </h2>
              <p className="mt-2 text-sm opacity-90">
                Trusted by 100K+ plant lovers.
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-48 bg-purple-400 rounded-t-full rotate-12"></div>
          </div> */}
      {/* </div> */}
      {/* </section> */}

      {/* Stats Section */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Black Stats Card */}
          <div className="md:col-span-2 bg-black text-white p-10 rounded-4xl flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="grid grid-cols-2">
                <div className="w-[80%] grid grid-cols-1 items-center gap-8">
                  {/* Profile Image */}
                  <div className="w-12 h-12 rounded-lg bg-gray-300 overflow-hidden"></div>
                  <p className="text-gray-400 text-xs">
                    Join 100K+ users growing with the Planta App!
                  </p>
                </div>
                <div className="grid grid-cols-1 items-start gap-8 text-left">
                  <h3 className="text-2xl font-bold">32+</h3>
                  <p className="text-gray-400 text-xs">
                    Download the Planta App and green collection today.
                  </p>
                </div>
              </div>
              {/* divider */}
              <div className="mx-10 w-px bg-gray-800 h-full" />
              <div className="grid grid-cols-1 items-start gap-8 text-left">
                <h3 className="text-2xl font-bold">100K+</h3>
                <div className="grid grid-cols-1 gap-4">
                  <p className="text-gray-400 text-xs mt-4">
                    Join 100K+ users growing with the Planta App!
                  </p>
                  <div className="bg-gray-300 w-[40%] rounded-4xl">.</div>
                </div>
              </div>
            </div>
            {/* <div className="mt-10 h-px bg-gray-800 w-full" /> */}
            {/* <div className="mt-6 flex justify-between text-xs text-gray-400">
              <p>Join 100K+ users growing with the Planta App!</p>
              <p>Download the Planta App and green collection today.</p>
            </div> */}
          </div>

          {/* Rating Card */}
          <div className="bg-[#86bc25] p-10 rounded-4xl text-white flex flex-col justify-between relative overflow-hidden">
            <div>
              <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Top rated app
              </span>
              <h2 className="text-5xl font-bold mt-6">
                4.9<span className="text-yellow-300 text-3xl">*</span>
              </h2>
              <p className="mt-2 text-sm opacity-90">
                Trusted by 100K+ plant lovers.
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-48 bg-purple-400 rounded-t-full rotate-12"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
