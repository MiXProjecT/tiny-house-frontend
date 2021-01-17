import styled from "styled-components";
import { Alert } from "antd";

export const ErrorBannerStyled = styled(Alert)`
  position: fixed;
  width: 100%;
  top: 64px;
  left: 0;
  z-index: 99;
`;
