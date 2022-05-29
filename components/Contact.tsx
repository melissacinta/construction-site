import {
  ExternalLinkIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from '@heroicons/react/solid';

const ContactUs = () => {
  return (
    <div className="relative bg-gray-900" id="contact">
      <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:right-0 md:h-full md:w-1/2">
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
        <div className="md:mr-auto md:w-1/2 md:pr-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-[#C08F28]">
            Contact Us
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            We want to hear from you
          </p>
          <p className="mt-3 flex items-center gap-2 text-lg text-gray-300">
            <span className="sr-only">Address</span>
            <LocationMarkerIcon className="h-5 w-5 text-[#C08F28]" />
            <span>
              5, Oriowu street, off Lekki-Epe Expressway, Lekki Phase 1, Lekki,
              Lagos, Nigeria
            </span>
          </p>

          <p className="mt-3 flex items-center gap-2 text-lg text-gray-300">
            <span className="sr-only">Email</span>
            <MailIcon className="h-5 w-5 text-[#C08F28]" />
            <a href="mailto:crayconstruct@gmail.com">crayconstruct@gmail.com</a>
          </p>

          <p className="mt-3 flex items-center gap-2 text-lg text-gray-300">
            <span className="sr-only">Phone</span>
            <PhoneIcon className="h-5 w-5 text-[#C08F28]" />
            <div className="flex flex-col">
              <a href="tel:+23408067139792">08067139792</a>
              <a href="tel:08084572443">08084572443</a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
