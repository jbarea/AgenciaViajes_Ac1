import React from "react";
import "@css/CabeceraSection.css";
import HeaderImg from "@images/header.jpg"; 
import {scrollToSection} from '@utils/Utils';
import {items} from '@config/menu.json';
export default class CabeceraSection extends React.Component {

  handleButtonDestinos = e => {
    e.preventDefault();
    scrollToSection(e.currentTarget.getAttribute('to'));
    
  }
  render() {
    return (
      <section id="cabecera" style={backgroundSection}>
        <div>
          <h1>Viaja!</h1>
          <h2>Descubre lugares maravillosos!</h2>
          <button to="destinos" onClick={this.handleButtonDestinos}>ver destinos</button>
        </div>
      </section>
    );
  }
}

const backgroundSection = {
  background: `url(${HeaderImg})`,
  backgroundPosition: "center center",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%"
};
