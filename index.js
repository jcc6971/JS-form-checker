const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);
const errorDisplay = (tag, message, valid) => {
  const Container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container>span");
  if (!valid) {
    Container.classList.add("error");
    span.textContent = message;
  } else {
    Container.classList.remove("error");
    span.textContent = message;
  }
};
const pseudoChecker = (value) => {
  if ((value.length > 0 && value.length < 3) || value.length > 20) {
    errorDisplay("pseudo", "le pseudo doit faire entre 3 et 20 caractères");
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay("pseudo", "pas de caractères spéciaux");
  } else {
    errorDisplay("pseudo", "", true);
  }
};

const emailChecker = (value) => {
  console.log(value);
};

const passwordChecker = (value) => {
  console.log(value);
};

const confirmChecker = (value) => {
  console.log(value);
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        nul;
    }
  });
});
