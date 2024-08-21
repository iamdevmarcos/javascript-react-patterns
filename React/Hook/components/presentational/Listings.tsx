import React from "react";
import { Listing } from "./Listing";
import { ListingsGrid } from "./ListingsGrid";
import useListings from "../../hooks/useListings";

export function Listings() {
  const data = useListings();
  if (!data) return <p>loading...</p>;

  return (
    <ListingsGrid>
      {data.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
