import React, { useCallback, useMemo } from "react";
import { server, useQuery } from "lib/api";
import {
  DeleteListingsData,
  DeleteListingVariables,
  Listing,
  ListingsData,
} from "./types";

const LISTINGS = `
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numOfGuests
      numOfBeds
      rating
    }
  }
`;

const DELETE_LISTING = `
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
    }
  }
`;

interface Props {
  title: string;
}

const Listings = ({ title }: Props): JSX.Element => {
  const { data, loading, refetch, error } = useQuery<ListingsData>(LISTINGS);
  const deleteListing = useCallback(
    async (id: string) => {
      await server.fetch<DeleteListingsData, DeleteListingVariables>({
        query: DELETE_LISTING,
        variables: {
          id,
        },
      });

      refetch();
    },
    [refetch]
  );

  const listings = data ? data.listings : null;

  const listingList = useMemo(
    () => (
      <ul>
        {listings?.map((listing: Listing) => {
          return (
            <li key={listing.id}>
              {listing.title}
              <button onClick={() => deleteListing(listing.id)} type="button">
                Delete listing
              </button>
            </li>
          );
        })}
      </ul>
    ),
    [listings, deleteListing]
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Uh, oh! Something went wrong - please try again later :(</h2>;
  }

  return (
    <div>
      <h2>{title}</h2>
      {listingList}
    </div>
  );
};

export default Listings;
