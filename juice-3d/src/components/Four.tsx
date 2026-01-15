import Image from 'next/image';

export default function ShowcaseGallery() {
  return (
    <section className="py-20 px-4 md:px-10 bg-[#f9fbf9]">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4 text-3xl">🌿</div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          View our mobile app
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto px-6">
          The Plants App offers personalized care reminders, expert tips, and
          growth tracking for 200+ plants.
        </p>
      </div>

      <div className="bg-[#e4efe4] rounded-[3rem] p-6 md:p-12 overflow-hidden relative">
        {/* Decorative elements */}

        <div>
          <Image
            // src="/mockupGridHighRes.png"
            src="https://iili.io/fS7xqJI.png"
            alt="mobile app showcase"
            width={1400}
            height={600}
            className="rounded-4xl shadow-2xl mx-auto"
          />
        </div>
        <div className="absolute  bottom-30 right-4 text-5xl opacity-80">
          🍃
        </div>
        <div className="absolute z-10 top-60 left-4 text-5xl opacity-80">
          🍃
        </div>
        {/* Staggered Grid */}
        {/* <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-4 transform -rotate-2 scale-105">
          {Array.from({ length: 21 }).map((_, i) => (
            <div
              key={i}
              className={`bg-white rounded-[1.5rem] aspect-[9/19] shadow-xl border-[4px] border-black/5 
                      ${i % 2 === 0 ? 'translate-y-12' : '-translate-y-4'}`}
            >
              <div className="w-full h-full bg-gray-100 flex flex-col p-2 gap-2">
                <div className="w-full h-2/5 bg-gray-200 rounded-lg animate-pulse" />
                <div className="w-3/4 h-2 bg-gray-200 rounded animate-pulse" />
                <div className="w-1/2 h-2 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
