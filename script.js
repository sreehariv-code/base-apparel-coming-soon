var form = document.getElementById("form");
var email = document.querySelector(".form-control");
// console.log(email);

form.onsubmit = (e) => {
  e.preventDefault();
  //   console.log(email.value);
  validateEmail(email.value);
};

function validateEmail(input) {
  console.log(input);
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    // alert("Valid mail id");
    email.focus();
    return true;
  } else {
    // alert("invalid email");
    email.focus();
    return false;
  }
}

// console.log(form);
