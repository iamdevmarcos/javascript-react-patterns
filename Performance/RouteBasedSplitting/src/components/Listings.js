import React from 'react';
import useListings from '../hooks/useListings';
import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';

export function Listings() {
  const listings = useListings();

  if (!listings) {
    return (
      <div className="spinner-wrapper">
        <div className="la-ball-clip-rotate">
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
