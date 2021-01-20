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

export type Booking = {
  __typename?: "Booking";
  id: Scalars["ID"];
  listing: Listing;
  tenant: User;
  checkIn: Scalars["String"];
  checkOut: Scalars["String"];
};

export type Bookings = {
  __typename?: "Bookings";
  total: Scalars["Int"];
  result: Array<Booking>;
};

export enum ListingType {
  Apartment = "APARTMENT",
  House = "HOUSE",
}

export type Listing = {
  __typename?: "Listing";
  id: Scalars["ID"];
  title: Scalars["String"];
  description: Scalars["String"];
  image: Scalars["String"];
  host: User;
  type: ListingType;
  address: Scalars["String"];
  city: Scalars["String"];
  bookings?: Maybe<Bookings>;
  bookigsIndex: Scalars["String"];
  price: Scalars["Int"];
  NumOfGuests: Scalars["Int"];
};

export type ListingBookingsArgs = {
  limit: Scalars["Int"];
  page: Scalars["Int"];
};

export type Listings = {
  __typename?: "Listings";
  total: Scalars["Int"];
  result: Array<Listing>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  name: Scalars["String"];
  avatar: Scalars["String"];
  contact: Scalars["String"];
  hasWallet: Scalars["Boolean"];
  income?: Maybe<Scalars["Int"]>;
  bookings?: Maybe<Bookings>;
  listings: Listings;
};

export type UserBookingsArgs = {
  limit: Scalars["Int"];
  page: Scalars["Int"];
};

export type UserListingsArgs = {
  limit: Scalars["Int"];
  page: Scalars["Int"];
};

export type Viewer = {
  __typename?: "Viewer";
  id?: Maybe<Scalars["ID"]>;
  token?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  hasWallet?: Maybe<Scalars["Boolean"]>;
  didRequest: Scalars["Boolean"];
};

export type Query = {
  __typename?: "Query";
  authUrl: Scalars["String"];
  user: User;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type LogInInput = {
  code: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  logIn: Viewer;
  logOut: Viewer;
};

export type MutationLogInArgs = {
  input?: Maybe<LogInInput>;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export type LogInMutationVariables = Exact<{
  input?: Maybe<LogInInput>;
}>;

export type LogInMutation = { __typename?: "Mutation" } & {
  logIn: { __typename?: "Viewer" } & Pick<
    Viewer,
    "id" | "token" | "avatar" | "hasWallet" | "didRequest"
  >;
};

export type LogOutMutationVariables = Exact<{ [key: string]: never }>;

export type LogOutMutation = { __typename?: "Mutation" } & {
  logOut: { __typename?: "Viewer" } & Pick<
    Viewer,
    "id" | "token" | "avatar" | "hasWallet" | "didRequest"
  >;
};

export type AuthUrlQueryVariables = Exact<{ [key: string]: never }>;

export type AuthUrlQuery = { __typename?: "Query" } & Pick<Query, "authUrl">;

export const LogInDocument = gql`
  mutation LogIn($input: LogInInput) {
    logIn(input: $input) {
      id
      token
      avatar
      hasWallet
      didRequest
    }
  }
`;
export type LogInMutationFn = Apollo.MutationFunction<
  LogInMutation,
  LogInMutationVariables
>;

/**
 * __useLogInMutation__
 *
 * To run a mutation, you first call `useLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logInMutation, { data, loading, error }] = useLogInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLogInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogInMutation,
    LogInMutationVariables
  >
) {
  return Apollo.useMutation<LogInMutation, LogInMutationVariables>(
    LogInDocument,
    baseOptions
  );
}
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>;
export type LogInMutationResult = Apollo.MutationResult<LogInMutation>;
export type LogInMutationOptions = Apollo.BaseMutationOptions<
  LogInMutation,
  LogInMutationVariables
>;
export const LogOutDocument = gql`
  mutation LogOut {
    logOut {
      id
      token
      avatar
      hasWallet
      didRequest
    }
  }
`;
export type LogOutMutationFn = Apollo.MutationFunction<
  LogOutMutation,
  LogOutMutationVariables
>;

/**
 * __useLogOutMutation__
 *
 * To run a mutation, you first call `useLogOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logOutMutation, { data, loading, error }] = useLogOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogOutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogOutMutation,
    LogOutMutationVariables
  >
) {
  return Apollo.useMutation<LogOutMutation, LogOutMutationVariables>(
    LogOutDocument,
    baseOptions
  );
}
export type LogOutMutationHookResult = ReturnType<typeof useLogOutMutation>;
export type LogOutMutationResult = Apollo.MutationResult<LogOutMutation>;
export type LogOutMutationOptions = Apollo.BaseMutationOptions<
  LogOutMutation,
  LogOutMutationVariables
>;
export const AuthUrlDocument = gql`
  query AuthUrl {
    authUrl
  }
`;

/**
 * __useAuthUrlQuery__
 *
 * To run a query within a React component, call `useAuthUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthUrlQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthUrlQuery(
  baseOptions?: Apollo.QueryHookOptions<AuthUrlQuery, AuthUrlQueryVariables>
) {
  return Apollo.useQuery<AuthUrlQuery, AuthUrlQueryVariables>(
    AuthUrlDocument,
    baseOptions
  );
}
export function useAuthUrlLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AuthUrlQuery, AuthUrlQueryVariables>
) {
  return Apollo.useLazyQuery<AuthUrlQuery, AuthUrlQueryVariables>(
    AuthUrlDocument,
    baseOptions
  );
}
export type AuthUrlQueryHookResult = ReturnType<typeof useAuthUrlQuery>;
export type AuthUrlLazyQueryHookResult = ReturnType<typeof useAuthUrlLazyQuery>;
export type AuthUrlQueryResult = Apollo.QueryResult<
  AuthUrlQuery,
  AuthUrlQueryVariables
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
