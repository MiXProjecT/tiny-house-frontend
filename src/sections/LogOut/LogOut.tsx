import React, { useContext, useEffect } from "react";
import { Spin } from "antd";
import { Redirect } from "react-router-dom";
import { useLogOutMutation } from "lib/graphql/generated";
import { displayErrorMessage, displaySuccessNotification } from "utils";
import { ViewerContext } from "contexts/ViewerContext";
import { LogOutSection } from "./style";

const LogOut = (): JSX.Element => {
  const { setViewer } = useContext(ViewerContext);
  const [logOut, { data: logOutData }] = useLogOutMutation({
    onCompleted: (data) => {
      if (data?.logOut) {
        setViewer(data.logOut);
        sessionStorage.removeItem("token");
        displaySuccessNotification("You've successfully logged out!");
      }
    },
    onError: () => {
      displayErrorMessage("Something went wrong! Please try again :(");
    },
  });

  useEffect(() => {
    logOut();
  }, [logOut]);

  return logOutData?.logOut ? (
    <LogOutSection>
      <Spin size="large" />
    </LogOutSection>
  ) : (
    <Redirect to="/" />
  );
};

export default LogOut;
