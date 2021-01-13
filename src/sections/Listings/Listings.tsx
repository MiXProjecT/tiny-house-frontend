import React, { useCallback, useMemo } from "react";
import {
  useDeleteListingMutation,
  useListingListQuery,
  MyListingFragment,
} from "generated/graphql";

interface Props {
  title: string;
}

const Listings = ({ title }: Props): JSX.Element => {
  const { data, loading, refetch, error } = useListingListQuery();
  const [
    deleteListing,
    { loading: deleteListingLoading, error: deleteListingError },
  ] = useDeleteListingMutation();

  const handleDeleteListing = useCallback(
    async (id: string) => {
      await deleteListing({ variables: { id } });
      refetch();
    },
    [deleteListing, refetch]
  );

  const listings = data ? data.listings : null;

  const listingList = useMemo(
    () => (
      <ul>
        {listings?.map((listing: MyListingFragment) => {
          return (
            <li key={listing.id}>
              {listing.title}
              <button
                onClick={() => handleDeleteListing(listing.id)}
                type="button"
              >
                Delete listing
              </button>
            </li>
          );
        })}
      </ul>
    ),
    [listings, handleDeleteListing]
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Uh, oh! Something went wrong - please try again later :(</h2>;
  }

  const deleteListingLoadingMessage = deleteListingLoading ? (
    <h4>Deletion in progress...</h4>
  ) : null;

  const deleteListingErrorMessage = deleteListingError ? (
    <h4>Something wne wrong with deleting - please try again later :(</h4>
  ) : null;

  return (
    <div>
      <h2>{title}</h2>
      {listingList}
      {deleteListingLoadingMessage}
      {deleteListingErrorMessage}
    </div>
  );
};

export default Listings;
