import Navbar from "@/components/LandingPage/Navbar";
import Hero from "@/components/LandingPage/Hero";

export default function Home() {
  return (
    <>
      <main>
        <title>Damelo Damelo</title>
        <Hero />

        <div className="container mx-auto flex flex-col md:flex-row gap-8 p-5">
          <div className="w-full md:w-1/2 bg-white p-6 rounded-md shadow-md">
            <img
              src="https://st3.idealista.com/static/common/release/home/resources/img/draw-search/draw-search-small.jpg?20240827-1152"
              alt="Idealista Draw Search"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Draw your own area</h2>
            <p className="text-gray-600 mb-4">
              Choose the exact area you want to search in on a map so it makes it easy for you to search it on a map.
            </p>
            <a href="#" className="text-blue-600 font-bold hover:underline">
              Start drawing your search
            </a>
          </div>
          <div className="w-full md:w-1/2 bg-white p-6 rounded-md shadow-md">
            <img
              src="https://st3.idealista.com/static/common/release/home/resources/img/put-property/en/put-property-large.jpg?20240827-1152"
              alt="Idealista Put Property"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Publish your listing for free</h2>
            <p className="text-gray-600 mb-4">
              We give you the first two listings for free. Houses, rooms, offices... there's room for everything!
            </p>
            <a href="#" className="text-blue-600 font-bold hover:underline">
              Add your listing for free
            </a>
          </div>
        </div>

        <div class="container mx-auto flex w-full  py-5 p-5">
          <div class="w-3/5 ">
            <div class="relative mb-4 w-full md:mb-0  ">
              <img src="https://st3.idealista.com/static/common/release/home/resources/img/mortgages/es/es/small-device-tatuaje.jpg?20240827-1152" class="h-auto w-full rounded-lg mt-10  " />
            </div>
          </div>
          <div class="lg:w-2/5 sm:w-1/2 md:w-3/6 px-3 border-gray-100 border-2 p-4 mb-12 h-min -ml-8 z-30 bg-white">

            <h2 class="text-2xl font-semibold mb-4">We find your mortgage</h2>
            <p class="text-lg mb-6">We work with all banks, answer all your questions, and accompany you throughout the process free of charge.</p>
            <a href="#" class="text-blue-600 font-bold hover:underline">Discover Damelo/hipotecas</a>

          </div>
        </div>

        <div class="container mx-auto flex w-full flex-row-reverse p-5 py-5">
          <div class="w-3/5">
            <div class="relative mb-4 w-full md:mb-0">
              <img src="https://st3.idealista.com/static/common/release/home/resources/img/propertyvaluation/es/propertyvaluation-small-devices.png?20240830105800" class="mt-10 h-auto w-full rounded-lg" />
            </div>
          </div>
          <div class="z-30 -ml-8 mb-12 h-min border-2 border-gray-100 bg-white p-4 px-3 sm:w-1/2 md:w-3/6 lg:w-2/5">
            <h2 class="mb-4 text-2xl font-semibold">How much is your house worth?</h2>
            <p class="mb-6 text-lg">A free online valuation in seconds:</p>
            <ul class="mb-6 list-none space-y-2 align-baseline text-base">
              <li class="flex items-start">
                <span class="mr-2.5 mt-1 text-xs">■</span>
                with a precise price range to buy or rent
              </li>
              <li class="flex items-start">
                <span class="mr-2.5 mt-1 text-xs">■</span>
                by analysing market developments and land registry data
              </li>
              <li class="flex items-start">
                <span class="mr-2.5 mt-1 text-xs">■</span>
                by comparing similar properties
              </li>
            </ul>
            <a class="text-lg font-bold text-blue-700 hover:underline" href="/en/valoracion-de-inmuebles/" title="Value your house for free"> Value your house for free </a>
          </div>
        </div>

        <div class="container mx-auto flex w-full  p-5 py-5">
          <div class="w-3/5">
            <div class="relative mb-4 w-full md:mb-0">
              <img src="https://st3.idealista.com/static/common/release/home/resources/img/rentalia/es/rentalia-small-devices-summer.jpg?20240830105800" class="mt-10 h-auto w-full rounded-lg" />
            </div>
          </div>
          <div class="z-30 -ml-8 mb-12 h-min border-2 border-gray-100 bg-white p-4 px-3 sm:w-1/2 md:w-3/6 lg:w-2/5">
            <h2 class="mb-4 text-2xl font-semibold"> Holiday homes in Spain, Italy and Portugal to cool off this summer</h2>
            <p class="mb-6 text-lg">We all want a holiday and to disconnect from everyday life, whether on the
              beach, in the mountains or in the city. Can you resist a rural getaway?
              Fireplace, barbecue, garden, swimming pool... the choice is yours.</p>

            <a
              class="text-lg align-baseline text-[#145bc7] no-underline touch-manipulation font-bold m-0 p-0 border-0 hover:underline [outline:0]"
              data-click="1"
              data-markup="E|rentaliaModule"
              title="Rentalia"
              href="https://www.rentalia.com/"
            >
              See summer holiday rentals
            </a>
          </div>
        </div>

        <div class="container mx-auto flex flex-row-reverse  w-full  py-5 p-5">
          <div class="w-3/5 ">
            <div class=" relative mb-4 w-full md:mb-0  ">
              <img src="https://st3.idealista.com/static/common/release/home/resources/img/agenciesrecommender/agenciesrecommender-small-devices.jpg?20240827-1152" class="h-auto w-full rounded-lg mt-10  " />
            </div>
          </div>

          <div class="lg:w-2/5 sm:w-1/2 md:w-3/6 px-3 border-gray-100 border-2 p-4 mb-12 h-min -ml-8 z-30 bg-white">

            <h2 class="text-2xl font-semibold mb-4">We recommend the most suitable real estate agencies to sell your home</h2>
            <p class="text-lg mb-6"> We select up to 4 agencies, depending on the characteristics of your
              property, to help you sell quickly.</p>
            <a href="#" class="text-blue-600 font-bold hover:underline">Find a real estate agency</a>

          </div>
        </div>

        <div class="container mx-auto flex w-full p-5 py-5">
          <div class="w-3/5">
            <div class="relative mb-4 w-full md:mb-0">
              <img src="https://st3.idealista.com/static/common/release/home/resources/img/apps/en/apps-small-devices.jpg?20240830105800" class="mt-10 h-auto w-full rounded-lg" />
            </div>
          </div>
          <div class="z-30 -ml-8 mb-12 h-min border-2 border-gray-100 bg-white p-4 px-3 sm:w-1/2 md:w-3/6 lg:w-2/5">
            <h2 class="mb-4 text-2xl font-semibold">Take Damelo with you, always</h2>
            <p class="mb-6 text-lg">With our app, you will be the first to find out about new properties, changes in your favourites, and messages from the chat.</p>
          </div>
        </div>

        <div className="container mx-auto p-5">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Damelo/news</h1>
            <p className="text-gray-600 font-semibold mb-4">
              Helpful guides and practical advice for buying or renting your dream house abroad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


            {/* Article 1 */}
            <article className="border shadow-md rounded-md border-gray-300 bg-white">
              <a href="http://www.idealista.com/en/news/property-for-sale-in-spain/2024/08/29/818689-10-up-and-coming-locations-to-buy-property-in-spain-in-2024">
                <img
                  className="w-full h-48 object-cover rounded-t-md"
                  alt="10 up and coming locations to buy property in Spain in 2024"
                  loading="lazy"
                  src="https://st3.idealista.com/news/archivos/styles/highlighted_sm/public/2024-07/images/dmitry-romanoff-ngszn8uhwpy-unsplash.jpg?VersionId=dg63Ibdp2QYjEIlQxka9WjNd06j0sGQW&itok=oISS1xx_"
                />
              </a>
              <div className="p-4">
                <a href="http://www.idealista.com/en/news/property-for-sale-in-spain/2024/08/29/818689-10-up-and-coming-locations-to-buy-property-in-spain-in-2024" className="text-lg font-semibold hover:underline">
                  10 up and coming locations to buy property in Spain in 2024
                </a>

                <a href="http://www.idealista.com/en/news/property-for-sale-in-spain/2024/08/29/818689-10-up-and-coming-locations-to-buy-property-in-spain-in-2024" className="text-blue-600 font-bold block mt-2 hover:underline">
                  Read more
                </a>
              </div>
            </article>

            {/* Article 2 */}
            <article className="border shadow-md rounded-md border-gray-300 bg-white">
              <a href="http://www.idealista.com/en/news/property-for-sale-in-spain/2024/08/29/818820-malaga-and-cadiz-the-most-expensive-provinces-to-buy-a-home-in-andalusia">
                <img
                  className="w-full h-48 object-cover rounded-t-md"
                  alt="Malaga and Cadiz, the most expensive provinces to buy in Andalusia"
                  loading="lazy"
                  src="https://st3.idealista.com/news/archivos/styles/highlighted_sm/public/2024-07/images/dl_a02019095.jpg?VersionId=5HKtIEsWNewg33sImgxASC4.1IaDgRrK&itok=KyiUb8KY"
                />
              </a>
              <div className="p-4">
                <a href="http://www.idealista.com/en/news/property-for-sale-in-spain/2024/08/29/818820-malaga-and-cadiz-the-most-expensive-provinces-to-buy-a-home-in-andalusia" className="text-lg font-semibold hover:underline">
                  Malaga and Cadiz, the most expensive provinces to buy in Andalusia
                </a>

                <a href="http://www.idealista.com/en/news/property-for-sale-in-spain/2024/08/29/818820-malaga-and-cadiz-the-most-expensive-provinces-to-buy-a-home-in-andalusia" className="text-blue-600 font-bold block mt-2 hover:underline">
                  Read more
                </a>
              </div>
            </article>

            {/* Article 3 */}
            <article className="border shadow-md rounded-md border-gray-300 bg-white">
              <a href="http://www.idealista.com/en/news/property-for-rent-in-spain/2024/08/28/818417-regulating-tourist-apartments-will-not-increase-the-rental-supply-or-lower">
                <img
                  className="w-full h-48 object-cover rounded-t-md"
                  alt="Regulating tourist flats in Spain will not improve supply or lower prices"
                  loading="lazy"
                  src="https://st3.idealista.com/news/archivos/styles/highlighted_sm/public/2024-07/images/1210081026.jpg?VersionId=JvJ5N50m5RyCVb3Kj4.lGNxkNGHUWvFn&itok=V76LoLrT"
                />
              </a>
              <div className="p-4">
                <a href="http://www.idealista.com/en/news/property-for-rent-in-spain/2024/08/28/818417-regulating-tourist-apartments-will-not-increase-the-rental-supply-or-lower" className="text-lg font-semibold hover:underline">
                  Regulating tourist flats in Spain will not improve supply or lower prices
                </a>

                <a href="http://www.idealista.com/en/news/property-for-rent-in-spain/2024/08/28/818417-regulating-tourist-apartments-will-not-increase-the-rental-supply-or-lower" className="text-blue-600 font-bold block mt-2 hover:underline">
                  Read more
                </a>
              </div>
            </article>
          </div>

          <a href="https://www.idealista.com/en/news/" className="text-blue-600 font-bold block text-center hover:underline mt-4">
            See more buying and rental guides
          </a>
        </div>

        <div className="container mx-auto flex flex-col items-start p-5">
          {/* h1 positioned above the cards */}
          <h1 className="text-2xl font-semibold mb-4">
            We're also number 1 in Italy and Portugal
          </h1>

          {/* Cards displayed horizontally with matching styles */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {/* Card for Italy */}
            <div className="w-full md:w-1/2 border shadow-sm rounded-md border-gray-200 bg-white">
              <div className="p-5 flex items-center gap-4">
                <div className="w-12 h-12  rounded-md flex items-center justify-center">
                  <img
                    class="text-[100%] align-baseline w-full m-0 p-0 border-0 [outline:0]"
                    title="damelo Italy"
                    alt="damelo Italy"
                    src="https://st3.idealista.com/static/common/release/home/resources/img/siluetax2_it.png?20240829110425"
                    height="56"
                    width="64"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-500 hover:underline cursor-pointer">damelo Italy</h3>
                  <p className="text-gray-600">Over a million properties</p>
                </div>
              </div>
            </div>

            {/* Card for Portugal */}
            <div className="w-full md:w-1/2 border shadow-sm rounded-md border-gray-200 bg-white">
              <div className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-md flex items-center justify-center">
                  <img
                    class="text-[100%] align-baseline w-full m-0 p-0 border-0 [outline:0]"
                    title="damelo Portugal"
                    alt="damelo Portugal"
                    src="https://st3.idealista.com/static/common/release/home/resources/img/siluetax2_pt.png?20240829110425"
                    height="56"
                    width="64"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-500 hover:underline cursor-pointer">Damelo Portugal</h3>
                  <p className="text-gray-600">Over 300,000 properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border">
          {/* Top Section: Damelo Logo and Language Selector */}
          <div className="bg-gray-100 py-4 border-gray-200 ">
            <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
              {/* Damelo Logo */}
              <a href="#" className="flex items-center space-x-2">
                <img src="/damelo-logo.png" alt="Damelo" className="h-32 w-auto" />
              </a>

              {/* Language Selector */}
              <div className="flex items-center space-x-2">
                <img src="https://flagcdn.com/w320/gb.png" alt="UK Flag" className="h-5 w-7" />
                <select className="text-gray-700 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300">
                  <option value="en" selected>English</option>
                  {/* Add more languages as needed */}
                </select>
              </div>
            </div>
          </div>

          {/* Responsive Footer Section */}
          <footer className="bg-gray-100 py-8">
            <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* About Section */}
              <div>
                <h2 className="font-bold text-lg mb-4">About Damelo</h2>
                <ul className="space-y-2">
                  <li><a href="#" className="text-blue-500 hover:underline">About us</a></li>
                  <li><a href="#" className="text-blue-500 hover:underline">Press room</a></li>
                  <li><a href="#" className="text-blue-500 hover:underline">Work with us</a></li>
                  <li><a href="#" className="text-blue-500 hover:underline">Damelo/hipotecas</a></li>
                  <li><a href="#" className="text-blue-500 hover:underline">Damelo/data</a></li>
                  <li><a href="#" className="text-blue-500 hover:underline">Damelo/news</a></li>
                  <li><a href="#" className="text-blue-500 hover:underline">Damelo/seguros</a></li>
                </ul>
              </div>

              {/* Help Section */}
              <div>
                <h2 className="font-bold text-lg mb-4">Help</h2>
                <ul className="space-y-2">
                  <li><a href="#" className="text-blue-500 hover:underline">Frequently asked questions (FAQs)</a></li>
                  <li><a href="#" className="text-blue-500 hover:underline">Contact Damelo</a></li>
                  <li><a href="#" className="text-blue-500 hover:underline">Privacy</a></li>
                  <li><a href="#" className="text-blue-500 hover:underline">Cookies policy</a></li>
                  <li><a href="#" className="text-blue-500 hover:underline">General conditions</a></li>
                </ul>
              </div>

              {/* Other Countries Section */}
              <div>
                <h2 className="font-bold text-lg mb-4">Other countries</h2>
                <ul className="space-y-2">
                  <li><a href="#" className="text-blue-500 hover:underline">Damelo Italy</a></li>
                  <li><a href="#" className="text-blue-500 hover:underline">Damelo Portugal</a></li>
                </ul>
              </div>

              {/* Mobile Apps Section */}
              <div>
                <h2 className="font-bold text-lg mb-4">On your mobile or tablet</h2>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="flex items-center justify-center text-sm font-medium w-full md:w-auto">
                    <img src="https://miro.medium.com/v2/resize:fit:600/format:webp/1*xqT83bMEz92IBYxS9UQNow.png" alt="App Store" className="mr-2 h-12 rounded w-auto" />
                  </a>
                  <a href="#" className="flex items-center justify-center text-sm font-medium w-full md:w-auto">
                    <img src="https://miro.medium.com/v2/resize:fit:600/format:webp/1*nZu0dsnlCQltPT1QMCHFAA.png" alt="Google Play" className="mr-2 h-12 w-auto" />
                  </a>
                  <a href="#" className="flex items-center justify-center text-sm font-medium w-full md:w-auto">
                    <img src="https://st3.idealista.com/static/common/release/modules/resources/img/badges-app/huaweiappgallery/huaweiappgallery_EN.png" alt="AppGallery" className="mr-2 h-12 w-auto" />
                  </a>
                </div>

                {/* Social Media Links */}
                {/* <div className="mt-4 flex -px-1 space-x-4">
                  <a href="#" className="text-gray-500 hover:text-gray-700 px-1">
                    <FontAwesomeIcon icon={faFacebookF} size="2x" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700 px-1">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700 px-1">
                    <FontAwesomeIcon icon={faSquareYoutube} size="2x" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700 px-1">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>

                </div> */}

                <p className="mt-4 text-gray-500 text-center md:text-left">Damelo Copyright ©️ 2000-2024</p>
              </div>
            </div>
          </footer>
        </div>

      </main>
    </>
  );
}
