import React from "react";

const FooterSection = () => {
  return (
    <div className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-6">
          {/* Services Section */}
          <div className="flex-1">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 mb-3 sm:mb-4">
              Services
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Explore our full range of coaching, training, and tennis
              experiences. From first serve to match point — we've got the right
              program for you.
            </h2>
            <button className="bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-800 transition text-sm sm:text-base">
              Explore More →
            </button>
          </div>

          {/* Coaching Programs Card */}
          <div className="relative rounded-3xl overflow-hidden w-full lg:w-80 h-64 sm:h-80 bg-cover bg-center">
            <div className="absolute inset-0 bg-[url(/hero.webp)] bg-cover bg-center"></div>
            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between text-white">
              <span className="bg-white/30 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm w-fit">
                Coaching Programs
              </span>
              <p className="text-base sm:text-lg font-medium">
                Programs designed for all ages and abilities
              </p>
            </div>
          </div>

          {/* Court Rental Card */}
          <div className="relative rounded-3xl overflow-hidden w-full lg:w-80 h-64 sm:h-80 bg-cover bg-center">
            <div className="absolute inset-0 bg-[url(/hero.webp)] bg-cover bg-center"></div>
            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between text-white">
              <span className="bg-white/30 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm w-fit">
                Hourly Court Rental
              </span>
              <div>
                <p className="text-base sm:text-lg font-medium mb-3 sm:mb-4">
                  Snag into a space built for players — to grow, compete, and
                  thrive.
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition">
                    ←
                  </button>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
