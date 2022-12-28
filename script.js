var form = document.getElementById("form");
var email = document.querySelector(".form-control");
var errorSign = form.querySelector(".error");
var textDanger = document.getElementsByClassName("danger-text");
var inputContainer = form.getElementsByClassName("input-container");

form.onsubmit = (e) => {
  e.preventDefault();
  //   console.log(email.value);
  if (validateEmail(email.value)) {
    if (!textDanger[0].classList.contains("hide")) {
      textDanger[0].classList.add("hide");
      errorSign.classList.add("hide");
      inputContainer[0].classList.remove("invalid");
    }
    // console.log("valid mail");
  } else {
    if (textDanger[0].classList.contains("hide")) {
      textDanger[0].classList.remove("hide");
      errorSign.classList.remove("hide");
      inputContainer[0].classList.add("invalid");
    }
    // console.log("invalid");
  }
};

function validateEmail(input) {
  // console.log(input);
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    // alert("Valid mail id");
    // if (errorSign.classList.co) email.focus();
    return true;
  } else {
    // alert("invalid email");
    email.focus();
    return false;
  }
}

// console.log(form);
