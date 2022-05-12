let registration = document.querySelector(".sin");
let login = document.querySelector(".log");
let logBody = document.querySelector(".logBody");

// btn for blue color of the button
let btn = document.querySelector(".btnSignUp");
let btn2 = document.querySelector(".btnSignIp");

// btnLogIn fro login
let btnLogIn = document.querySelector(".btnLogIn");
let btnLogUp = document.querySelector(".btnLogUp");

let passInLogin = document.querySelector(".passInLogin");
let UserNameInLogin = document.querySelector(".UserNameInLogin");

let pass = document.querySelector(".pass");
let ConfPass = document.querySelector(".ConfPass");

let UserName = document.querySelector(".UserName");



btnLogUp.addEventListener("click", () => {
  if (pass.value == "") {
    alert("Please enter the password");
  } else if (pass.value != ConfPass.value) {
    alert("passwords are not identicals");
  } else if (UserName.value == "") {
    alert("please enter your name");
  } else {
    if (UserName.value == localStorage.getItem("UserName")) {
      alert("user name arleady taken");
    } else {
      localStorage.setItem("UserName", UserName.value);
      localStorage.setItem("Password", pass.value);
      alert("you are registered");
      window.location.reload();
    }
  }
});

btnLogIn.addEventListener("click", () => {
    if (UserNameInLogin.value == "") {
        alert("please enter your name");
    } else if (passInLogin.value == "") {
        alert("please enter your password");
    } else if (localStorage.getItem("UserName") != UserNameInLogin.value) {
        alert("user name is not correct");
    } else if (localStorage.getItem("Password") != passInLogin.value) {
        alert("password is not correct");
    } else {

      // sabry pls check this
      localStorage.setItem("darkMode",'false');
      window.location.replace("../HTML/Home page.html"); // redirect to page

    }
});
btn.addEventListener("click", () => {
  registration.classList.remove("hidden");
  logBody.classList.add("Body-sing-up-active");
});
btn2.addEventListener("click", () => {
  registration.classList.add("hidden");
  logBody.classList.remove("Body-sing-up-active");
});
