'use client';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import JuiceCan from '../components/JuiceCan';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sceneContainer = useRef(null);

  useEffect(() => {
    // Example: Can flies in and rotates as you scroll
    gsap.to('.can-wrapper', {
      scrollTrigger: {
        trigger: '.section-two',
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      },
      x: '20vw', // Move can to the right on scroll
      rotation: Math.PI * 2,
    });
  }, []);

  return (
    <main className="relative bg-orange-50">
      {/* 3D Layer - Fixed in background */}
      <div className="fixed top-0 left-0 w-full h-screen z-10 pointer-events-none can-wrapper">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <JuiceCan />
          <Environment preset="city" />
          <ContactShadows opacity={0.4} scale={10} blur={2.4} far={4.5} />
        </Canvas>
      </div>
      {/* Content Layers */}
      <section className="relative h-screen flex items-center px-20 z-20">
        <h1 className="text-8xl font-black text-orange-600 uppercase">
          Pure
          <br />
          Refreshment
        </h1>
      </section>
      <section className="section-two relative h-screen flex items-center justify-end px-20 z-20">
        <div className="max-w-md text-right">
          <h2 className="text-5xl font-bold mb-4">100% Organic</h2>
          <p className="text-lg">
            Experience the burst of real fruit in every sip. No added sugars,
            just nature.
          </p>
        </div>
      </section>
      <section className="h-screen" /> {/* Spacer for scrolling */}
    </main>
  );
}

// Default Page --------------------------------<<<<<
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{' '}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{' '}
//             or the{' '}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{' '}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
