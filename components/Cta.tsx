import { ExternalLinkIcon } from '@heroicons/react/solid';

const About = () => {
  return (
    <div className="relative bg-gray-900" id="about">
      <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
          alt=""
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
        />
      </div>
      <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
            Who we are
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            We’re your best bet
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Cray construction Company was officially established on the 5th of
            April 2022 but started operations around may 2020, we are a
            standard-based and all-round equiped Company in terms of high rise
            buildings, Residence, Renovations, and piling works, with
            sophisticated tools relevant for construction in the 21st century.
          </p>

          <p className="mt-3 text-lg text-gray-300">
            We are excellence driven, time-based influenced and proficient in
            structures and tasteful finishing in the construction industry.
            Overtime, we've built a formidable and goal- oriented team with
            capacity to deliver excellence to our esteemed costumers everytime
            and everywhere. Our expertise in the industry to deliver
            cutting-edge and standard-conforming masterpiece burtreses the fact
            that we have professional Engineers who are creative, experienced
            and result-oriented.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
