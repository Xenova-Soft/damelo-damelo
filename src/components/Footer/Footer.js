import React from "react";

function Footer() {
  return (
    <div className="border">
      {/* Top Section: Damelo Logo and Language Selector */}
      <div className="bg-gray-100 py-4 border-gray-200 ">
        <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
          <a href="#" className="flex items-center space-x-2">
            <img src="/damelo-logo.png" alt="Damelo" className="h-32 w-auto" />
          </a>

          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            <img
              src="https://flagcdn.com/w320/gb.png"
              alt="UK Flag"
              className="h-5 w-7"
            />
            <select className="text-gray-700 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300">
              <option value="en" selected>
                English
              </option>
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
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Press room
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Work with us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Damelo/hipotecas
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Damelo/data
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Damelo/news
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Damelo/seguros
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h2 className="font-bold text-lg mb-4">Help</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Frequently asked questions (FAQs)
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Contact Damelo
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Cookies policy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  General conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Other Countries Section */}
          <div>
            <h2 className="font-bold text-lg mb-4">Other countries</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Damelo Italy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Damelo Portugal
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Apps Section */}
          <div>
            <h2 className="font-bold text-lg mb-4">On your mobile or tablet</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="flex items-center justify-center text-sm font-medium w-full md:w-auto"
              >
                <img
                  src="https://miro.medium.com/v2/resize:fit:600/format:webp/1*xqT83bMEz92IBYxS9UQNow.png"
                  alt="App Store"
                  className="mr-2 h-12 rounded w-auto"
                />
              </a>
              <a
                href="#"
                className="flex items-center justify-center text-sm font-medium w-full md:w-auto"
              >
                <img
                  src="https://miro.medium.com/v2/resize:fit:600/format:webp/1*nZu0dsnlCQltPT1QMCHFAA.png"
                  alt="Google Play"
                  className="mr-2 h-12 w-auto"
                />
              </a>
              <a
                href="#"
                className="flex items-center justify-center text-sm font-medium w-full md:w-auto"
              >
                <img
                  src="https://st3.idealista.com/static/common/release/modules/resources/img/badges-app/huaweiappgallery/huaweiappgallery_EN.png"
                  alt="AppGallery"
                  className="mr-2 h-12 w-auto"
                />
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

            <p className="mt-4 text-gray-500 text-center md:text-left">
              Damelo Copyright ©️ 2000-2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
