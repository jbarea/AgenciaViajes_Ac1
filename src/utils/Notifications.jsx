import React from "react";
import { render } from "react-dom";
import "@css/Notifications.css";

const container = document.getElementById("notifications");
const notifications = [];

export const types = {
  info: "info"
};

export function addNotification(notification) {
  const div = document.createElement("div");
  render(
    <Notification message={notification.message} type={notification.type} />,
    div,
    () => {
      const renderNotification = div.children[0];
      notifications.push(renderNotification);
      container.appendChild(renderNotification);
    }
  );
}

export default addNotification;

class Notification extends React.Component {
  state = {
    hidden: true
  };

  transition = 150;
  lifetime = 3000;
  ref = React.createRef();

  componentDidMount() {
    this.cycleLife();
  }

  cycleLife = () => {
    this.setState({ hidden: false }, () => {
      setTimeout(() => {
        this.setState({ hidden: true }, () => {
          setTimeout(() => {
            container.removeChild(this.ref.current);
          }, this.transition);
        });
      }, this.lifetime);
    });
  };

  handleRemove = e => {
    e.preventDefault();
    const index = e.currentTarget.getAttribute("index");
    container.removeChild(this.ref.current);
  };

  style = () => ({
    opacity: this.state.hidden ? "0" : "1",
    transition: `all ${this.transition}ms`
  });

  render() {
    const { type, message } = this.props;
    return (
      <div
        ref={this.ref}
        type={type}
        className={`notification`}
        style={this.style()}
        onClick={this.handleRemove}
      >
        <Icon type={type} />
        <p>{message}</p>
      </div>
    );
  }
}

const Icon = props => {
  let icon = "";
  switch (props.type) {
    case types.info:
      icon = "info";
      break;
    default:
  }
  return <i className={`fa fa-${icon}`} />;
};
