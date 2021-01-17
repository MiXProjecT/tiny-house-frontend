import React from "react";
import { ErrorBannerStyled } from "./style";

interface Props {
  message?: string;
  description?: string;
}

const ErrorBanner = ({ message, description }: Props): JSX.Element => (
  <ErrorBannerStyled
    banner
    closable
    message={message}
    description={description}
    type="error"
  />
);

ErrorBanner.defaultProps = {
  message: "Uh oh! Something went wrong :(",
  description:
    "Look like something went wrong. Please check your connection and/or try again later.",
};

export default ErrorBanner;
