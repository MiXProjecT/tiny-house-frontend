import React, { useContext } from "react";
import { AppHeader } from "regions";
import { ViewerContext } from "contexts/ViewerContext";
import { Layout } from "./style";

const MainLayout: React.FC = ({ children }) => {
  const { viewer } = useContext(ViewerContext);
  return (
    <Layout id="app">
      {viewer.didRequest ? <AppHeader /> : <AppHeader.Skeleton />}
      {children}
    </Layout>
  );
};

export default MainLayout;
