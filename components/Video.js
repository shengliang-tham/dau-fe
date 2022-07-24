import Link from "next/link";


export default function Video() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Broad selection of courses from our content creators
            </h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Choose from 185,000 online video courses with new additions
            published every month
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <Link href="/listing">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="/images/trading.jpeg"
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Trading
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  The Complete Foundation Stock Trading Course
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </Link>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/trading.jpeg"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Trading
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                The Complete Foundation Stock Trading Course
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/trading.jpeg"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Trading
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                The Complete Foundation Stock Trading Course
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/trading.jpeg"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Trading
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                The Complete Foundation Stock Trading Course
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
