import Image from 'next/image';
export default function Footer() {
  return (
    /* FOOTER */
    <footer className="pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-gray-500">
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-6">
            <div className="w-8 h-8 bg-plant-primary rounded-lg flex items-center justify-center text-white text-base">
              <Image
                src="/plantaLogo.png"
                alt="Planta Logo"
                width={34}
                height={34}
                className="object-contain rounded-2xl"
              />
            </div>
            Planta
          </div>
          <p className="mb-6 leading-relaxed">
            Your plants are thriving because of you! Water, trim, and nourish
            them to keep them happy.
          </p>
          <h4 className="font-bold text-gray-900 mb-2">
            Get the latest information
          </h4>
          <div className="bg-gray-50 p-3 rounded-full border text-center">
            Supportplanta@gmail.com
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900">Company</h4>
          <p>Become an Agent</p>
          <p>Get Referrals</p>
          <p>Careers</p>
          <p>Our Company</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900">Contact</h4>
          <p>Contact us</p>
          <p>Help center</p>
          <p>Advertise</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900">About Us</h4>
          <p>Why Redfin</p>
          <p>Community Impact</p>
          <p>Diversity & Inclusion</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t flex flex-col md:flex-row justify-between text-xs text-gray-400">
        <p>Copyright 2022. All Rights Reserved</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms and Use</span>
        </div>
      </div>
    </footer>
  );
}
