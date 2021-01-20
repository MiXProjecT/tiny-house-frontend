import React from "react";
import { Header, LogoBlock, Logo } from "./style";
import logo from "./assets/tinyhouse-logo.png";

const AppHeaderSkeleton = (): JSX.Element => (
  <Header>
    <LogoBlock>
      <Logo src={logo} />
    </LogoBlock>
  </Header>
);

export default AppHeaderSkeleton;
