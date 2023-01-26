// ID for start and stop southMode fetching
let fetchSouthModeId = 0;
let fetchNorthModeId = 0;

let homeSouthBlock = document.querySelector('.home-south-block');
let homeNorthBlock = document.querySelector('.home-north-block');

// Buttons
let buttonManualMode = document.querySelector('.button-manual-mode');
let rangeSouth = document.getElementById("range-south");
let rangeNorth = document.getElementById("range-north");

function getSouthRangeValue(value) {
  document.getElementById("south-rangeValue").innerHTML = value;
}

function getNorthRangeValue(value) {
  document.getElementById("north-rangeValue").innerHTML = value;
}

let buttonSouthEcoMode = document.querySelector('div.home-south-block > .button-mode-eco');
let buttonSouthMainMode = document.querySelector('div.south-block-buttons > .button-mode-main');
let buttonSouthWhiteMode = document.querySelector('div.south-block-buttons > .button-mode-white');
let buttonSouthWhiteMixMode = document.querySelector('div.south-block-buttons > .button-mode-white-mix');
let buttonSouthLightboxMode = document.querySelector('div.south-block-buttons > .button-mode-lightbox');
let buttonSouthWhitePulseMode = document.querySelector('div.south-block-buttons > .button-mode-white-pulse');
let buttonSouthColorDynamicMode = document.querySelector('div.south-block-buttons > .button-mode-color-dynamic');
let buttonSouthVioletMode = document.querySelector('div.south-block-buttons > .button-mode-violet');
let buttonSouthLogotypesMode = document.querySelector('div.south-block-buttons > .button-mode-logotypes');
let buttonsSouth = document.querySelector('.south-block-buttons');

let buttonNorthEcoMode = document.querySelector('div.home-north-block > .button-mode-eco');
let buttonNorthMainMode = document.querySelector('div.north-block-buttons > .button-mode-main');
let buttonNorthWhiteMode = document.querySelector('div.north-block-buttons > .button-mode-white');
let buttonNorthWhiteMixMode = document.querySelector('div.north-block-buttons > .button-mode-white-mix');
let buttonNorthLightboxMode = document.querySelector('div.north-block-buttons > .button-mode-lightbox');
let buttonNorthWhitePulseMode = document.querySelector('div.north-block-buttons > .button-mode-white-pulse');
let buttonNorthSunsetMode = document.querySelector('div.north-block-buttons > .button-mode-sunset');
let buttonNorthAutumnMode = document.querySelector('div.north-block-buttons > .button-mode-autumn');
let buttonNorthLogotypesMode = document.querySelector('div.north-block-buttons > .button-mode-logotypes');
let buttonNorthVioletMode = document.querySelector('div.north-block-buttons > .button-mode-violet');
let buttonsNorth = document.querySelector('.north-block-buttons');

function sendManualMode(bool) {
  const valueBlockData = {};
  valueBlockData.inPortValue = bool;
  const block = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_manualMode-id');
  });
  const blockId = block["Home_manualMode-id"];

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

function sendSouthRange(value) {
  const valueBlockData = {};
  valueBlockData.inPortValue = value;
  const block = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_S_rangeValue-id');
  });
  const blockId = block["Home_S_rangeValue-id"];

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

function sendNorthRange(value) {
  const valueBlockData = {};
  valueBlockData.inPortValue = value;
  const block = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_N_rangeValue-id');
  });
  const blockId = block["Home_N_rangeValue-id"];

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

function sendSouthLightboxMode(bool) {
  const valueBlockData = {};
  valueBlockData.inPortValue = bool;
  const block = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_S_lightboxMode-id');
  });
  const blockId = block["Home_S_lightboxMode-id"];

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

function sendSouthLogotypesMode(bool) {
  const valueBlockData = {};
  valueBlockData.inPortValue = bool;
  const block = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_S_logotypesMode-id');
  });
  const blockId = block["Home_S_logotypesMode-id"];

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

function sendNorthLightboxMode(bool) {
  const valueBlockData = {};
  valueBlockData.inPortValue = bool;
  const block = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_N_lightboxMode-id');
  });
  const blockId = block["Home_N_lightboxMode-id"];

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

function sendNorthLogotypesMode(bool) {
  const valueBlockData = {};
  valueBlockData.inPortValue = bool;
  const block = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_N_logotypesMode-id');
  });
  const blockId = block["Home_N_logotypesMode-id"];

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}


