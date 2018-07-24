export const isEmpty = input =>
  typeof input !== "string" || input.trim().length > 0;
export const isEmail = input =>
  !isEmpty(input) && input.match(/^\w+@\w+\.\w+$/);
export const isMinLength = (input, minLength) =>
  !isEmpty(input) && input.trim().length >= minLength;
export const isResponsive = () => (window.innerWidth > 900 ? false : true);
export const scrollToSection = section => {
  const isResponsive = () => (window.innerWidth > 900 ? false : true);

  const newPosition = () => {
    if (isResponsive()) {
      const heightHeader = document.querySelector("header").clientHeight;
      return (
        document.querySelector(`section#${section}`).offsetTop - heightHeader
      );
    }
    return document.querySelector(`section#${section}`).offsetTop;
  };
  window.scroll({
    top: newPosition(),
    left: 0,
    behavior: "smooth"
  });
};
