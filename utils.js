// Url to SYMPHOLIGHT REST API with port 5001 (for SSL) and HTTPS (SSL)
var apiUrl = "https://127.0.0.1:5001/api/"
var token;

async function authorizeAutomatic() {

  url = apiUrl + "Auth/login";

  loginData = {};
  loginData.username = 'admin';
  loginData.password = '1234';

  // Call the postData function and provide the URL and the loginData object
  response = await postData(url, loginData);
  token = response.token;
  document.getElementById("authStatus").value = "Authorized";
  document.getElementById("authStatus").classList.add("green");
//   postData(url, loginData)
//     .then(response => {
//       token = response.token;
//       document.getElementById("authStatus").value = "Authorized";
//       document.getElementById("authStatus").classList.add("green");
//     })
//     .catch(error => alert("An error occurred: Message = " + error.message));
}

function getData(url = '', data = {}) {
    // Default options are marked with *
    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "omit", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + token, // Authorization token
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer" // no-referrer, *client
    })
    .then(function(response)
    {
        if (response.ok)
        {
            return response;
        }
        else
        {
            throw new Error("An error occurred: Status " + response.status + " - " + response.statusText);
        }
    })
    .then(response => response.text())
    .then(text => text ? JSON.parse(text) : {}); // parses response to JSON
}

function putData(url = '', data = {}) {
    // Default options are marked with *
    return fetch(url, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "omit", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + token, // Authorization token
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(function(response)
    {
        if (response.ok)
        {
            return response;
        }
        else
        {
            throw new Error("An error occurred: Status " + response.status + " - " + response.statusText);
        }
    })
    .then(response => response.text())
    .then(text => text ? JSON.parse(text) : {}); // parses response to JSON
}

function postData(url = '', data = {}) {
    
    // Send the request with the specified parameters, headers and bode to the specified URL
    return fetch(url, {
        // Default options are marked with *
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "omit", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + token, // Authorization token
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(function(response) // When response is received, check the request was successfull
    {
        if (response.ok)
        {
            return response; // Response was OK, we continue working with the valid response
        }
        else
        {
            // Request failed, we display an error
            throw new Error("An error occurred: Status " + response.status + " - " + response.statusText);
        }
    })
    .then(response => response.text()) // Transform the response object into a text
    .then(text => text ? JSON.parse(text) : {}); // parses the text response to JSON
}


