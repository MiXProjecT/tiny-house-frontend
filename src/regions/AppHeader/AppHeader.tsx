import React, { useMemo } from "react";
import { HomeOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button, Avatar, Affix } from "antd";
import { Viewer } from "lib/graphql/generated";
import AppHeaderSkeleton from "./AppHeader.skeleton";
import logo from "./assets/tinyhouse-logo.png";
import {
  Header,
  Navigation,
  Menu,
  ItemLogo,
  ItemHome,
  ItemAuth,
  UserLinksSubMenu,
  LogoLink,
  Logo,
} from "./style";

const { Item } = Menu;

interface Props {
  viewer: Viewer;
}

const AppHeader = ({ viewer }: Props): JSX.Element => {
  const userAvatar = useMemo(() => <Avatar src={viewer.avatar} />, [
    viewer.avatar,
  ]);
  const subMenuLogin = useMemo(
    () =>
      viewer.id ? (
        <UserLinksSubMenu title={userAvatar}>
          <Item key="user">
            <UserOutlined />
            Profile
          </Item>
          <Item key="logout">
            <Link to="/logout">
              <LogoutOutlined />
              Log Out
            </Link>
          </Item>
        </UserLinksSubMenu>
      ) : (
        <ItemAuth key="login">
          <Link to="/login">
            <Button type="primary">Sign In</Button>
          </Link>
        </ItemAuth>
      ),
    [viewer.id, userAvatar]
  );

  return (
    <Affix offsetTop={0}>
      <Header role="banner">
        <Navigation>
          <Menu mode="horizontal" selectable={false}>
            <ItemLogo key="home">
              <LogoLink to="/">
                <Logo src={logo} />
              </LogoLink>
            </ItemLogo>
            <ItemHome key="host">
              <Link to="/host">
                <HomeOutlined />
                Home
              </Link>
            </ItemHome>
            {subMenuLogin}
          </Menu>
        </Navigation>
      </Header>
    </Affix>
  );
};

AppHeader.Skeleton = AppHeaderSkeleton;

export default AppHeader;
