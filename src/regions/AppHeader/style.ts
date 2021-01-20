import styled from "styled-components";
import { Layout, Menu as AntdMenu } from "antd";
import { Link } from "react-router-dom";

const { Header: AntdHeader } = Layout;
const { Item, SubMenu } = AntdMenu;

export const Header = styled(AntdHeader)`
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  padding: 0;
  z-index: 99;
`;

export const Navigation = styled.nav`
  display: grid;
`;

export const LogoLink = styled(Link)`
  display: inline-block;
  padding: 0 20px;
`;

export const LogoBlock = styled.div`
  display: inline-block;
  padding-left: 60px;
`;

export const Logo = styled.img`
  width: 36px;
`;

export const Menu = styled(AntdMenu)`
  width: 100%;
  padding: 0 20px;
  border: 0;
  display: grid;
  grid-template-areas: "logo search home auth";
  grid-auto-columns: auto minmax(0, 1fr) auto auto;
  &:before {
    content: none;
  }
`;

export const ItemLogo = styled(Item)`
  grid-area: logo;

  &&&:hover {
    color: transparent;
    border-bottom: none;
  }
`;

export const ItemHome = styled(Item)`
  grid-area: home;
`;

export const ItemAuth = styled(Item)`
  grid-area: auth;
`;

export const UserLinksSubMenu = styled(SubMenu)`
  grid-area: auth;
`;
