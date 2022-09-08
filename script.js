"use strict";

// login and register hide
const loginModal = document.querySelector(".logining-in");
const loginButton = document.querySelector(".btn--login");
const registerModal = document.querySelector(".register-mdl");
const registrateingB = document.getElementById("register");
const logininginB = document.getElementById("login");

loginButton?.addEventListener("click", function () {
  loginModal.classList.toggle("hidden");
});
registerButton.addEventListener("click", function () {
  registerModal.classList.toggle("hidden");
});

//register check
let registerEmail = document.getElementById("register-email").value;
let passwordCheck = document.getElementById("again").value;
let password = document.getElementById("first").value;

let emailAdress, realPassword;

if (registerEmail !== null && password !== null && password === passwordCheck) {
  registrateingB.disabled = false;
  logininginB.addEventListener("click", function () {
    emailAdress = registerEmail;
    realPassword = password;
    nEmail.value = emailAdress;
    nPassword.value = password;
  });
} else {
  registrateingB.disabled = true;
}

//login check
let logEmail = document.querySelector("#email").value;
let logPass = document.querySelector("#password").value;

if (realPassword === logPass && emailAdress === logEmail) {
  logininginB.disabled = false;
} else {
  logininginB.disabled = true;
}

//Exit click
const exit = document.querySelector(".exit");

exit.addEventListener("click", function () {
  loginModal.classList.add("hidden");
  registerModal.classList.add("hidden");
});

//nav hide
const navHide = document.querySelector(".menu");
const sideBar = document.querySelector("nav.nav");

navHide.addEventListener("click", function () {
  sideBar.classList.toggle("hidden");
});

//Password Change hidden
const passwordChange = document.getElementById("psChange");
const passwordpart = document.querySelector(".pch");
const height = document.querySelector(".change");

passwordChange.addEventListener("click", function () {
  height.style.height = "60rem";
  passwordpart.classList.toggle("hidden");
});

//save disable
const save = document.getElementById("save");
const edit = document.getElementById("edit");

edit.addEventListener("click", function () {
  save.disabled = false;
});

edit.addEventListener("click", function () {
  document.getElementById("namefr").disabled = false;
  document.getElementById("namelt").disabled = false;
  document.getElementById("nEmail").disabled = false;
});

let firstName, lastName;
let nPassword = document.getElementById("chPs1").value;
let nEmail = document.getElementById("nEmail").value;
let nFirst = document.getElementById("namefr").value;
let nLast = document.getElementById("namelt").value;
let nAgPs = document.getElementById("chPsCh").value;
let btnPs = document.getElementById("saveP");

if (nEmail !== null && nFirst !== null && nLast !== null) {
  save.addEventListener("click", function () {
    emailAdress = nEmail;
    firstName = nFirst;
    lastName = nLast;
  });
}

if (nPassword !== null && nAgPs !== null && nPassword === nAgPs)
  btnPs.addEventListener("click", function () {
    realPassword = nPassword;
  });

//Git test
