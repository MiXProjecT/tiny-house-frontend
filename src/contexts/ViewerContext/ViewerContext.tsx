import React, { createContext, useMemo, useState } from "react";
import { Viewer } from "lib/graphql/generated";

export type ViewerContextType = {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
};

const initialViewer: Viewer = {
  id: null,
  token: null,
  avatar: null,
  hasWallet: null,
  didRequest: false,
};

export const ViewerContext = createContext({} as ViewerContextType);

export const ViewerProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [viewer, setViewer] = useState<Viewer>(initialViewer);

  const value = useMemo(
    () => ({
      viewer,
      setViewer,
    }),
    [viewer, setViewer]
  );
  return (
    <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>
  );
};
