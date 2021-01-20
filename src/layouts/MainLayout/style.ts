import styled from "styled-components";
import { Layout as AntdLayout } from "antd";

export const Layout = styled(AntdLayout)`
  height: 100vh;
  overflow: auto;
  display: grid;
  grid-template-rows: auto 1fr;
`;
