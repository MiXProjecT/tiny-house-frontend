import React, { useEffect } from "react";
import { Spin } from "antd";
import { Redirect } from "react-router-dom";
import { Viewer, useLogOutMutation } from "lib/graphql/generated";
import { displayErrorMessage, displaySuccessNotification } from "utils";
import { LogOutSection } from "./style";

interface Props {
  setViewer: (viewer: Viewer) => void;
}

const LogOut = ({ setViewer }: Props): JSX.Element => {
  const [logOut, { data: logOutData }] = useLogOutMutation({
    onCompleted: (data) => {
      if (data?.logOut) {
        setViewer(data.logOut);
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
