import React, { useCallback } from "react";
import { server } from "lib/api";
import {
  DeleteListingsData,
  DeleteListingVariables,
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
  const fetchListings = useCallback(async () => {
    const { data } = await server.fetch<ListingsData>({ query: LISTINGS });
    console.log(data);
  }, []);

  const deleteListing = useCallback(async () => {
    const { data } = await server.fetch<
      DeleteListingsData,
      DeleteListingVariables
    >({
      query: DELETE_LISTING,
      variables: {
        id: "5fd78f4e694eb75948cc29ca",
      },
    });
    console.log(data);
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={fetchListings} type="button">
        Query Listings!
      </button>
      <button onClick={deleteListing} type="button">
        Delete a listing!
      </button>
    </div>
  );
};

export default Listings;
