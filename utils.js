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
    .then(function (response) {
      if (response.ok) {
        return response;
      }
      else {
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
    .then(function (response) {
      if (response.ok) {
        return response;
      }
      else {
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
    .then(function (response) // When response is received, check the request was successfull
    {
      if (response.ok) {
        return response; // Response was OK, we continue working with the valid response
      }
      else {
        // Request failed, we display an error
        throw new Error("An error occurred: Status " + response.status + " - " + response.statusText);
      }
    })
    .then(response => response.text()) // Transform the response object into a text
    .then(text => text ? JSON.parse(text) : {}); // parses the text response to JSON
}

function clockUpdate() {
  let clock = document.querySelector('.clock');
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;
}

function dateUpdate() {
  let dateElement = document.querySelector('.date');
  let date = new Date();

  let day = date.getDate();
  if (day < 10) day = '0' + day;
  let month = date.getMonth();
  month++;
  if (month < 10) month = '0' + month;
  let year = date.getFullYear();

  dateElement.children[0].innerHTML = day;
  dateElement.children[1].innerHTML = month;
  dateElement.children[2].innerHTML = year;
}

function sunsetUpdate() {
  let sunriseNorthElement = document.querySelector('.north-table-footnote .table-footnote-sunrise');
  let sunsetNorthElement = document.querySelector('.north-table-footnote .table-footnote-sunset');
  let sunriseSouthElement = document.querySelector('.south-table-footnote .table-footnote-sunrise');
  let sunsetSouthElement = document.querySelector('.south-table-footnote .table-footnote-sunset');
  let sunriseLogoElement = document.querySelector('.logo-table-footnote .table-footnote-sunrise');
  let sunsetLogoElement = document.querySelector('.logo-table-footnote .table-footnote-sunset');
  
  var times = SunCalc.getTimes(new Date(), 55.658, 37.846);
  var sunriseStr = addZero(times.sunrise.getHours()) + ':' + addZero(times.sunrise.getMinutes());
  var sunsetStr = addZero(times.sunset.getHours()) + ':' + addZero(times.sunset.getMinutes());

  sunriseNorthElement.innerHTML = `(следующий в ${sunriseStr})`;
  sunsetNorthElement.innerHTML = `(следующий в ${sunsetStr})`;
  sunriseSouthElement.innerHTML = `(следующий в ${sunriseStr})`;
  sunsetSouthElement.innerHTML = `(следующий в ${sunsetStr})`;
  sunriseLogoElement.innerHTML = `(следующий в ${sunriseStr})`;
  sunsetLogoElement.innerHTML = `(следующий в ${sunsetStr})`;
}

function clockStart() {
  let clockId = setInterval(clockUpdate, 5000);
  let dateId = setInterval(dateUpdate, 60000);
  let sunsetId = setInterval(dateUpdate, 3600000);
  let authorizeId = setInterval(authorizeAutomatic, 1800000);

  clockUpdate();
  dateUpdate();
  sunsetUpdate();
  authorizeAutomatic();
}

// timeString in 'xx:xx' format
function convertTimeStringToMins(timeString) {
  let hours = parseInt(timeString);
  let mins = Number(timeString.substring(timeString.length - 2));
  let totalMins = 0;
  if (hours < 0) {
    totalMins = hours * 60 - mins;
  } else {
    totalMins = hours * 60 + mins;
  }

  console.log(totalMins);
  return totalMins;
}

function convertMinsToTimeString(minsValue) {
  let timeString = '';

  let hours = parseInt(minsValue / 60);
  let mins = (minsValue % 60)

  if ((hours >= 0) & (mins >= 0)) {
    hours = '0' + hours;

  } else {
    hours = Math.abs(hours);
    timeString = '-'
  }

  if (mins < 0) {
    mins = Math.abs(mins);
  }

  if ((mins < 10) & (mins >= 0)) {
    mins = '0' + mins;
  }

  timeString = timeString + hours + ':' + mins;

  return timeString;
}