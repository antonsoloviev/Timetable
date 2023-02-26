let buttonSaveNorthToFile = document.querySelector('.button-save-north-to-file');
let buttonSaveSouthToFile = document.querySelector('.button-save-south-to-file');
let buttonSaveLogothToFile = document.querySelector('.button-save-logo-to-file');

let buttonRestoreNorth = document.querySelector(".button-restore-north-from-file");
let buttonRestoreSouth = document.querySelector(".button-restore-south-from-file");
let buttonRestoreLogo = document.querySelector(".button-restore-logo-from-file");

async function saveNorthToFile() {
  await authorizeAutomatic();
  await getValueBlocks();
  saveBlocksToStore();

  let data = JSON.stringify(window.store.northWeekNotes);

  let link = document.createElement("a")
  let file = new Blob([data], { type: 'plain/text' });

  link.href = URL.createObjectURL(file);
  link.download = 'north-table.txt';
  link.click();
}

async function saveSouthToFile() {
  await authorizeAutomatic();
  await getValueBlocks();
  saveBlocksToStore();

  let data = JSON.stringify(window.store.southWeekNotes);

  let link = document.createElement("a")
  let file = new Blob([data], { type: 'plain/text' });

  link.href = URL.createObjectURL(file);
  link.download = 'south-table.txt';
  link.click();
}

async function saveLogoToFile() {
  await authorizeAutomatic();
  await getValueBlocks();
  saveBlocksToStore();

  let data = JSON.stringify(window.store.logoWeekNotes);

  let link = document.createElement("a")
  let file = new Blob([data], { type: 'plain/text' });

  link.href = URL.createObjectURL(file);
  link.download = 'logo-table.txt';
  link.click();
}

function sendNorthDayBlocksToSympholite(dayNumber) {

  dayNotes = store.northWeekNotes[dayNumber];

  Object.keys(dayNotes).forEach((key, index, keysArray) => {

    // console.log(key, ':', dayNotes[key]);

    if ((key.endsWith('Scene-id')) || (key.endsWith('Offset-id')) || (key.endsWith('Mode-id'))) {
      const valueBlockData = {};
      valueBlockData.inPortValue = dayNotes[keysArray[index - 1]];
      blockId = dayNotes[key];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    }

    if (key.endsWith('Time-id')) {
      const valueBlockData = {};

      const timeString = dayNotes[keysArray[index - 1]];
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      // valueBlockData.inPortValue = array[index-1].value;
      blockId = dayNotes[key];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    }

  });

}

function sendSouthDayBlocksToSympholite(dayNumber) {

  dayNotes = store.southWeekNotes[dayNumber];

  Object.keys(dayNotes).forEach((key, index, keysArray) => {

    // console.log(key, ':', dayNotes[key]);

    if ((key.endsWith('Scene-id')) || (key.endsWith('Offset-id')) || (key.endsWith('Mode-id'))) {
      const valueBlockData = {};
      valueBlockData.inPortValue = dayNotes[keysArray[index - 1]];
      blockId = dayNotes[key];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    }

    if (key.endsWith('Time-id')) {
      const valueBlockData = {};

      const timeString = dayNotes[keysArray[index - 1]];
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      // valueBlockData.inPortValue = array[index-1].value;
      blockId = dayNotes[key];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    }

  });

}

function sendLogoDayBlocksToSympholite(dayNumber) {

  dayNotes = store.logoWeekNotes[dayNumber];

  Object.keys(dayNotes).forEach((key, index, keysArray) => {

    // console.log(key, ':', dayNotes[key]);

    if ((key.endsWith('Scene-id')) || (key.endsWith('Offset-id')) || (key.endsWith('Mode-id'))) {
      const valueBlockData = {};
      valueBlockData.inPortValue = dayNotes[keysArray[index - 1]];
      blockId = dayNotes[key];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    }

    if (key.endsWith('Time-id')) {
      const valueBlockData = {};

      const timeString = dayNotes[keysArray[index - 1]];
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      // valueBlockData.inPortValue = array[index-1].value;
      blockId = dayNotes[key];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    }

  });

}

function sendNorthWeekToSympholight() {

  weekEng.forEach((day) => {
    const dayNumber = weekEng.indexOf(day);
    sendNorthDayBlocksToSympholite(dayNumber);
  });
}

function sendSouthWeekToSympholight() {

  weekEng.forEach((day) => {
    const dayNumber = weekEng.indexOf(day);
    sendSouthDayBlocksToSympholite(dayNumber);
  });
}

function sendLogoWeekToSympholight() {

  weekEng.forEach((day) => {
    const dayNumber = weekEng.indexOf(day);
    sendLogoDayBlocksToSympholite(dayNumber);
  });
}

async function restoreNorthFromFile() {
  let fileHandle;
  [fileHandle] = await window.showOpenFilePicker();

  const file = await fileHandle.getFile();
  const content = await file.text();

  let data = JSON.parse(content);
  // console.log(data);

  window.store.northWeekNotes.length = 0;
  window.store.northWeekNotes.push(...data);
  northWeekList.innerHTML = '';
  renderNorthWeek(window.store.northWeekNotes);
  sendNorthWeekToSympholight();
}

async function restoreSouthFromFile() {
  let fileHandle;
  [fileHandle] = await window.showOpenFilePicker();

  const file = await fileHandle.getFile();
  const content = await file.text();

  let data = JSON.parse(content);
  // console.log(data);

  window.store.southWeekNotes.length = 0;
  window.store.southWeekNotes.push(...data);
  southWeekList.innerHTML = '';
  renderSouthWeek(window.store.southWeekNotes);
  sendSouthWeekToSympholight();
}

async function restoreLogoFromFile() {
  let fileHandle;
  [fileHandle] = await window.showOpenFilePicker();

  const file = await fileHandle.getFile();
  const content = await file.text();

  let data = JSON.parse(content);
  // console.log(data);

  window.store.logoWeekNotes.length = 0;
  window.store.logoWeekNotes.push(...data);
  logoWeekList.innerHTML = '';
  renderLogoWeek(window.store.logoWeekNotes);
  sendLogoWeekToSympholight();
}

buttonSaveNorthToFile.addEventListener('click', (event) => {
  saveNorthToFile();
});

buttonSaveSouthToFile.addEventListener('click', (event) => {
  saveSouthToFile();
});

buttonSaveLogothToFile.addEventListener('click', (event) => {
  saveLogoToFile();
});

buttonRestoreNorth.addEventListener('click', (e) => {
  restoreNorthFromFile();
});

buttonRestoreSouth.addEventListener('click', (e) => {
  restoreSouthFromFile();
});

buttonRestoreLogo.addEventListener('click', (e) => {
  restoreLogoFromFile();
});