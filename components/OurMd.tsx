const OurMd = () => {
  return (
    <div className="relative mt-20" id="md">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            {/* Testimonial card*/}
            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="images/ceo.jpeg"
                alt=""
              />
              <div className="absolute inset-0 bg-[#1118275f] mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827] opacity-90" />
              <div className="relative px-8">
                <div className="font-extraBold text-2xl tracking-tight text-white">
                  Emmanuel Raphael George
                </div>
                <blockquote className="mt-4">
                  <footer>
                    <p className="text-base font-semibold text-[#C08F28]">
                      Managing Director of cray Construction Nig Limited
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our MD
            </h2>
            <div className="mt-6 space-y-6 text-gray-500">
              <p className="text-lg">
                Emmanuel Raphael George is the managing Director of cray
                Construction Nig Limited, he hails from oruk anam LGA in Akwa
                ibom state. He is a graduate of building technology in osun
                state college of technology esa oke,osun state.
              </p>
              <p className="text-base leading-7">
                His vast experience in construction is rooted deep in his many
                years of working with big firms in the Construction industry
                such as,{' '}
                <a
                  href="https://www.itbng.com/"
                  target="_blank"
                  className="text-gray-900"
                >
                  ITB NIG LTD
                </a>
                ,{' '}
                <a
                  href="https://telisol-ltd.business.site/"
                  target="_blank"
                  className="text-gray-900"
                >
                  TELISOL NIG LTD
                </a>
                ,{' '}
                <a
                  href="https://www.arklandstructures.com/"
                  target="_blank"
                  className="text-gray-900"
                >
                  ARKLAND STRUCTURES LIMITED
                </a>
                ,{' '}
                <a
                  href="https://www.beamconl.com/"
                  target="_blank"
                  className="text-gray-900"
                >
                  BEAMCO NIG LTD
                </a>{' '}
                as well as others major firms in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMd;
