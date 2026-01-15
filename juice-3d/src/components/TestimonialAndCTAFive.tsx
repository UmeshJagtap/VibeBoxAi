import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const TestimonialAndCTA = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Testimonial */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-32">
          <div className="relative">
            <div className="w-64 h-64 md:w-96 md:h-96 bg-[#eef5ee] rounded-full overflow-hidden">
              {/* <img
                src="/gardenerBoy.png"
                alt="Gardener"
                className="w-full h-full object-cover"
              /> */}
              <Image
                // src="/gardenerBoy.png"
                src="https://iili.io/fS5zIR9.png"
                alt="Gardener with beautiful plant"
                width={400}
                height={400}
                className="absolute top-0 left-0 w-full h-full pointer-events-none object-cover"
              />
            </div>
            {/* <div className="absolute top-4 left-0 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2">
              <span className="text-red-500">❤️</span>
              <span className="text-xs font-medium text-gray-500">
                Awesome App
              </span>
            </div> */}
          </div>

          <div className="flex-1 space-y-6">
            <Quote size={48} className="text-gray-900 fill-current" />
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 italic">
              Amazing app for plant lovers! 🌿 Easily identifies plants and
              gives perfect care tips.
              <span className="block font-bold mt-2">
                My never been healthier
              </span>
            </h3>
            <p className="font-medium text-gray-500">Mr. Johan smit</p>
            <div className="flex items-center gap-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>
              <span className="text-xs text-gray-400 uppercase tracking-widest">
                Rated on app store
              </span>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#76af41] rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group">
          <div className="max-w-md z-10 text-white space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              Download the app now and simplify plant care.
            </h2>
            <p className="text-green-50/80 text-sm">
              Download the app now and simplify plant care. Identify plants, get
              expert tips, and personalized schedules for thriving greenery.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-4xl flex items-center gap-3 hover:bg-gray-900 transition-colors">
                {/* <img src="/app-store.svg" className="w-6" alt="" /> */}
                <Image
                  // src="/appleLogo.png"
                  src="https://iili.io/fSl6orl.png"
                  alt="app-store"
                  width={40}
                  height={40}
                  className="w-8 h-8"
                  // className="absolute top-0 left-0 w-full h-full pointer-events-none"
                />
                <div className="text-left">
                  <p className="text-[10px]">Download on the</p>
                  <p className="font-bold">App Store</p>
                </div>
              </button>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-4xl flex items-center gap-3 hover:bg-gray-100 transition-colors">
                {/* <img src="/play-store.svg" className="w-6" alt="" /> */}
                <Image
                  // src="/playStoreLogo.png"
                  src="https://iili.io/fSl6z22.jpg"
                  alt="play-store"
                  width={40}
                  height={40}
                  className="w-8 h-8 rounded-4xl"
                  // className="absolute top-0 left-0 w-full h-full pointer-events-none"
                />
                <div className="text-left">
                  <p className="text-[10px]">Get it on</p>
                  <p className="font-bold">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          <div className="relative mt-12 md:mt-0 w-64 md:w-80 group-hover:scale-105 transition-transform duration-700">
            <Image
              // src="/mobileInHand.png"
              src="https://iili.io/fS7uAQe.png"
              alt="Hand holding phone"
              width={600}
              height={600}
              className="rounded-[2.5rem] drop-shadow-[-20px_20px_50px_rgba(0,0,0,0.3)]"
            />
          </div>

          {/* Decorative Leaf */}
          <div className="absolute bottom-0 right-0 text-8xl opacity-20 -rotate-12 translate-y-1/2">
            🌿
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAndCTA;
