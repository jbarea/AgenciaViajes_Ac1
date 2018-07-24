import React from "react";
import { autoCopy } from '@utils/AutoCopy';
import "@css/ContactoSection.css";
import { FormInputs, generateStateData} from "@utils/FormUtils";
export default class ContactoSection extends React.Component {
  render() {
    return (
      <section id="donde-estamos">
        <Map />
        <div>
          <Info />
          <FormContact />
        </div>
      </section>
    );
  }
}

const Map = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769.8613098749295!2d-0.356409388703454!3d39.48185980539037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604898947abad3%3A0x5aae0e0b7fa0358a!2sGeeksHubs+Space+Valencia!5e0!3m2!1ses!2ses!4v1532217312518"
    allowFullScreen
  />
);

function Info() {
  return (
    <div className="info px-0 px-md-1">
      <p onClick={autoCopy}>
        <i className="fa fa-at" />enquiry@artiotravels.com
      </p>
      <p onClick={autoCopy}>
        <i className="fa fa-phone" />0264 123 4567
      </p>
      <p>
        Give us a call or drop by anytime, we endeavour to answer all enquiries
        within 24 hours on business days.
      </p>
      <p>We are open from 8.30 AM - 4.00 PM week days.</p>
      <hr />
    </div>
  );
}

class FormContact extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  constructor(props) {
    super(props);
    this.elements = [
      {
        name: "name",
        type: "text",
        placeholder: "Name",
        required: true
      },
      {
        name: "email",
        type: "email",
        placeholder: "Email",
        required: true
      },
      {
        name: "phone",
        type: "tel",
        placeholder: "Phone"
      },
      {
        name: "country",
        type: "text",
        placeholder: "Country"
      },
      {
        name: "message",
        type: "textarea",
        placeholder: "Message",
        className: ["all-columns", "x2"],
        required: true
      },
      {
        type: "info",
        className: ["text-uppercase", "all-columns", "mt-0"],
        text: "* Please complete all fields correctly"
      }
    ];

    this.state = {
      data: generateStateData(this.elements)
    };
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ data: { ...this.state.data, [name]: value } });
  };

  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="divide grey">
        <FormInputs
          elements={this.elements}
          onChange={this.handleChange}
          data={this.state.data}
        />
        <input type="submit" value="Enviar mensaje" className="px-1 py-1" />
      </form>
    );
  }
}