function sendCurrentSouthMode(value) {
  const valueBlockData = {};
  valueBlockData.inPortValue = value;
  const block = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_S_currentMode-id');
  });
  const blockId = block["Home_S_currentMode-id"];

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

function sendCurrentNorthMode(value) {
  const valueBlockData = {};
  valueBlockData.inPortValue = value;
  const block = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_N_currentMode-id');
  });
  const blockId = block["Home_N_currentMode-id"];

  url = apiUrl + "workflow/blocks/values/" + blockId;
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

function toggleHomeButton(element) {
  if (element.getAttribute("aria-pressed") === "true") {
    element.setAttribute("aria-pressed", false);
  } else {
    var pressed = (element.getAttribute("aria-pressed") === "true");
    element.setAttribute("aria-pressed", !pressed);
  }
}

function handleToggleManualButton(event) {
  toggleHomeButton(event.target);

  if (event.target.getAttribute("aria-pressed") === "true") {
    sendManualMode(true);

    buttonsNorthAll.forEach(element => {
      element.disabled = false;
    });
    buttonsSouthAll.forEach(element => {
      element.disabled = false;
    });

    buttonNorthLightboxMode.disabled = false;
    buttonNorthLogotypesMode.disabled = false;
    buttonSouthLightboxMode.disabled = false;
    buttonSouthLogotypesMode.disabled = false;

    clearInterval(fetchSouthModeId);
    clearInterval(fetchNorthModeId);


  } else {
    sendManualMode(false);

    buttonsNorthAll.forEach(element => {
      element.setAttribute("aria-pressed", false);
      element.disabled = true;
    });
    buttonsSouthAll.forEach(element => {
      element.setAttribute("aria-pressed", false);
      element.disabled = true;
    });

    buttonNorthLightboxMode.disabled = true;
    buttonNorthLightboxMode.setAttribute("aria-pressed", false);
    buttonNorthLogotypesMode.disabled = true;
    buttonNorthLogotypesMode.setAttribute("aria-pressed", false);
    buttonSouthLightboxMode.disabled = true;
    buttonSouthLightboxMode.setAttribute("aria-pressed", false);
    buttonSouthLogotypesMode.disabled = true;
    buttonSouthLogotypesMode.setAttribute("aria-pressed", false);

    rangeNorth.value = 100;
    getNorthRangeValue(100);
    sendNorthRange(100);

    rangeSouth.value = 100;
    getSouthRangeValue(100);
    sendSouthRange(100);

    fetchModeStart();

  }
}

buttonManualMode.addEventListener('click', (event) => {
  handleToggleManualButton(event);
  if (buttonManualMode.getAttribute("aria-pressed") === "true") {
    rangeSouth.disabled = false;
    rangeNorth.disabled = false;
  } else {
    rangeSouth.disabled = true;
    rangeNorth.disabled = true;
  }
})

rangeSouth.addEventListener("change", function () {
  console.log(this.value);
  sendSouthRange(this.value);
});

rangeNorth.addEventListener("change", function () {
  sendNorthRange(this.value);
});

let buttonsSouthAll = document.querySelectorAll('div.home-south-block .button-mode');
let buttonsNorthAll = document.querySelectorAll('div.home-north-block .button-mode');

