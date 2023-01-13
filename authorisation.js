// Url to SYMPHOLIGHT REST API with port 5001 (for SSL) and HTTPS (SSL)
var apiUrl = "https://127.0.0.1:5001/api/"
var token;

async function authorizeAutomatic() {

  url = apiUrl + "Auth/login";

  loginData = {};
  loginData.username = 'admin';
  loginData.password = '1234';

  // Call the postData function and provide the URL and the loginData object
  postData(url, loginData)
    .then(response => {
      token = response.token;
      document.getElementById("authStatus").value = "Authorized";
      document.getElementById("authStatus").classList.add("green");
    })
    .catch(error => alert("An error occurred: Message = " + error.message));
}

authorizeAutomatic();