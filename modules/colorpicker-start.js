// Color pickers
var northPicker = ColorPicker(document.getElementById('north-color-picker'), updateNorthInputs);
var southPicker = ColorPicker(document.getElementById('south-color-picker'), updateSouthInputs);

var northPickerContainer = document.querySelector(".north-color-picker-container");
var southPickerContainer = document.querySelector(".north-color-picker-container");

// Inputs
var iHexNorth = document.querySelector('.hex-north');
var iRNorth = document.querySelector('.rgb_r-north');
var iGNorth = document.querySelector('.rgb_g-north');
var iBNorth = document.querySelector('.rgb_b-north');
var rgbCSSNorth = document.querySelector('.rgb_css-north');
var colorNorth = document.querySelector('.io-north');

var iHexSouth = document.querySelector('.hex-south');
var iRSouth = document.querySelector('.rgb_r-south');
var iGSouth = document.querySelector('.rgb_g-south');
var iBSouth = document.querySelector('.rgb_b-south');
var rgbCSSSouth = document.querySelector('.rgb_css-south');
var colorSouth = document.querySelector('.io-south');

function updateNorthInputs(hex) {
  var rgb = ColorPicker.hex2rgb(hex);

  iHexNorth.value = hex;
  iRNorth.value = rgb.r;
  iGNorth.value = rgb.g;
  iBNorth.value = rgb.b;

  rgbCSSNorth.innerHTML = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
  colorNorth.style.backgroundColor = hex;
}

function updateSouthInputs(hex) {
  var rgb = ColorPicker.hex2rgb(hex);

  iHexSouth.value = hex;
  iRSouth.value = rgb.r;
  iGSouth.value = rgb.g;
  iBSouth.value = rgb.b;

  rgbCSSSouth.innerHTML = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
  colorSouth.style.backgroundColor = hex;
}

function updateNorthColorPickers(hex) {
  northPicker.setHex(hex);
}

function updateSouthColorPickers(hex) {
  southPicker.setHex(hex);
}

var initialHex = '#59126f';
updateNorthColorPickers(initialHex);
updateSouthColorPickers(initialHex);

iHexNorth.onchange = function () {
  updateNorthColorPickers(iHexNorth.value);

};

