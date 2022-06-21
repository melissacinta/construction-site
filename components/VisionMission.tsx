import {
  ChevronRightIcon,
  ExternalLinkIcon,
  EyeIcon,
  HashtagIcon,
} from '@heroicons/react/solid';
import { features, blogPosts } from 'utils/sample-data';
import Header from './Header';
import Footer from './Footer';
import Cta from './Cta';

export default function VisionMission() {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32" id="portfolio">
      <div className="relative">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <p className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Vision and Mission Statements
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-between">
            <div className="mt-2 block rounded-lg bg-white p-6 shadow-lg">
              <p className="text-xl font-semibold text-gray-900">OUR VISION</p>

              <div className="flex">
                <div className="hidden flex-shrink-0 self-center sm:mr-4 sm:block">
                  <EyeIcon
                    className="h-6 w-6 text-[#111827] "
                    aria-hidden={true}
                  />
                </div>
                <div>
                  <p className="mt-3 text-base text-gray-500">
                    To become the leading Construction firm, while delivery
                    projects that consistently exceed international standards
                    and provide exceptional customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="hidden flex-shrink-0 self-center sm:mr-4 sm:block">
                  <EyeIcon
                    className="h-6 w-6 text-[#111827] "
                    aria-hidden={true}
                  />
                </div>
                <div>
                  <p className="mt-3 text-base text-gray-500">
                    To continually deliver excellent value and innovative
                    Construction solutions to meet our clients
                    requirements,using mordern principles and sophisticated
                    technologies, CRAY construction limited envision being the
                    primary preference at all times both nationally and globally
                    for their renowned excellence, quality performance and
                    reliability in all types of constructions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-white p-6 shadow-lg">
            <div className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">OUR MISSION</p>

              <div className="flex">
                <div className="hidden flex-shrink-0 self-center sm:mr-4 sm:block">
                  <HashtagIcon
                    className="h-6 w-6 text-[#111827] "
                    aria-hidden={true}
                  />
                </div>
                <div>
                  <p className="mt-3 text-base text-gray-500">
                    To be a leading Construction company in the global market.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="hidden flex-shrink-0 self-center sm:mr-4 sm:block">
                  <HashtagIcon
                    className="h-6 w-6 text-[#111827] "
                    aria-hidden={true}
                  />
                </div>
                <div>
                  <p className="mt-3 text-base text-gray-500">
                    To become clients most preferred choice by attaining
                    excellence in quality and timely completed value added
                    projects.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="hidden flex-shrink-0 self-center sm:mr-4 sm:block">
                  <HashtagIcon
                    className="h-6 w-6 text-[#111827] "
                    aria-hidden={true}
                  />
                </div>
                <div>
                  <p className="mt-3 text-base text-gray-500">
                    To provide the highest level of service in the Construction
                    industry while offering superior craftsmanship to every
                    project we handle.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="hidden flex-shrink-0 self-center sm:mr-4 sm:block">
                  <HashtagIcon
                    className="h-6 w-6 text-[#111827] "
                    aria-hidden={true}
                  />
                </div>
                <div>
                  <p className="mt-3 text-base text-gray-500">
                    To continually innovate, develop and adopt state of the art
                    technology in methods and materials to enhance productivity
                    and cost effectiveness.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="hidden flex-shrink-0 self-center sm:mr-4 sm:block">
                  <HashtagIcon
                    className="h-6 w-6 text-[#111827] "
                    aria-hidden={true}
                  />
                </div>
                <div>
                  <p className="mt-3 text-base text-gray-500">
                    To continually improve the competence of our team and employ
                    diverse, innovation and results oriented personal motivated
                    to deliver excellence.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="hidden flex-shrink-0 self-center sm:mr-4 sm:block">
                  <HashtagIcon
                    className="h-6 w-6 text-[#111827] "
                    aria-hidden={true}
                  />
                </div>
                <div>
                  <p className="mt-3 text-base text-gray-500">
                    To build a safety culture aimed at continually reducing the
                    frequency severity rate towards achieving zero accidents.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="hidden flex-shrink-0 self-center sm:mr-4 sm:block">
                  <HashtagIcon
                    className="h-6 w-6 text-[#111827] "
                    aria-hidden={true}
                  />
                </div>
                <div>
                  <p className="mt-3 text-base text-gray-500">
                    To identify and mitigate all the environmental impacts
                    arising from our activities and comply with applicable
                    environmental norms.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="hidden flex-shrink-0 self-center sm:mr-4 sm:block">
                  <HashtagIcon
                    className="h-6 w-6 text-[#111827] "
                    aria-hidden={true}
                  />
                </div>
                <div>
                  <p className="mt-3 text-base text-gray-500">
                    To achieve clients recognition and stakeholders satisfaction
                    by committing to the highest level of performance with
                    integrity, creativity and passion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
