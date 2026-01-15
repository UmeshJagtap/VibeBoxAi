import React from 'react';
import Image from 'next/image';

interface FeatureCard {
  title: string;
  description: string;
  imageSrc: string;
  bgColor: string;
}

const features: FeatureCard[] = [
  {
    title: 'Plant scanner',
    description: 'The Plants App offers personalized care reminders.',
    // imageSrc: '/phone-mockup-1.png', // Replace with your actual asset path
    imageSrc: 'https://iili.io/fS7xFlp.png', // Replace with your actual asset path
    bgColor: 'bg-[#f8f8f8]',
  },
  {
    title: 'Track and enjoy',
    description: 'The Plants App offers personalized care reminders.',
    // imageSrc: '/phone-mockup-2.png',
    imageSrc: 'https://iili.io/fS7xxxs.png',
    bgColor: 'bg-red-500',
    // bgColor: 'bg-gray-100',
  },
  {
    title: 'Browse and explore',
    description: 'The Plants App offers personalized care reminders.',
    // imageSrc: '/phone-mockup-3.png',
    imageSrc: 'https://iili.io/fS7xzWG.png',
    bgColor: 'bg-[#f8f8f8]',
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Key feature of Plant app
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The Plants App offers personalized care reminders, expert tips, and
            growth tracking for 200+ plants, all in one user-friendly app.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index, bgColor) => (
            <div key={index} className="flex flex-col">
              {/* Phone Mockup Container */}
              <div className="bg-[#f8f8f8] rounded-[2.5rem] aspect-[4/5] flex items-end justify-center overflow-hidden mb-6 transition-transform hover:scale-[1.02] duration-300">
                {/* <div className={`${bgColor} rounded-[2.5rem] aspect-[4/5] flex items-end justify-center overflow-hidden mb-6 transition-transform hover:scale-[1.02] duration-300`}> */}
                <div className="relative w-full h-full flex items-between justify-center">
                  {/* Inner Phone Frame Style */}
                  <Image
                    src={feature.imageSrc}
                    alt={feature.title}
                    width={200}
                    height={200}
                    className="w-[100%] h-auto object-contain rounded-t-[2rem] shadow-2xl"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-snug">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// File: juice-3d/src/components/Three.tsx
// import Image from 'next/image';

// const features = [
//   {
//     title: 'Plant scanner',
//     description: 'The Plants App offers personalized care reminders.',
//     image: '/mockup1.png', // Use your generated images here
//   },
//   {
//     title: 'Track and enjoy',
//     description: 'The Plants App offers personalized care reminders.',
//     image: '/mockup2.png',
//   },
//   {
//     title: 'Browse and explore',
//     description: 'The Plants App offers personalized care reminders.',
//     image: '/mockup3.png',
//   },
// ];

// export default function Features() {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-brand-dark mb-4">
//             Key feature of Plant app
//           </h2>
//           <p className="text-gray-500 max-w-2xl mx-auto">
//             The Plants App offers personalized care reminders, expert tips, and
//             growth tracking for 200+ plants, all in one user-friendly app.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((f, i) => (
//             <div key={i} className="group">
//               <div className="bg-[#f0f0f0] rounded-[3rem] p-8 pb-0 aspect-[4/5] overflow-hidden mb-6 flex items-end justify-center">
//                 <div className="relative w-full h-[90%] transition-transform duration-500 group-hover:scale-105">
//                   <Image
//                     src={f.image}
//                     alt={f.title}
//                     fill
//                     className="object-contain object-bottom drop-shadow-2xl"
//                   />
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-brand-dark mb-2">
//                 {f.title}
//               </h3>
//               <p className="text-gray-400 text-sm">{f.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
