import React from "react";
import Header from "@components/Header";
import CabeceraSection from "@components/CabeceraSection";
import DestinosSection from "@components/DestinosSection";
import QuienesSomosSection from "@components/QuienesSomosSection";
import ContactoSection from "@components/ContactoSection";
import Footer from '@components/Footer';
import MediaQuery from "react-responsive";
import { sizes } from "@config/responsive";

export default class IndexPage extends React.Component {
  render() {
    return (
      <div id="indexPage">
        <Header />
        <CabeceraSection />
        <DestinosSection />
        <QuienesSomosSection/>
        <ContactoSection/>
        <Footer />
      </div>
    );
  }
}
