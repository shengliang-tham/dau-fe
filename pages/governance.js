import Navbar from "../components/Navbar";

export default function GovernancePage() {
  return (
    <div>
      <Navbar />
      <div class="w-full border-2 border-gray-100"></div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-12">
            <div class="p-12 md:w-1/2 flex flex-col items-start">
              <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                Measure 1
              </span>
              <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Including DeFi Participants in Governance
              </h2>
              <p class="leading-relaxed mb-8">
                The MetaLearn Foundation believes that active participation in
                decentralized finance (DeFi) is fundamental to the health of the
                MetaLearn ecosystem, and that our governance platform must do a
                better job of recognizing and rewarding the outsized
                contribution of DeFi participants, large and small, across a
                range of project types. We therefore propose to include
                qualified DeFi projects in MetaLearn governance, allowing them
                to vote and receive governance rewards. Those projects will be
                responsible for voting in MetaLearn governance sessions and
                distributing governance rewards to their users through a
                transparent process.
              </p>
              <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a class="text-indigo-500 inline-flex items-center">
                  Cast Your Vote
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
              {/* <a class="inline-flex items-center">
                <img
                  alt="blog"
                  src="https://dummyimage.com/104x104"
                  class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-gray-900">
                    Holden Caulfield
                  </span>
                  <span class="text-gray-400 text-xs tracking-widest mt-0.5">
                    UI DEVELOPER
                  </span>
                </span>
              </a> */}
            </div>
            <div class="p-12 md:w-1/2 flex flex-col items-start">
              <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                Measure 2
              </span>
              <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                XGovs: Proposing & Upvoting Measures
              </h2>
              <p class="leading-relaxed mb-8">
                We believe that a governance structure that allows the MetaLearn
                community to impact the most important decisions is fundamental
                to the long-term stability and continued growth of the MetaLearn
                ecosystem. In the first round of voting earlier this year, a
                large majority of our governors voted in favor of the creation
                of a new tier of Expert Governors (xGovs).
              </p>
              <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a class="text-indigo-500 inline-flex items-center">
                  Cast Your Vote
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
              {/* <a class="inline-flex items-center">
                <img
                  alt="blog"
                  src="https://dummyimage.com/103x103"
                  class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-gray-900">
                    Alper Kamu
                  </span>
                  <span class="text-gray-400 text-xs tracking-widest mt-0.5">
                    DESIGNER
                  </span>
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
