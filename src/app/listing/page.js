import React from "react";
import PlaceAdd from "@/components/ListingPage/AddList";
import ListingRequirements from "@/components/ListingPage/ListingRequirements";
import Services from "@/components/ListingPage/Services";
function page() {
  return (
    <div>
      <PlaceAdd />
      <ListingRequirements />
      <Services />
    </div>
  );
}

export default page;
