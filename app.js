// image slide
let thumbnails = document.getElementsByClassName("thumbnail");
let activeImages = document.getElementsByClassName("active");

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function () {
    if (activeImages.length > 0) {
      activeImages[0].classList.remove("active");
    }

    this.classList.add("active");
    document.getElementById("featured").src = this.src;
  });
}
// card validation
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const cardNumber = document.getElementById("cardNumber");
const date = document.getElementById("date");
const cvc = document.getElementById("cvc");

// const btnsend = document.querySelector("button");
// const mass = document.querySelector("h1");
// btnsend.addEventListener("click", (e) => {
//   e.preventDefault();

//   btnsend.innerText = "Payment Confirmed";
//   checkInputs();
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btnsend = document.querySelector("button");
  const mass = document.querySelector("h1");
  // let inputs = document.querySelector("input");
  btnsend.addEventListener("click", (e) => {
    e.preventDefault();
    btnsend.innerText = "Payment Processing ...";
    setTimeout(() => {
      // inputs.forEach((input) => (input.value = ""));
      btnsend.innerText = "Payment";
      mass.innerText = "Payment Confirmed";
    }, 1000);
    checkInputs();
  });
  checkInputs();
  clearField();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const cardNumberValue = cardNumber.value.trim();
  const cvcValue = cvc.value.trim();
  const dateValue = date.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Name required");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email required");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (cardNumberValue === "") {
    setErrorFor(cardNumber, "Card number required");
  } else if (cardNumberValue.length < 16) {
    setErrorFor(cardNumber, "Card number required");
  } else {
    setSuccessFor(cardNumber);
  }

  if (dateValue === "") {
    setErrorFor(date, "Expire date required");
  } else if (dateValue.length < 5) {
    setErrorFor(date, "Expire date required");
  } else {
    setSuccessFor(date);
  }

  if (cvcValue === "") {
    setErrorFor(cvc, "CVC required");
  } else if (cvcValue.length < 3) {
    setErrorFor(cvc, "CVC required");
  } else {
    setSuccessFor(cvc);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function clearField() {
  if (document.getElementById("form")) {
    document.form.reset();
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
var countDownDate = new Date("July 6, 2020 23:50:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
