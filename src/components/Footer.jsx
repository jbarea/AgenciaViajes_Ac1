import React from "react";
import "@css/Footer.css";
import SocialNetworks from "@components/SocialNetworks";
import MediaQuery from "react-responsive";
import { sizes } from "@config/responsive";
import { stateData as stateDataForm} from "@utils/FormUtils";
import {isEmail} from '@utils/Utils';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <ColumnAyuda />
          <MediaQuery query={`(min-width: ${sizes.lg + 1}px)`}>
            <ColumnInformacion />
          </MediaQuery>
          <ColumnNewsletter />
          <MediaQuery query={`(max-width: ${sizes.lg}px)`}>
            <SocialNetworks />
          </MediaQuery>
        </div>
        <CopyRight />
      </footer>
    );
  }
}

function ColumnAyuda() {
  return (
    <div>
      <h1>¿Necesitas ayuda?</h1>
      <p className="mb-0 ml-1">0264 123 4567</p>
      <p className="mt-0 ml-1">enquiry@geekshubstravels.com</p>
      <p className="font-small">Lun-Vie.9:30-19:00 Sab: 10.00-14.00</p>
    </div>
  );
}

function ColumnInformacion() {
  return (
    <div>
      <h1>Información</h1>
      <ul className="px-0">
        <li>
          <a href="#">Quienes somos</a>
        </li>
        <li>
          <a href="#">Preguntas frecuentes</a>
        </li>
        <li>
          <a href="#">Politica de privacidad</a>
        </li>
        <li>
          <a href="#">Condiciones generales</a>
        </li>
        <li>
          <a href="#">Aviso legal</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
        <li>
          <a href="#">Programa de puntos</a>
        </li>
      </ul>
    </div>
  );
}

class ColumnNewsletter extends React.Component {
  state = {
    email: stateDataForm()
  };

  handleSubscribe = e => {
    e.preventDefault();
    // if(isEmail(this.state.email.value)){
    //   this.setState({email: { ...this.state.email, }})
    // }
  };

  handleChange = e => {
    e.preventDefault();
    const { value } = e.currentTarget;
    this.setState({ email: { ...this.state.email, value } });
  };
  render() {
    return (
      <div className="newsletter my-2">
        <h1>Suscribete a la newsletter</h1>
        <input
          type="email"
          onChange={this.handleChange}
          value={this.state.email.value}
          placeholder="Correo eléctronico"
          className="mb-1 text-lowercase"
        />
        <input
          type="button"
          value="Suscribete"
          onClick={this.handleSubscribe}
          className="px-1 py-1 text-uppercase font-bold"
        />
      </div>
    );
  }
}

function CopyRight() {
  return (
    <React.Fragment>
      <hr />
      <div>
        <p>GeeksHubs Travels 2018 Todos los derechos reservados</p>
      </div>
    </React.Fragment>
  );
}
