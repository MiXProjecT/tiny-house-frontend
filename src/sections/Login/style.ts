import styled, { css } from "styled-components";
import { Card, Layout, Typography } from "antd";

const { Content } = Layout;
const { Text, Title } = Typography;

const marginTop = css`
  margin-top: 5px;
`;

export const LogInSection = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: auto;
`;

export const Container = styled(Card)`
  width: 450px;
  text-align: center;
  padding: 10px 0 20px;
`;

export const Intro = styled.div`
  ${marginTop}
`;

export const IntroTitle = styled(Title)`
  ${marginTop}
`;

export const IntroText = styled(Text)`
  ${marginTop}
`;
export const GoogleButton = styled.button`
  margin: 40px auto;
  border-radius: 2px;
  background-color: #4285f4;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12);
  border: none;
  display: flex;
  align-items: center;
  padding: 1px;
  color: #fff;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  }

  &:active {
    background: #3367d6;
  }
`;

export const GoogleButtonLogo = styled.img`
  height: 43px;
`;

export const GoogleButtonText = styled.span`
  text-align: left;
  white-space: nowrap;
  padding: 10px;
`;

export const Note = styled(Text)`
  ${marginTop}
`;
