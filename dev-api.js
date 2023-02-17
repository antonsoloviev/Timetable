// Url to SYMPHOLIGHT REST API with port 5001 (for SSL) and HTTPS (SSL)
var apiUrl = "http://127.0.0.1:500/api/"
var token;

const buttonDevAuth = document.querySelector(".button-dev__auth");
const buttonDevGetBlocks = document.querySelector(".button-dev__getBlocks");
const buttonDevSetValue = document.querySelector(".button-dev__setVal");

buttonDevAuth.addEventListener('click', () => {
  authorize();
});
buttonDevGetBlocks.addEventListener('click', () => {
  getValueBlockIds();
});
buttonDevSetValue.addEventListener('click', () => {
  setValue();
});

function authorize() {

  url = apiUrl + "Auth/login";

  loginData = {};
  loginData.username = document.getElementById("username").value;
  loginData.password = document.getElementById("password").value;

  // Call the postData function and provide the URL and the loginData object
  postData(url, loginData)
    .then(response => {
      token = response.token;
      document.getElementById("authStatus").value = "Authorized";
      document.getElementById("authStatus").classList.add("green");
    })
    .catch(error => alert("An error occurred: Message = " + error.message));
}

function getValueBlockIds() {

  url = apiUrl + "workflow/blocks/values";

  getData(url)
    .then(response => {
      // TODO
      console.log(response);
      // TODO
      response.forEach(element => {
        document.getElementById("valueBlockIds").value += element.displayName + ": " + element.id + "\n";
      });
    }).catch(error => alert("An error occurred: Message = " + error.message));
}

function setValue() {
  valueBlockData = {};
  valueBlockData.inPortValue = document.getElementById("serial").value;

  url = apiUrl + "workflow/blocks/values/" + document.getElementById("valueBlockId").value;

  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}