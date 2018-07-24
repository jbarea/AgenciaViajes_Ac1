import React from "react";
import "@css/Menu.css";
import { items } from "@config/menu.json";
import {scrollToSection, isResponsive} from '@utils/Utils';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.menu = React.createRef();
  }

  isMobile = () => window.innerWidth > 500 ? false : true;
  styleResponsive = () => {
    if (this.props && this.props.active) {
      const left=  !this.isMobile() ? window.innerWidth - this.menu.current.clientWidth : 0;
      return { left: `${left}px` };
    }
  };

  handleScrollTo = e => {
    e.preventDefault();
    scrollToSection(e.currentTarget.getAttribute('to'));
    if(isResponsive()){
      this.props.handleActive();
    }
  }

  render() {
    return (
      <ul className="menu" style={this.styleResponsive()} ref={this.menu}>
        {items.map((item, index) => <Item {...item} onClick={this.handleScrollTo} key={index} />)}
      </ul>
    );
  }
}

const Item = props => (
  <li>
    <a role="button" to={props.section} onClick={props.onClick}>{props.text}</a>
  </li>
);

export class MenuResponsive extends React.Component {
  state = {
    active: false
  };

  handleResize = () => {
    window.onresize = () => {
      if (this.state.active) {
        this.setState({ active: false });
      }
    };
  };

  handleActive = e => {
    if(e) e.preventDefault();
    this.setState({ active: !this.state.active }, () => {
      if (this.state.active) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
    });
  };

  style = () => {
    if (this.state.active) {
      return {
        background: "#fef200"
      };
    }
  };

  render() {
    return (
      <React.Fragment>
        <button
          className="fa fa-bars"
          id="btn-menu"
          style={this.style()}
          onClick={this.handleActive}
        />
        <Menu active={this.state.active} handleActive={this.handleActive} />
      </React.Fragment>
    );
  }
}
