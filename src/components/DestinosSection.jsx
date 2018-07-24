import React from "react";
import "@css/DestinosSection.css";
import { getTravels } from "@services/DestinosService";

export default class DestinosSection extends React.Component {
  state = {
    travels: [],
    active: 0,
    auto: true
  };

  constructor(props) {
    super(props);
    this.config = {
      time: 4000
    };
    this.timer = null;
  }
  componentWillMount() {
    this.handleTravels();
  }

  componentDidMount() {
    this.handleTimeTransition();
  }

  handleTravels = () => {
    getTravels().then(travels => {
      this.setState({ travels });
    });
  };

  handleTimeTransition = () => {
    if (!this.timer || this.state.auto) {
      this.timer = setTimeout(this.handleTransition, this.config.time);
    } else {
      clearTimeout(this.timer);
    }
  };

  handleButtonTransition = e => {
    e.preventDefault();
    const action = e.target.getAttribute("action");
    this.setState({ auto: false }, () => {
      this.handleTransition(action);
    });
  };

  handleTransition = (direction = "next") => {
    const countTravels = Object.keys(this.state.travels).length - 1;
    let active = 0;
    switch (direction) {
      case "prev":
        active = this.state.active === 0 ? countTravels : this.state.active - 1;
        break;
      case "next":
        active = this.state.active === countTravels ? 0 : this.state.active + 1;
        break;
      default:
    }
    this.setState({ active }, this.handleTimeTransition);
  };

  handleChangeSlideBullet = e => {
    e.preventDefault();

    const active = Number.parseInt(e.target.getAttribute("index"));
    if (typeof active === "number") {
      this.setState({ active });
    }
  };

  handleButtonAuto = e => {
    e.preventDefault();
    this.setState({ auto: !this.state.auto }, this.handleTimeTransition);
  };

  render() {
    return (
      <section id="destinos">
        <ButtonControlSlide onClick={this.handleButtonTransition} />
        {this.state.travels.map((props, index) => (
          <Travel {...props} key={index} active={this.state.active === index} />
        ))}
        <ButtonControlSlide right onClick={this.handleButtonTransition} />
        <BulletsControlSlide
          count={Object.keys(this.state.travels).length}
          onClick={this.handleChangeSlideBullet}
          active={this.state.active}
        />
        <ButtonActionSlide
          auto={this.state.auto}
          onClick={this.handleButtonAuto}
        />
      </section>
    );
  }
}

const Travel = props => (
  <div className={`destino ${props.active ? "active" : ""}`} to={props.name}>
    <div style={{ background: `url(${props.image})` }}>
      <div className="header">{`Save ${props.save}$ pay only`}</div>
      <div className="precio">{`${props.price}$`}</div>
    </div>
    <p>{props.name}</p>
  </div>
);

const ButtonControlSlide = props => (
  <button
    className={`fa fa-${props.right ? "greater-than" : "less-than"}`}
    action={props.right ? "next" : "prev"}
    onClick={props.onClick}
  />
);

const BulletsControlSlide = props => {
  if (props.count) {
    const count = props.count > 0 ? props.count : 0;
    return (
      <div className="slide-bullets">
        {Array(count)
          .fill()
          .map((bullet, index) => (
            <span
              onClick={props.onClick}
              className={`bullet${props.active === index ? " active" : ""}`}
              index={index}
              key={index}
            />
          ))}
      </div>
    );
  }
  return null;
};

const ButtonActionSlide = props => (
  <button
    className={`fa ${props.auto ? "fa-pause" : "fa-play"}`}
    onClick={props.onClick}
  />
);
