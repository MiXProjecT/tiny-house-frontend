import React from "react";
import { Viewer } from "lib/graphql/generated";
import { AppHeader } from "regions";
import { Layout } from "./style";

interface Props {
  children?: React.ReactNode | React.ReactChild[];
  viewer: Viewer;
}

const MainLayout = ({ children, viewer }: Props): JSX.Element => (
  <Layout id="app">
    {viewer.didRequest ? <AppHeader viewer={viewer} /> : <AppHeader.Skeleton />}
    {children}
  </Layout>
);

export default MainLayout;
