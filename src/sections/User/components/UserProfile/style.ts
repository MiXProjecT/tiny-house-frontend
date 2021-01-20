import styled from "styled-components";
import { Avatar, Button, Card, Typography } from "antd";

const { Title: AntdTitle } = Typography;

export const UserCard = styled(Card)`
  max-width: 400px;
  margin: 0 auto;
  .ant-card-body {
    display: grid;
    grid-template-rows: repeat(12, auto);

    &:before {
      content: none;
    }
  }
`;

export const UserAvatar = styled(Avatar)`
  justify-self: center;
`;

export const Title = styled(AntdTitle)`
  color: #1d226c !important;
`;

export const ConnectWithStripeButton = styled(Button)`
  margin-bottom: 20px;
`;