iRNorth.oninput = function () {
  updateNorthColorPickers(ColorPicker.rgb2hex({ r: iRNorth.value, g: iGNorth.value, b: iBNorth.value }));

  // const valueBlockData = {};
  // valueBlockData.inPortValue = iRNorth.value;
  // const block = store.colorNotes.find((item) => {
  //   return item.hasOwnProperty('North_customColor_R-id');
  // });
  // const blockId = block["North_customColor_R-id"];
  // console.log(blockId);

  // url = apiUrl + "workflow/blocks/values/" + blockId;
  // putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

iGNorth.oninput = function () {
  updateNorthColorPickers(ColorPicker.rgb2hex({ r: iRNorth.value, g: iGNorth.value, b: iBNorth.value }));

  // const valueBlockData = {};
  // valueBlockData.inPortValue = iGNorth.value;
  // const block = store.colorNotes.find((item) => {
  //   return item.hasOwnProperty('North_customColor_G-id');
  // });
  // const blockId = block["North_customColor_G-id"];
  // console.log(blockId);

  // url = apiUrl + "workflow/blocks/values/" + blockId;
  // putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

iBNorth.oninput = function () {
  updateNorthColorPickers(ColorPicker.rgb2hex({ r: iRNorth.value, g: iGNorth.value, b: iBNorth.value }));

  // const valueBlockData = {};
  // valueBlockData.inPortValue = iBNorth.value;
  // const block = store.colorNotes.find((item) => {
  //   return item.hasOwnProperty('North_customColor_B-id');
  // });
  // const blockId = block["North_customColor_B-id"];
  // console.log(blockId);

  // url = apiUrl + "workflow/blocks/values/" + blockId;
  // putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

iHexSouth.onchange = function () { updateSouthColorPickers(iHexSouth.value); };
iRSouth.onchange = function () { updateSouthColorPickers(ColorPicker.rgb2hex({ r: iRSouth.value, g: iGSouth.value, b: iBSouth.value })); }
iGSouth.onchange = function () { updateSouthColorPickers(ColorPicker.rgb2hex({ r: iRSouth.value, g: iGSouth.value, b: iBSouth.value })); }
iBSouth.onchange = function () { updateSouthColorPickers(ColorPicker.rgb2hex({ r: iRSouth.value, g: iGSouth.value, b: iBSouth.value })); }

// Buttons
var buttonNorthPicker = document.querySelector('.button-north-picker');
var buttonSouthPicker = document.querySelector('.button-south-picker');

var buttonSendNorthPicker = document.querySelector('.button-send-north-picker');
var buttonSendSouthPicker = document.querySelector('.button-send-south-picker');

function handleToggleClick(event) {
  toggleButton(event.target);
  if (event.target.classList.contains("button-south-picker")) {
    if (event.target.getAttribute("aria-pressed") === "true") {
      sendSouthColorMode(true);
    } else {
      sendSouthColorMode(false);
    }
  } else if (event.target.classList.contains("button-north-picker")) {
    if (event.target.getAttribute("aria-pressed") === "true") {
      sendNorthColorMode(true);
    } else {
      sendNorthColorMode(false);
    }
  }
}

function toggleButton(element) {
  if (element.getAttribute("aria-pressed") === "true") {
    element.setAttribute("aria-pressed", false);
    element.nextElementSibling.classList.remove('active');
  } else if (confirm("Вы уверены, что хотите изменить цвет фасада в ручном режиме?")) {
    // Check to see if the button is pressed
    var pressed = (element.getAttribute("aria-pressed") === "true");
    // Change aria-pressed to the opposite state
    element.setAttribute("aria-pressed", !pressed);
    element.nextElementSibling.classList.add('active');
  } else return null;
}

buttonNorthPicker.addEventListener('click', (event) => {
  handleToggleClick(event);
})

buttonSouthPicker.addEventListener('click', (event) => {
  handleToggleClick(event);
})

function sendNorthColorMode(bool) {
  const valueBlockData = {};
  valueBlockData.inPortValue = bool;
  const block = store.colorNotes.find((item) => {
    return item.hasOwnProperty('North_customColor_Mode-id');
  });
  const blockId = block["North_customColor_Mode-id"];
  console.log(blockId);

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

function sendNorthR() {
  const valueBlockData = {};
  valueBlockData.inPortValue = iRNorth.value;
  const block = store.colorNotes.find((item) => {
    return item.hasOwnProperty('North_customColor_R-id');
  });
  const blockId = block["North_customColor_R-id"];
  console.log(blockId);

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

function sendNorthG() {
  const valueBlockData = {};
  valueBlockData.inPortValue = iGNorth.value;
  const block = store.colorNotes.find((item) => {
    return item.hasOwnProperty('North_customColor_G-id');
  });
  const blockId = block["North_customColor_G-id"];
  console.log(blockId);

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

function sendNorthB() {
  const valueBlockData = {};
  valueBlockData.inPortValue = iBNorth.value;
  const block = store.colorNotes.find((item) => {
    return item.hasOwnProperty('North_customColor_B-id');
  });
  const blockId = block["North_customColor_B-id"];
  console.log(blockId);

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

function sendSouthColorMode(bool) {
  const valueBlockData = {};
  valueBlockData.inPortValue = bool;
  const block = store.colorNotes.find((item) => {
    return item.hasOwnProperty('South_customColor_Mode-id');
  });
  const blockId = block["South_customColor_Mode-id"];
  console.log(blockId);

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

function sendSouthR() {
  const valueBlockData = {};
  valueBlockData.inPortValue = iRSouth.value;
  const block = store.colorNotes.find((item) => {
    return item.hasOwnProperty('South_customColor_R-id');
  });
  const blockId = block["South_customColor_R-id"];
  console.log(blockId);

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

function sendSouthG() {
  const valueBlockData = {};
  valueBlockData.inPortValue = iGSouth.value;
  const block = store.colorNotes.find((item) => {
    return item.hasOwnProperty('South_customColor_G-id');
  });
  const blockId = block["South_customColor_G-id"];
  console.log(blockId);

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

function sendSouthB() {
  const valueBlockData = {};
  valueBlockData.inPortValue = iBSouth.value;
  const block = store.colorNotes.find((item) => {
    return item.hasOwnProperty('South_customColor_B-id');
  });
  const blockId = block["South_customColor_B-id"];
  console.log(blockId);

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

buttonSendNorthPicker.addEventListener('click', () => {
  sendNorthR();
  sendNorthG();
  sendNorthB();
})

buttonSendSouthPicker.addEventListener('click', () => {
  sendSouthR();
  sendSouthG();
  sendSouthB();
})