homeSouthBlock.addEventListener('click', (event) => {
  const currButton = event.target;
  toggleHomeButton(currButton);

  if (currButton.classList.contains('button-mode-eco')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendCurrentSouthMode('eco');
      buttonsSouthAll.forEach(element => {
        if (!element.classList.contains("button-mode-eco")) {
          element.setAttribute("aria-pressed", false);
        }
      });
    }
    else {
      sendCurrentSouthMode(0);
    }
  };

  if (currButton.classList.contains('button-mode-main')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendCurrentSouthMode('main');
      buttonsSouthAll.forEach(element => {
        if (!element.classList.contains("button-mode-main")) {
          element.setAttribute("aria-pressed", false);
        }
      });
    }
    else {
      sendCurrentSouthMode(0);
    }
  };

  if (currButton.classList.contains('button-mode-white')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendCurrentSouthMode('white');
      buttonsSouthAll.forEach(element => {
        if (!element.classList.contains("button-mode-white")) {
          element.setAttribute("aria-pressed", false);
        }
      });
    }
    else {
      sendCurrentSouthMode(0);
    }
  };

  if (currButton.classList.contains('button-mode-white-mix')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendCurrentSouthMode('white-mix');
      buttonsSouthAll.forEach(element => {
        if (!element.classList.contains("button-mode-white-mix")) {
          element.setAttribute("aria-pressed", false);
        }
      });
    }
    else {
      sendCurrentSouthMode(0);
    }
  };

  if (currButton.classList.contains('button-mode-lightbox')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendSouthLightboxMode(true);
    } else {
      sendSouthLightboxMode(false);
    }
  };

  if (currButton.classList.contains('button-mode-white-pulse')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendCurrentSouthMode('white-pulse');
      buttonsSouthAll.forEach(element => {
        if (!element.classList.contains("button-mode-white-pulse")) {
          element.setAttribute("aria-pressed", false);
        }
      });
    }
    else {
      sendCurrentSouthMode(0);
    }
  };

  if (currButton.classList.contains('button-mode-color-dynamic')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendCurrentSouthMode('color-dynamic');
      buttonsSouthAll.forEach(element => {
        if (!element.classList.contains("button-mode-color-dynamic")) {
          element.setAttribute("aria-pressed", false);
        }
      });
    }
    else {
      sendCurrentSouthMode(0);
    }
  };

  if (currButton.classList.contains('button-mode-violet')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendCurrentSouthMode('violet');
      buttonsSouthAll.forEach(element => {
        if (!element.classList.contains("button-mode-violet")) {
          element.setAttribute("aria-pressed", false);
        }
      });
    }
    else {
      sendCurrentSouthMode(0);
    }
  };

  if (currButton.classList.contains('button-mode-logotypes')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendSouthLogotypesMode(true);
    } else {
      sendSouthLogotypesMode(false);
    }
  };
});

homeNorthBlock.addEventListener('click', (event) => {
  const currButton = event.target;
  toggleHomeButton(currButton);

  if (currButton.classList.contains('button-mode-eco')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendCurrentNorthMode('eco');
      buttonsNorthAll.forEach(element => {
        if (!element.classList.contains("button-mode-eco")) {
          element.setAttribute("aria-pressed", false);
        }
      });
    }
    else {
      sendCurrentNorthMode(0);
    }
  };

  if (currButton.classList.contains('button-mode-main')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendCurrentNorthMode('main');
      buttonsNorthAll.forEach(element => {
        if (!element.classList.contains("button-mode-main")) {
          element.setAttribute("aria-pressed", false);
        }
      });
    }
    else {
      sendCurrentNorthMode(0);
    }
  };

  if (currButton.classList.contains('button-mode-white')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendCurrentNorthMode('white');
      buttonsNorthAll.forEach(element => {
        if (!element.classList.contains("button-mode-white")) {
          element.setAttribute("aria-pressed", false);
        }
      });
    }
    else {
      sendCurrentNorthMode(0);
    }
  };

  if (currButton.classList.contains('button-mode-white-mix')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendCurrentNorthMode('white-mix');
      buttonsNorthAll.forEach(element => {
        if (!element.classList.contains("button-mode-white-mix")) {
          element.setAttribute("aria-pressed", false);
        }
      });
    }
    else {
      sendCurrentNorthMode(0);
    }
  };

  if (currButton.classList.contains('button-mode-lightbox')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendNorthLightboxMode(true);
    } else {
      sendNorthLightboxMode(false);
    }
  };

  if (currButton.classList.contains('button-mode-white-pulse')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendCurrentNorthMode('white-pulse');
      buttonsNorthAll.forEach(element => {
        if (!element.classList.contains("button-mode-white-pulse")) {
          element.setAttribute("aria-pressed", false);
        }
      });
    }
    else {
      sendCurrentNorthMode(0);
    }
  };

  if (currButton.classList.contains('button-mode-sunset')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendCurrentNorthMode('sunset');
      buttonsNorthAll.forEach(element => {
        if (!element.classList.contains("button-mode-sunset")) {
          element.setAttribute("aria-pressed", false);
        }
      });
    }
    else {
      sendCurrentNorthMode(0);
    }
  };

  if (currButton.classList.contains('button-mode-autumn')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendCurrentNorthMode('autumn');
      buttonsNorthAll.forEach(element => {
        if (!element.classList.contains("button-mode-autumn")) {
          element.setAttribute("aria-pressed", false);
        }
      });
    }
    else {
      sendCurrentNorthMode(0);
    }
  };

  if (currButton.classList.contains('button-mode-violet')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendCurrentNorthMode('violet');
      buttonsNorthAll.forEach(element => {
        if (!element.classList.contains("button-mode-violet")) {
          element.setAttribute("aria-pressed", false);
        }
      });
    }
    else {
      sendCurrentNorthMode(0);
    }
  };

  if (currButton.classList.contains('button-mode-logotypes')) {
    if (currButton.getAttribute("aria-pressed") === "true") {
      sendNorthLogotypesMode(true);
    } else {
      sendNorthLogotypesMode(false);
    }
  };
})

