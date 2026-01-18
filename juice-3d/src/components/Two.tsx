// npm i lucide-react
import React from 'react';
import Image from 'next/image';
import { Search, Calendar, Bell, Leaf } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  iconBg,
}: FeatureCardProps) => (
  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-4">
    <div
      className={`${iconBg} w-10 h-10 rounded-full flex items-center justify-center text-white`}
    >
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function HeroSection() {
  const features = [
    {
      icon: <Search size={20} />,
      title: 'Plant identifier',
      description:
        'Scan any plant to identify it instantly! Get personalized care tips for watering, feeding, and sunlight.',
      iconBg: 'bg-red-400',
    },
    {
      icon: <Calendar size={20} />,
      title: 'Care schedules',
      description:
        'Scan any plant to identify it instantly! Get personalized care tips for watering, feeding, and sunlight.',
      iconBg: 'bg-green-600',
    },
    {
      icon: <Bell size={20} />,
      title: 'Reminder',
      description:
        'Scan any plant to identify it instantly! Get personalized care tips for watering, feeding, and sunlight.',
      iconBg: 'bg-blue-400',
    },
    {
      icon: <Leaf size={20} />,
      title: 'Plant identifier',
      description:
        'Scan any plant to identify it instantly! Get personalized care tips for watering, feeding, and sunlight.',
      iconBg: 'bg-orange-500',
    },
  ];

  return (
    <section className="bg-[#f4f9f4] px-6 py-12 md:px-24 flex flex-col items-center">
      {/* Header Text */}
      <div className="text-center max-w-2xl mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Effortless plant care for healthy, thriving greenery.
        </h1>
        <p className="text-gray-400 text-sm">
          Seamless plant care 🌿 Tips, schedules & guides for 200+ plants.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl items-center">
        {/* Left Side: Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Right Side: Image and Decorative Elements */}
        <div className="relative flex justify-center items-center">
          {/* Circular Background Shape */}
          <div className="absolute w-[80%] aspect-square bg-[#e8f3e8] rounded-full -z-10" />

          {/* "View the App" Badge */}
          <div className="absolute top-10 left-1/4 bg-white/90 px-4 py-1 rounded-full text-[10px] text-green-700 shadow-sm border border-gray-100 font-medium">
            View the app
          </div>

          {/* Main Image (Placeholder for the person with plants) */}
          <div className="relative z-10">
            {/* <img
              src="/gardener.png"
              alt="Gardener holding plants"
              className="w-full max-w-md drop-shadow-2xl"
            /> */}
            <Image
              // src="/gardenerGirl2.png"
              src="https://iili.io/fS7xBRt.png"
              alt="Gardener holding plants"
              width={400}
              height={400}
              className="w-full max-w-md"
            />
          </div>

          {/* Floating leaf icon for flair */}
          <div className="absolute top-18 right-10 animate-bounce">
            <Leaf className="text-green-800 fill-green-800" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}

// {/* Avatar Testimonials Section */}
//       <section className="bg-gray-100 py-16 px-10">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-[#2D4A22] mb-8">
//             What Our Users Say
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Testimonial 1 */}
//             <div className="bg-white p-6 rounded-4xl shadow-md">
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
//                   <Image
//                     src="https://iili.io/fS7xIsf.png"
//                     alt="User Avatar"
//                     width={64}
//                     height={64}
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="text-left">
//                   <h3 className="text-lg font-bold">Jane Doe</h3>
//                   <p className="text-sm text-gray-500">Plant Enthusiast</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 "Planta has completely transformed the way I take care of my
//                 plants. I love how easy it is to keep track of everything!"
//               </p>
//             </div>

//             {/* Testimonial 2 */}
//             <div className="bg-white p-6 rounded-4xl shadow-md">
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
//                   <Image
//                     src="https://iili.io/fS7xIsf.png"
//                     alt="User Avatar"
//                     width={64}
//                     height={64}
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="text-left">
//                   <h3 className="text-lg font-bold">John Smith</h3>
//                   <p className="text-sm text-gray-500">Gardening Hobbyist</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 "Thanks to Planta, my garden has never looked better. The app is
//                 a lifesaver for plant care!"
//               </p>
//             </div>

//             {/* Testimonial 3 */}
//             <div className="bg-white p-6 rounded-4xl shadow-md">
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
//                   <Image
//                     src="https://iili.io/fS7xIsf.png"
//                     alt="User Avatar"
//                     width={64}
//                     height={64}
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="text-left">
//                   <h3 className="text-lg font-bold">Emily Johnson</h3>
//                   <p className="text-sm text-gray-500">Nature Lover</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 "I never knew taking care of plants could be this easy and fun.
//                 Highly recommend Planta to everyone!"
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
