import React from "react";

function ListingRequirements() {
  return (
    <div className="w-full bg-[#FAFFE0] ">
      <div className="container   mx-auto py-10 md:px-0 px-3  ">
        <div className="md:max-w-5xl p-6 space-y-6">
          <h1 className="text-[30px] font-bold text-black">
            What steps should I follow to publish my ad as a private owner?
          </h1>
          <p className="text-[18px]">
            There are 4 key points to sell or rent your property as soon as
            possible:
          </p>

          <ol className="space-y-6  list-inside">
            <li>
              <h2 className="font-bold  text-[20px]">
                1. Upload the best photos you have and, if possible, a plan that
                reflects the layout of the rooms.
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-6">
                <li>
                  Make sure you have quality photos on hand when posting your
                  ad. If you don't have them, you can add them later, but
                  remember, without photos you won't get any results.
                </li>
                <li>
                  <span className="font-bold">The main photo is crucial.</span>{" "}
                  It will be the cover of your ad, the only one that will be
                  sent by email to interested parties and will appear in the
                  results lists.
                </li>
                <li>
                  Arrange your photos logically to create an engaging story, and
                  opt for horizontal images, which look great.
                </li>
                <li>
                  Even a hand-drawn floor plan, even if not detailed, offers
                  useful information for interested parties to visualize the
                  layout of the rooms and what it would be like to live there.
                </li>
              </ul>
              <p className="text-[16px] pt-3">
                If you still have doubts about how to take the best photos, you
                can follow the practical tips and tricks that we share in a
                video on{" "}
                <a
                  href="#"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  how to photograph homes with your mobile phone
                </a>
                .
              </p>
            </li>
          </ol>

          <div className="space-y-6">
            {/* Step 2 */}
            <div>
              <h2 className="font-bold text-[20px]  text-[20px]">
                2. Please indicate the exact address
              </h2>
              <p className="text-[18px]">
                In order for people searching in the area to find out about your
                advert, it is
                <span className="font-bold">
                  {" "}
                  very important to indicate the correct address of the property
                </span>
                . If for some reason you do not want to indicate it, you have
                the option of
                <span className="font-bold"> hiding the address for €9.90</span>
                .
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <h2 className="font-bold text-[20px]  text-[20px]">
                3. Set a price according to market value
              </h2>
              <p className="text-[18px]">
                If you have any doubts, you can get a
                <a
                  href="#"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  {" "}
                  free valuation of your property{" "}
                </a>
                from our website or check the average price in that area.
              </p>
            </div>

            {/* Step 4 */}
            <div>
              <h2 className="font-bold text-[20px]  text-[20px]">
                4. Indicate the characteristics of your property and describe
                your home in detail
              </h2>
              <p className="text-[18px]">
                Include information about your property, such as the number of
                rooms, square meters, bathrooms, etc. Also mention additional
                extras, such as the presence of an elevator, a terrace, a
                parking space, a storage room, etc. In the end,{" "}
                <span className="font-bold">
                  all these details add value to your property
                </span>
                .
              </p>
              <p className="text-[18px]">
                Highlight the{" "}
                <span className="font-bold">special features of your home</span>
                , especially those that are not visible in the photos. Don't
                forget to explain nearby services, available transportation, and
                places of interest in the area.
              </p>
            </div>
            <p>
              <span className="font-bold">
                Highlight the special features of your home
              </span>{" "}
              , especially those that are not visible in the photos. Don't
              forget to explain nearby services, available transportation, and
              places of interest in the area.
            </p>
          </div>
        </div>
        {/* Advantages  */}
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-6">
            Advantages of publishing on idealista
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="font-semibold text-xl">Guaranteed visibility</h3>
              <p className="">
                The ads posted on idealista are visited by millions of users,
                which gives you the opportunity to sell or rent your property
                more quickly and effectively.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-xl">The best experience</h3>
              <p className="">
                The idealista APP has multiple features that will help you
                manage your publication, and for those looking for property, it
                allows you to configure fully personalized alerts to immediately
                receive new properties.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-xl">
                A multitude of products for your ad
              </h3>
              <p className="">
                We have a wide variety of tools to improve the position of your
                ad and gain visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingRequirements;
