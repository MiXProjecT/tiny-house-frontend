import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

export const UserContent = styled(Content)`
  padding: 60px 120px;
  display: grid;
  grid-template-rows: auto auto auto;

  @media (max-width: 75em) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