async function getValueBlockOutportDataById(blockId) {
  url = apiUrl + "workflow/blocks/values/" + blockId;
  response = await getData(url);
  console.log(response.displayName);
  console.log(response.outPortValue);
  return response.outPortValue;
}

async function fetchSouthModeUpdate_NEW() {

  const block_S_Main = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_S_main_Fb-id');
  });
  const block_S_MainId = block_S_Main["Home_S_main_Fb-id"];

  const block_S_White = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_S_W_St_Fb-id');
  });
  const block_S_WhiteId = block_S_White["Home_S_W_St_Fb-id"];

  const block_S_WhitePulse = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_S_W_Puls_Fb-id');
  });
  const block_S_WhitePulseId = block_S_WhitePulse["Home_S_W_Puls_Fb-id"];

  const block_S_WhiteMix = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_S_W_St+Puls_Fb-id');
  });
  const block_S_WhiteMixId = block_S_WhiteMix["Home_S_W_St+Puls_Fb-id"];

  const block_S_ColorDynamic = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_S_Color_dynamic_Fb-id');
  });
  const block_S_ColorDynamicId = block_S_ColorDynamic["Home_S_Color_dynamic_Fb-id"];

  const block_S_Eco = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_S_ECO_Fb-id');
  });
  const block_S_EcoId = block_S_Eco["Home_S_ECO_Fb-id"];

  const block_S_Violet = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_S_Violet_Fb-id');
  });
  const block_S_VioletId = block_S_Violet["Home_S_Violet_Fb-id"];

  const block_S_Lightbox = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_S_lightbox_Fb-id');
  });
  const block_S_LightboxId = block_S_Lightbox["Home_S_lightbox_Fb-id"];

  const block_S_Logotypes = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_S_logotypes_Fb-id');
  });
  const block_S_LogotypesId = block_S_Logotypes["Home_S_logotypes_Fb-id"];

  let block_S_MainState = await getValueBlockOutportDataById(block_S_MainId);
  let block_S_WhiteState = await getValueBlockOutportDataById(block_S_WhiteId);
  let block_S_WhitePulseState = await getValueBlockOutportDataById(block_S_WhitePulseId);
  let block_S_WhiteMixState = await getValueBlockOutportDataById(block_S_WhiteMixId);
  let block_S_ColorDynamicState = await getValueBlockOutportDataById(block_S_ColorDynamicId);
  let block_S_EcoState = await getValueBlockOutportDataById(block_S_EcoId);
  let block_S_VioletState = await getValueBlockOutportDataById(block_S_VioletId);
  let block_S_LightboxState = await getValueBlockOutportDataById(block_S_LightboxId);
  let block_S_LogotypesState = await getValueBlockOutportDataById(block_S_LogotypesId);

  while (true) {

    if (block_S_MainState != '121') {
      if (block_S_WhiteState != '123') {
        if (block_S_WhitePulseState != '125') {
          if (block_S_WhiteMixState != '127') {
            if (block_S_ColorDynamicState != '129') {
           
                if (block_S_EcoState != '131') {
                  if (block_S_VioletState != '133') {
                  } else if (block_S_VioletState == '133') {
                    buttonSouthVioletMode.setAttribute("aria-pressed", true);
                    buttonsSouthAll.forEach(element => {
                      if (!element.classList.contains("button-mode-violet")) {
                        element.setAttribute("aria-pressed", false);
                      }
                    });
                    break;
                  }
                } else if (block_S_EcoState == '131') {
                  buttonSouthEcoMode.setAttribute("aria-pressed", true);
                  buttonsSouthAll.forEach(element => {
                    if (!element.classList.contains("button-mode-eco")) {
                      element.setAttribute("aria-pressed", false);
                    }
                  });
                  break;
                }

            } else if (block_S_ColorDynamicState == '129') {
              buttonSouthColorDynamicMode.setAttribute("aria-pressed", true);
              buttonsSouthAll.forEach(element => {
                if (!element.classList.contains("button-mode-color-dynamic")) {
                  element.setAttribute("aria-pressed", false);
                }
              });
              break;
            }
          } else if (block_S_WhiteMixState == '127') {
            buttonSouthWhiteMixMode.setAttribute("aria-pressed", true);
            buttonsSouthAll.forEach(element => {
              if (!element.classList.contains("button-mode-white-mix")) {
                element.setAttribute("aria-pressed", false);
              }
            });
            break;
          }
        } else if (block_S_WhitePulseState == '125') {
          buttonSouthWhitePulseMode.setAttribute("aria-pressed", true);
          buttonsSouthAll.forEach(element => {
            if (!element.classList.contains("button-mode-white-pulse")) {
              element.setAttribute("aria-pressed", false);
            }
          });
          break;
        }
      } else if (block_S_WhiteState == '123') {
        buttonSouthWhiteMode.setAttribute("aria-pressed", true);
        buttonsSouthAll.forEach(element => {
          if (!element.classList.contains("button-mode-white")) {
            element.setAttribute("aria-pressed", false);
          }
        });
        break;
      }
    } else if (block_S_MainState == '121') {
      buttonSouthMainMode.setAttribute("aria-pressed", true);
      buttonsSouthAll.forEach(element => {
        if (!element.classList.contains("button-mode-main")) {
          element.setAttribute("aria-pressed", false);
        }
      });
      break;
    }

    buttonsSouthAll.forEach(element => {
        element.setAttribute("aria-pressed", false);
    });

    break;
  }


  if (block_S_LightboxState == '144') {
    buttonSouthLightboxMode.setAttribute("aria-pressed", true);
  } else {
    buttonSouthLightboxMode.setAttribute("aria-pressed", false);
  }

  if (block_S_LogotypesState == '145') {
    buttonSouthLogotypesMode.setAttribute("aria-pressed", true);
  } else {
    buttonSouthLogotypesMode.setAttribute("aria-pressed", false);
  }

};

