import React from "react";
import "@css/Header.css";
import LogoImg from "@images/iconoweb.png";
import LogoImgWhite from "@images/iconowebwhite.png";
import Menu, { MenuResponsive } from "@components/Menu";
import SocialNetworks from "@components/SocialNetworks";
import MediaQuery from "react-responsive";
import { sizes } from "@config/responsive";

export default class Header extends React.Component {

  render() {
    return (
      <header>
        <MediaQuery query={`(min-width: ${sizes.lg + 1}px)`}>
          <Logo />
          <Menu />
          <SocialNetworks />
        </MediaQuery>
        <MediaQuery query={`(max-width: ${sizes.lg}px )`}>
          <Logo white />
          <MenuResponsive />
        </MediaQuery>
      </header>
    );
  }
}

const Logo = props => (
  <a href="#" className="logo">
    <img
      src={props.white ? LogoImgWhite : LogoImg}
      alt="Logo GeeksHubs Travel"
    />
  </a>
);
