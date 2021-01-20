import React, { useContext, useMemo } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useUserQuery } from "lib/graphql/generated";
import { ViewerContext } from "contexts/ViewerContext";
import { PageSkeleton, ErrorBanner } from "components";
import { UserContent } from "./style";
import { UserProfile } from "./components";

interface MatchParams {
  id: string;
}
const User = ({ match }: RouteComponentProps<MatchParams>): JSX.Element => {
  const { viewer } = useContext(ViewerContext);
  const { data, loading, error } = useUserQuery({
    variables: {
      id: match.params.id,
    },
  });

  const viewerIsUser = useMemo(() => viewer.id === match.params.id, [
    viewer.id,
    match.params.id,
  ]);
  const user = useMemo(() => (data ? data.user : null), [data]);
  const userProfileElement = useMemo(
    () =>
      user ? <UserProfile viewerIsUser={viewerIsUser} user={user} /> : null,
    [user, viewerIsUser]
  );

  if (loading) {
    return (
      <UserContent>
        <PageSkeleton />
      </UserContent>
    );
  }

  if (error) {
    return (
      <UserContent>
        <ErrorBanner description="This user may not exist or we've encountered an error. Please try again later" />
        <PageSkeleton />
      </UserContent>
    );
  }

  return <UserContent>{userProfileElement}</UserContent>;
};

export default User;
