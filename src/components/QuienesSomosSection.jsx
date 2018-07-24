import React from "react";
import "@css/QuienesSomosSection.css";
import BackgroundImg from "@images/back.jpeg";

const backgroundStyle = {
  background: `url(${BackgroundImg})`,
  backgroundSize: "cover"
};

export default class QuienesSomosSection extends React.Component {
  render() {
    return (
      <section id="quienes-somos" style={backgroundStyle}>
        <div className="diffuse">
          <div>
            <h1>Quien somos</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              molestie in dolor a lacinia. Cras id eros a odio dignissim porta.
              Aenean scelerisque lacus velit, nec facilisis tortor mollis id.
              Nunc est justo, placerat in lectus sed, elementum tempor libero.
              Nam nec lorem imperdiet, varius lorem non, rutrum justo. Donec
              eget velit eu risus ultricies scelerisque.
            </p>
            <button>Descubrir</button>
          </div>
        </div>
      </section>
    );
  }
}