async function fetchNorthModeUpdate_NEW() {

  const block_N_Main = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_N_Main_Fb-id');
  });
  const block_N_MainId = block_N_Main["Home_N_Main_Fb-id"];

  const block_N_White = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_N_W_St_Fb-id');
  });
  const block_N_WhiteId = block_N_White["Home_N_W_St_Fb-id"];

  const block_N_WhitePulse = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_N_W_Puls_Fb-id');
  });
  const block_N_WhitePulseId = block_N_WhitePulse["Home_N_W_Puls_Fb-id"];

  const block_N_WhiteMix = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_N_W_St+Puls_Fb-id');
  });
  const block_N_WhiteMixId = block_N_WhiteMix["Home_N_W_St+Puls_Fb-id"];

  const block_N_Sunset = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_N_sunset_Fb-id');
  });
  const block_N_SunsetId = block_N_Sunset["Home_N_sunset_Fb-id"];

  const block_N_Autumn = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_N_autumn_Fb-id');
  });
  const block_N_AutumnId = block_N_Autumn["Home_N_autumn_Fb-id"];

  const block_N_Eco = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_N_ECO_Fb-id');
  });
  const block_N_EcoId = block_N_Eco["Home_N_ECO_Fb-id"];

  const block_N_Violet = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_N_Violet_Fb-id');
  });
  const block_N_VioletId = block_N_Violet["Home_N_Violet_Fb-id"];

  const block_N_Lightbox = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_N_lightbox_Fb-id');
  });
  const block_N_LightboxId = block_N_Lightbox["Home_N_lightbox_Fb-id"];

  const block_N_Logotypes = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_N_logotypes_Fb-id');
  });
  const block_N_LogotypesId = block_N_Logotypes["Home_N_logotypes_Fb-id"];

  let block_N_MainState = await getValueBlockOutportDataById(block_N_MainId);
  let block_N_WhiteState = await getValueBlockOutportDataById(block_N_WhiteId);
  let block_N_WhitePulseState = await getValueBlockOutportDataById(block_N_WhitePulseId);
  let block_N_WhiteMixState = await getValueBlockOutportDataById(block_N_WhiteMixId);
  let block_N_SunsetState = await getValueBlockOutportDataById(block_N_SunsetId);
  let block_N_AutumnState = await getValueBlockOutportDataById(block_N_AutumnId);
  let block_N_EcoState = await getValueBlockOutportDataById(block_N_EcoId);
  let block_N_VioletState = await getValueBlockOutportDataById(block_N_VioletId);
  let block_N_LightboxState = await getValueBlockOutportDataById(block_N_LightboxId);
  let block_N_LogotypesState = await getValueBlockOutportDataById(block_N_LogotypesId);

  while (true) {

    if (block_N_MainState != '101') {
      if (block_N_WhiteState != '103') {
        if (block_N_WhitePulseState != '105') {
          if (block_N_WhiteMixState != '107') {
            if (block_N_SunsetState != '109') {
              if (block_N_AutumnState != '111') {
                if (block_N_EcoState != '113') {
                  if (block_N_VioletState != '115') {
                  } else if (block_N_VioletState == '115') {
                    buttonNorthVioletMode.setAttribute("aria-pressed", true);
                    buttonsNorthAll.forEach(element => {
                      if (!element.classList.contains("button-mode-violet")) {
                        element.setAttribute("aria-pressed", false);
                      }
                    });
                    break;
                  }
                } else if (block_N_EcoState == '113') {
                  buttonNorthEcoMode.setAttribute("aria-pressed", true);
                  buttonsNorthAll.forEach(element => {
                    if (!element.classList.contains("button-mode-eco")) {
                      element.setAttribute("aria-pressed", false);
                    }
                  });
                  break;
                }
              } else if (block_N_AutumnState == '111') {
                buttonNorthAutumnMode.setAttribute("aria-pressed", true);
                buttonsNorthAll.forEach(element => {
                  if (!element.classList.contains("button-mode-autumn")) {
                    element.setAttribute("aria-pressed", false);
                  }
                });
                break; // == goto(#2)
              }
            } else if (block_N_SunsetState == '109') {
              buttonNorthSunsetMode.setAttribute("aria-pressed", true);
              buttonsNorthAll.forEach(element => {
                if (!element.classList.contains("button-mode-sunset")) {
                  element.setAttribute("aria-pressed", false);
                }
              });
              break; // == goto(#2)
            }
          } else if (block_N_WhiteMixState == '107') {
            buttonNorthWhiteMixMode.setAttribute("aria-pressed", true);
            buttonsNorthAll.forEach(element => {
              if (!element.classList.contains("button-mode-white-mix")) {
                element.setAttribute("aria-pressed", false);
              }
            });
            break; // == goto(#2)
          }
        } else if (block_N_WhitePulseState == '105') {
          buttonNorthWhitePulseMode.setAttribute("aria-pressed", true);
          buttonsNorthAll.forEach(element => {
            if (!element.classList.contains("button-mode-white-pulse")) {
              element.setAttribute("aria-pressed", false);
            }
          });
          break; // == goto(#2)
        }
      } else if (block_N_WhiteState == '103') {
        buttonNorthWhiteMode.setAttribute("aria-pressed", true);
        buttonsNorthAll.forEach(element => {
          if (!element.classList.contains("button-mode-white")) {
            element.setAttribute("aria-pressed", false);
          }
        });
        break; // == goto(#2)
      }
    } else if (block_N_MainState == '101') {
      buttonNorthMainMode.setAttribute("aria-pressed", true);
      buttonsNorthAll.forEach(element => {
        if (!element.classList.contains("button-mode-main")) {
          element.setAttribute("aria-pressed", false);
        }
      });
      break; // == goto(#2)
    }

    buttonsNorthAll.forEach(element => {
        element.setAttribute("aria-pressed", false);
    });

    break;
  }
  
  if (block_N_LightboxState == '140') {
    buttonNorthLightboxMode.setAttribute("aria-pressed", true);
  } else {
    buttonNorthLightboxMode.setAttribute("aria-pressed", false);
  }

  if (block_N_LogotypesState == '141') {
    buttonNorthLogotypesMode.setAttribute("aria-pressed", true);
  } else {
    buttonNorthLogotypesMode.setAttribute("aria-pressed", false);
  }

};

function fetchModeStart() {
  fetchSouthModeId = setInterval(fetchSouthModeUpdate_NEW, 5000);
  fetchNorthModeId = setInterval(fetchNorthModeUpdate_NEW, 5000);
  
}