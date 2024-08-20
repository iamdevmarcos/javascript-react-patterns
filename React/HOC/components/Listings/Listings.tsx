import React from 'react';
import withLoader from '../../hoc/withLoader';
import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';

export function Listings({ data }) {
  if (!data.listings.length) return null;

  return (
    <ListingsGrid>
      {data.listings.map((listing) => (
        <Listing listing={listing} />
      ))}
    </ListingsGrid>
  );
}

export default withLoader(Listings, 'https://house-lydiahallie.vercel.app/api/listings');
