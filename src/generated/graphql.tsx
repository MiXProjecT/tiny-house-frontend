import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Listing = {
  __typename?: "Listing";
  id: Scalars["ID"];
  title: Scalars["String"];
  image: Scalars["String"];
  address: Scalars["String"];
  price: Scalars["Int"];
  numOfGuests: Scalars["Int"];
  numOfBeds: Scalars["Int"];
  numOfBaths: Scalars["Int"];
  rating: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  listings: Array<Listing>;
};

export type Mutation = {
  __typename?: "Mutation";
  deleteListing: Listing;
};

export type MutationDeleteListingArgs = {
  id: Scalars["ID"];
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export type DeleteListingMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteListingMutation = { __typename?: "Mutation" } & {
  deleteListing: { __typename?: "Listing" } & Pick<Listing, "id">;
};

export type MyListingFragment = { __typename?: "Listing" } & Pick<
  Listing,
  | "id"
  | "title"
  | "image"
  | "address"
  | "price"
  | "numOfGuests"
  | "numOfBeds"
  | "rating"
>;

export type ListingListQueryVariables = Exact<{ [key: string]: never }>;

export type ListingListQuery = { __typename?: "Query" } & {
  listings: Array<{ __typename?: "Listing" } & MyListingFragment>;
};

export const MyListingFragmentDoc = gql`
  fragment MyListing on Listing {
    id
    title
    image
    address
    price
    numOfGuests
    numOfBeds
    rating
  }
`;
export const DeleteListingDocument = gql`
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
    }
  }
`;
export type DeleteListingMutationFn = Apollo.MutationFunction<
  DeleteListingMutation,
  DeleteListingMutationVariables
>;

/**
 * __useDeleteListingMutation__
 *
 * To run a mutation, you first call `useDeleteListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteListingMutation, { data, loading, error }] = useDeleteListingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteListingMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteListingMutation,
    DeleteListingMutationVariables
  >
) {
  return Apollo.useMutation<
    DeleteListingMutation,
    DeleteListingMutationVariables
  >(DeleteListingDocument, baseOptions);
}
export type DeleteListingMutationHookResult = ReturnType<
  typeof useDeleteListingMutation
>;
export type DeleteListingMutationResult = Apollo.MutationResult<DeleteListingMutation>;
export type DeleteListingMutationOptions = Apollo.BaseMutationOptions<
  DeleteListingMutation,
  DeleteListingMutationVariables
>;
export const ListingListDocument = gql`
  query ListingList {
    listings {
      ...MyListing
    }
  }
  ${MyListingFragmentDoc}
`;

/**
 * __useListingListQuery__
 *
 * To run a query within a React component, call `useListingListQuery` and pass it any options that fit your needs.
 * When your component renders, `useListingListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListingListQuery({
 *   variables: {
 *   },
 * });
 */
export function useListingListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListingListQuery,
    ListingListQueryVariables
  >
) {
  return Apollo.useQuery<ListingListQuery, ListingListQueryVariables>(
    ListingListDocument,
    baseOptions
  );
}
export function useListingListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListingListQuery,
    ListingListQueryVariables
  >
) {
  return Apollo.useLazyQuery<ListingListQuery, ListingListQueryVariables>(
    ListingListDocument,
    baseOptions
  );
}
export type ListingListQueryHookResult = ReturnType<typeof useListingListQuery>;
export type ListingListLazyQueryHookResult = ReturnType<
  typeof useListingListLazyQuery
>;
export type ListingListQueryResult = Apollo.QueryResult<
  ListingListQuery,
  ListingListQueryVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
