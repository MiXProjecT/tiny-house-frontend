import React from "react";
import { ErrorBannerStyled } from "./style";

interface Props {
  message?: string;
  description?: string;
}

const defaultMessage = "Uh oh! Something went wrong :(";
const defaultDescription =
  "Look like something went wrong. Please check your connection and/or try again later.";

const ErrorBanner = ({ message, description }: Props): JSX.Element => (
  <ErrorBannerStyled
    banner
    closable
    message={message || defaultMessage}
    description={description || defaultDescription}
    type="error"
  />
);

export default ErrorBanner;
