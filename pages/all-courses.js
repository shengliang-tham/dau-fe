import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import Link from "next/link";

export default function AllCoursesPage() {
  const listingArray = [];
  const listingObj = {
    category: "Trading",
    title: "The Complete Foundation Stock Trading Course",
    description:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
  };

  for (let i = 0; i < 10; i++) {
    listingArray.push(listingObj);
  }

  let listingList = listingArray.map((item, index) => {
    return (
      <Link href="/listing">
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="/images/trading.jpeg"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
              {item.category}
            </h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              {item.title}
            </h2>
            <p class="leading-relaxed text-base">{item.description}</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <Navbar />
      <div class="w-full border-2 border-gray-100"></div>
      <div class="grid grid-cols-12  h-screen">
        <div class="col-span-2 p-6">
          <SideMenu />
        </div>
        <div class="col-span-9">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">{listingList}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
