import React, { createContext, useState } from "react";
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

  return (
    <ViewerContext.Provider value={{ viewer, setViewer }}>
      {children}
    </ViewerContext.Provider>
  );
};
