import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid';
import { features, blogPosts } from 'utils/sample-data';
import Header from './Header';
import Footer from './Footer';
import Cta from './Cta';

export default function Projects() {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32" id="portfolio">
      <div className="relative">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <p className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Projects
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Over the years, our proven track-records of achieving tasks timely,
            as well as meeting clients demand beyond imagination has gained
            accolades. Some notable projects handled are,
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
