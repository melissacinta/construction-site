import { ChevronRightIcon } from '@heroicons/react/solid';

const Hero = () => {
  return (
    <div className="bg-gray-900 pt-6 sm:pt-16 lg:overflow-hidden lg:pt-4 lg:pb-14">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
            <div className="lg:py-24">
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Renovations? Construction?</span>
                <span className="block bg-gradient-to-r from-yellow-200 to-[#C08F28] bg-clip-text pb-3 text-transparent sm:pb-5">
                  we've got you
                </span>
              </h1>
              <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                From renovations to outright constructions we've got your back,
                we are excellence driven, time-based influenced and proficient
                in structures and tasteful finishing in the construction
                industry.
              </p>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <img
                className="w-full rounded-xl object-cover lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/crane.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
