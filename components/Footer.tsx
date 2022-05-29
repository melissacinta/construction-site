import { footerNavigation } from 'utils/sample-data';

export default function Footer() {
  return (
    <footer className="bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-md px-4 pt-12 sm:max-w-7xl sm:px-6 lg:px-8 lg:pt-16">
        <div className="flex flex-col items-center justify-center space-y-8 text-center xl:col-span-1">
          <img
            className="h-10"
            src="/images/cray2.jpeg"
            alt="CRAY CONSTRUCTION NIGERIA LTD"
          />
          <p className="text-base text-gray-500">
            Making the world a better place through constructing elegant
            projects.
          </p>
          {/* <div className="flex space-x-6">
            {footerNavigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div> */}
        </div>
        <div className="mt-12 border-t border-gray-200 py-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Cray Construction Nigeria LTD
          </p>
        </div>
      </div>
    </footer>
  );
}
