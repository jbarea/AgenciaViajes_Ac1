import React from "react";
import { isEmpty, isEmail, isMinLength } from "@utils/Utils";

// Generación de objeto data para formularios
export function generateStateData(inputs) {
  const output = {};
  inputs.forEach(input => (output[input.name] = stateData()));
  return output;
}

export const validations = {
  1: "valid",
  2: "invalid"
};

//Objeto data
export const stateData = () => ({ value: "", message: "", validation: null });

export const FormInputs = props => {
  const elements = [];
  props.elements.forEach((input, index) => {
    const className = input.className ? [...input.className].join(" ") : "";
    switch (input.type) {
      case "textarea":
        elements.push(
          <textarea
            name={input.name}
            placeholder={`${input.placeholder}${input.required ? "*" : ""}`}
            key={index}
            className={className}
            onChange={props.onChange}
            value={props.data[input.name].value}
          />
        );
        break;
      case "info":
        elements.push(
          <p key={index} className={`info ${className}`}>
            {input.text}
          </p>
        );
        break;
      default:
        elements.push(
          <input
            key={index}
            name={input.name}
            className={className}
            placeholder={`${input.placeholder}${input.required ? "*" : ""}`}
            type={input.type}
            spellCheck={input.spellCheck}
            onChange={props.onChange}
            value={props.data[input.name].value}
          />
        );
    }
  });

  return <React.Fragment>{elements}</React.Fragment>;
};

export const tagNames = {
  input: "INPUT",
  textarea: "TEXTAREA"
};

export const types = {
  text: "text",
  email: "email",
  tel: "tel",
  textarea: "textarea"
};

const isDataInput = type => {
  for (let validType in types) {
    if (validType === type) {
      return true;
    }
  }
  return false;
};
