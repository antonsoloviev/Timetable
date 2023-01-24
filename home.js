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

let buttonNorthEcoMode = document.querySelector('div.north-block > .button-mode-eco');
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

// TODO currentSouthMode and currentNorthMode request

async function getValueBlockOutportDataById(blockId) {
  url = apiUrl + "workflow/blocks/values/" + blockId;
  response = await getData(url);
  // store.blockNotes = response;
  console.log(response.outPortValue);
  return response.outPortValue;
}

async function fetchSouthModeUpdate() {

  const block = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_S_currentModeFB-id');
  });
  const blockId = block["Home_S_currentModeFB-id"];

  let currentSouthMode = await getValueBlockOutportDataById(blockId);

  if (currentSouthMode === 'eco') {
    buttonSouthEcoMode.setAttribute("aria-pressed", true);
    buttonsSouthAll.forEach(element => {
      if (!element.classList.contains("button-mode-eco")) {
        element.setAttribute("aria-pressed", false);
      }
    });
  }

  if (currentSouthMode === 'main') {
    buttonSouthMainMode.setAttribute("aria-pressed", true);
    buttonsSouthAll.forEach(element => {
      if (!element.classList.contains("button-mode-main")) {
        element.setAttribute("aria-pressed", false);
      }
    });
  }

  if (currentSouthMode === 'white') {
    buttonSouthWhiteMode.setAttribute("aria-pressed", true);
    buttonsSouthAll.forEach(element => {
      if (!element.classList.contains("button-mode-white")) {
        element.setAttribute("aria-pressed", false);
      }
    });
  }

  if (currentSouthMode === 'white-mix') {
    buttonSouthWhiteMixMode.setAttribute("aria-pressed", true);
    buttonsSouthAll.forEach(element => {
      if (!element.classList.contains("button-mode-white-mix")) {
        element.setAttribute("aria-pressed", false);
      }
    });
  }

  if (currentSouthMode === 'white-pulse') {
    buttonSouthWhitePulseMode.setAttribute("aria-pressed", true);
    buttonsSouthAll.forEach(element => {
      if (!element.classList.contains("button-mode-white-pulse")) {
        element.setAttribute("aria-pressed", false);
      }
    });
  }

  if (currentSouthMode === 'color-dynamic') {
    buttonSouthColorDynamicMode.setAttribute("aria-pressed", true);
    buttonsSouthAll.forEach(element => {
      if (!element.classList.contains("button-mode-color-dynamic")) {
        element.setAttribute("aria-pressed", false);
      }
    });
  }

  if (currentSouthMode === 'violet') {
    buttonSouthVioletMode.setAttribute("aria-pressed", true);
    buttonsSouthAll.forEach(element => {
      if (!element.classList.contains("button-mode-violet")) {
        element.setAttribute("aria-pressed", false);
      }
    });
  }

  // return currentSouthMode;



};

async function fetchNorthModeUpdate() {

  const block = store.homeNotes.find((item) => {
    return item.hasOwnProperty('Home_N_currentModeFB-id');
  });
  const blockId = block["Home_N_currentModeFB-id"];

  let currentNorthMode = await getValueBlockOutportDataById(blockId);

  if (currentNorthMode === 'eco') {
    buttonNorthEcoMode.setAttribute("aria-pressed", true);
    buttonsNorthAll.forEach(element => {
      if (!element.classList.contains("button-mode-eco")) {
        element.setAttribute("aria-pressed", false);
      }
    });
  }

  if (currentNorthMode === 'main') {
    buttonNorthMainMode.setAttribute("aria-pressed", true);
    buttonsNorthAll.forEach(element => {
      if (!element.classList.contains("button-mode-main")) {
        element.setAttribute("aria-pressed", false);
      }
    });
  }

  if (currentNorthMode === 'white') {
    buttonNorthWhiteMode.setAttribute("aria-pressed", true);
    buttonsNorthAll.forEach(element => {
      if (!element.classList.contains("button-mode-white")) {
        element.setAttribute("aria-pressed", false);
      }
    });
  }

  if (currentNorthMode === 'white-mix') {
    buttonNorthWhiteMixMode.setAttribute("aria-pressed", true);
    buttonsNorthAll.forEach(element => {
      if (!element.classList.contains("button-mode-white-mix")) {
        element.setAttribute("aria-pressed", false);
      }
    });
  }

  if (currentNorthMode === 'white-pulse') {
    buttonNorthWhitePulseMode.setAttribute("aria-pressed", true);
    buttonsNorthAll.forEach(element => {
      if (!element.classList.contains("button-mode-white-pulse")) {
        element.setAttribute("aria-pressed", false);
      }
    });
  }

  if (currentNorthMode === 'sunset') {
    buttonNorthColorDynamicMode.setAttribute("aria-pressed", true);
    buttonsNorthAll.forEach(element => {
      if (!element.classList.contains("button-mode-sunset")) {
        element.setAttribute("aria-pressed", false);
      }
    });
  }

  if (currentNorthMode === 'autumn') {
    buttonNorthColorDynamicMode.setAttribute("aria-pressed", true);
    buttonsNorthAll.forEach(element => {
      if (!element.classList.contains("button-mode-autumn")) {
        element.setAttribute("aria-pressed", false);
      }
    });
  }

  if (currentNorthMode === 'violet') {
    buttonNorthVioletMode.setAttribute("aria-pressed", true);
    buttonsNorthAll.forEach(element => {
      if (!element.classList.contains("button-mode-violet")) {
        element.setAttribute("aria-pressed", false);
      }
    });
  }

};


function fetchModeStart() {
  fetchSouthModeId = setInterval(fetchSouthModeUpdate, 10000);
  fetchNorthModeId = setInterval(fetchNorthModeUpdate, 10000);

}