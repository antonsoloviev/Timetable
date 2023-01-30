const southWeekList = document.querySelector('.week-table__south');
const northWeekList = document.querySelector('.week-table__north');
const logoWeekList = document.querySelector('.week-table__logo');

const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

function getSouthDay(item) {
  const template = document.querySelector('.template-day').content.cloneNode(true);

  const dayNumber = window.store.southWeekNotes.indexOf(item);

  const radioButtons = template.querySelectorAll('input[type=radio]');
  radioButtons.forEach(radio => {
    const oldName = radio.name;
    radio.name = `south_${weekEng[dayNumber]}${oldName}`;
  });

  const dayTitle = template.querySelector('.day-title');
  const nightTime = template.querySelector('.night-time-input');
  const nightOffset = template.querySelector('.night-offset-input');
  const nightScene = template.querySelector('.night-scene-select');
  const nightModeTime = template.querySelector('input[type=radio][name*="night"][value="time"]');
  const nightModeOffset = template.querySelector('input[type=radio][name*="night"][value="offset"]');
  const morningTime = template.querySelector('.morning-time-input');
  const morningOffset = template.querySelector('.morning-offset-input');
  const morningScene = template.querySelector('.morning-scene-select');
  const morningModeTime = template.querySelector('input[type=radio][name*="morning"][value="time"]');
  const morningModeOffset = template.querySelector('input[type=radio][name*="morning"][value="offset"]');
  const daytimeTime = template.querySelector('.daytime-time-input');
  const daytimeOffset = template.querySelector('.daytime-offset-input');
  const daytimeModeTime = template.querySelector('input[type=radio][name*="daytime"][value="time"]');
  const daytimeModeOffset = template.querySelector('input[type=radio][name*="daytime"][value="offset"]');
  const eveningTime = template.querySelector('.evening-time-input');
  const eveningOffset = template.querySelector('.evening-offset-input');
  const eveningScene = template.querySelector('.evening-scene-select');
  const eveningModeTime = template.querySelector('input[type=radio][name*="evening"][value="time"]');
  const eveningModeOffset = template.querySelector('input[type=radio][name*="evening"][value="offset"]');
  const closingTime = template.querySelector('.closing-time-input');
  const closingOffset = template.querySelector('.closing-offset-input');
  const closingScene = template.querySelector('.closing-scene-select');
  const closingModeTime = template.querySelector('input[type=radio][name*="closing"][value="time"]');
  const closingModeOffset = template.querySelector('input[type=radio][name*="closing"][value="offset"]');

  const timeInputs = template.querySelectorAll('div.time input[type=text]');
  const offsetInputs = template.querySelectorAll('div.offset input[type=text]');

  timeInputs.forEach((input) => {
    input.pattern = "[0-1]{1}[0-9]{1}[\:][0-5]{1}[0-9]{1}|[2]{1}[0-4]{1}[\:][0-5]{1}[0-9]{1}| ";
    input.title = 'Формат ввода времени ХХ:ХХ';
    input.onkeyup = (e) => {
      if (e.target.value.length == 2) {
        e.target.value += ':';
      }
      validate();
    }
   
    function validate() {

      let pattern = "[0-1]{1}[0-9]{1}[\:][0-5]{1}[0-9]{1}|[2]{1}[0-4]{1}[\:][0-5]{1}[0-9]{1}";
      if (input.value.match(pattern)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
      }
      else {
        input.classList.remove("valid");
        input.classList.add("invalid");
      }

      if(input.value == "") {
        input.classList.add("valid");
        input.classList.remove("invalid");
      }
    }
  });

  offsetInputs.forEach((input) => {
    input.pattern = "[0-]{1}[0-2]{1}[\:][0-5]{1}[0-9]{1}";
    input.title = 'Формат сдвига ХХ:ХХ, не более ±02:59';
    input.onkeyup = (e) => {
      if (e.target.value.length == 2) {
        e.target.value += ':';
      }
      validate();
    }
   
    function validate() {

      let pattern = "[0-]{1}[0-4]{1}[\:][0-5]{1}[0-9]{1}";
      if (input.value.match(pattern)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
      }
      else {
        input.classList.remove("valid");
        input.classList.add("invalid");
      }

      if(input.value == "") {
        input.classList.add("valid");
        input.classList.remove("invalid");
      }
      
    }
  });


  const nightMode = item.nightMode;
  const morningMode = item.morningMode;
  const daytimeMode = item.daytimeMode;
  const eveningMode = item.eveningMode;
  const closingMode = item.closingMode;

  if (nightMode === 'time') {
    nightModeTime.checked = true;
    nightOffset.disabled = true;
  } else {
    nightModeOffset.checked = true;
    nightTime.disabled = true;
  }

  if (morningMode === 'time') {
    morningModeTime.checked = true;
    morningOffset.disabled = true;
  } else {
    morningModeOffset.checked = true;
    morningTime.disabled = true;
  }

  if (daytimeMode === 'time') {
    daytimeModeTime.checked = true;
    daytimeOffset.disabled = true;
  } else {
    daytimeModeOffset.checked = true;
    daytimeTime.disabled = true;
  }

  if (eveningMode === 'time') {
    eveningModeTime.checked = true;
    eveningOffset.disabled = true;
  } else {
    eveningModeOffset.checked = true;
    eveningTime.disabled = true;
  }

  if (closingMode === 'time') {
    closingModeTime.checked = true;
    closingOffset.disabled = true;
  } else {
    closingModeOffset.checked = true;
    closingTime.disabled = true;
  }

  dayTitle.textContent = week[dayNumber] || "";
  nightTime.value = item.nightTime || "";
  let nightOffsetTimeString = convertMinsToTimeString(item.nightOffset)
  nightOffset.value = nightOffsetTimeString || "";
  nightScene.value = item.nightScene || "";
  morningTime.value = item.morningTime || "";
  let morningOffsetTimeString = convertMinsToTimeString(item.morningOffset)
  morningOffset.value = morningOffsetTimeString || "";
  morningScene.value = item.morningScene || "";
  daytimeTime.value = item.daytimeTime || "";
  let daytimeOffsetTimeString = convertMinsToTimeString(item.daytimeOffset)
  daytimeOffset.value = daytimeOffsetTimeString || "";
  eveningTime.value = item.eveningTime || "";
  let eveningOffsetTimeString = convertMinsToTimeString(item.eveningOffset)
  eveningOffset.value = eveningOffsetTimeString || "";
  eveningScene.value = item.eveningScene || "";
  closingTime.value = item.closingTime || "";
  let closingOffsetTimeString = convertMinsToTimeString(item.closingOffset)
  closingOffset.value = closingOffsetTimeString || "";
  closingScene.value = item.closingScene || "";

  template.querySelector('.day').setAttribute('data-daynumber', dayNumber);

  template.querySelector('.day').addEventListener('change', (event) => {
    const element = event.target;
    const currentDay = element.closest('.day');

    if ((element.classList.contains('night-time-input')) & (element.classList.contains('valid'))) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['nightTime-id'];
      // localStorage.setItem(element.className, element.value);
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('night-offset-input')) {
      const valueBlockData = {};
      valueInMins = convertTimeStringToMins(element.value);
      valueBlockData.inPortValue = valueInMins;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['nightOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('night-scene-select')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['nightScene-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('night-time-radio') || element.classList.contains('night-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['nightMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        nightOffset.disabled = false;
        nightTime.disabled = true;
      } else {
        nightOffset.disabled = true;
        nightTime.disabled = false;
      }
    };

    if (element.classList.contains('morning-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['morningTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('morning-offset-input')) {
      const valueBlockData = {};
      valueInMins = convertTimeStringToMins(element.value);
      valueBlockData.inPortValue = valueInMins;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['morningOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('morning-scene-select')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['morningScene-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('morning-time-radio') || element.classList.contains('morning-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['morningMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        morningOffset.disabled = false;
        morningTime.disabled = true;
      } else {
        morningOffset.disabled = true;
        morningTime.disabled = false;
      }
    };

    if (element.classList.contains('daytime-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['daytimeTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('daytime-offset-input')) {
      const valueBlockData = {};
      valueInMins = convertTimeStringToMins(element.value);
      valueBlockData.inPortValue = valueInMins;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['daytimeOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('daytime-time-radio') || element.classList.contains('daytime-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['daytimeMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        daytimeOffset.disabled = false;
        daytimeTime.disabled = true;
      } else {
        daytimeOffset.disabled = true;
        daytimeTime.disabled = false;
      }
    };

    if (element.classList.contains('evening-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['eveningTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('evening-offset-input')) {
      const valueBlockData = {};
      valueInMins = convertTimeStringToMins(element.value);
      valueBlockData.inPortValue = valueInMins;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['eveningOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('evening-scene-select')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['eveningScene-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('evening-time-radio') || element.classList.contains('evening-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['eveningMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        eveningOffset.disabled = false;
        eveningTime.disabled = true;
      } else {
        eveningOffset.disabled = true;
        eveningTime.disabled = false;
      }
    };

    if (element.classList.contains('closing-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['closingTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('closing-offset-input')) {
      const valueBlockData = {};
      valueInMins = convertTimeStringToMins(element.value);
      valueBlockData.inPortValue = valueInMins;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['closingOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('closing-scene-select')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['closingScene-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('closing-time-radio') || element.classList.contains('closing-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['closingMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        closingOffset.disabled = false;
        closingTime.disabled = true;
      } else {
        closingOffset.disabled = true;
        closingTime.disabled = false;
      }
    };
  })

  return template;
}

function getNorthDay(item) {
  const template = document.querySelector('.template-day').content.cloneNode(true);

  const dayNumber = window.store.northWeekNotes.indexOf(item);

  const radioButtons = template.querySelectorAll('input[type=radio]');
  radioButtons.forEach(radio => {
    const oldName = radio.name;
    radio.name = `north_${weekEng[dayNumber]}${oldName}`;
  });

  const dayTitle = template.querySelector('.day-title');
  const nightTime = template.querySelector('.night-time-input');
  const nightOffset = template.querySelector('.night-offset-input');
  const nightScene = template.querySelector('.night-scene-select');
  const nightModeTime = template.querySelector('input[type=radio][name*="night"][value="time"]');
  const nightModeOffset = template.querySelector('input[type=radio][name*="night"][value="offset"]');
  const morningTime = template.querySelector('.morning-time-input');
  const morningOffset = template.querySelector('.morning-offset-input');
  const morningScene = template.querySelector('.morning-scene-select');
  const morningModeTime = template.querySelector('input[type=radio][name*="morning"][value="time"]');
  const morningModeOffset = template.querySelector('input[type=radio][name*="morning"][value="offset"]');
  const daytimeTime = template.querySelector('.daytime-time-input');
  const daytimeOffset = template.querySelector('.daytime-offset-input');
  const daytimeModeTime = template.querySelector('input[type=radio][name*="daytime"][value="time"]');
  const daytimeModeOffset = template.querySelector('input[type=radio][name*="daytime"][value="offset"]');
  const eveningTime = template.querySelector('.evening-time-input');
  const eveningOffset = template.querySelector('.evening-offset-input');
  const eveningScene = template.querySelector('.evening-scene-select');
  const eveningModeTime = template.querySelector('input[type=radio][name*="evening"][value="time"]');
  const eveningModeOffset = template.querySelector('input[type=radio][name*="evening"][value="offset"]');
  const closingTime = template.querySelector('.closing-time-input');
  const closingOffset = template.querySelector('.closing-offset-input');
  const closingScene = template.querySelector('.closing-scene-select');
  const closingModeTime = template.querySelector('input[type=radio][name*="closing"][value="time"]');
  const closingModeOffset = template.querySelector('input[type=radio][name*="closing"][value="offset"]');

  const timeInputs = template.querySelectorAll('div.time input[type=text]');
  const offsetInputs = template.querySelectorAll('div.offset input[type=text]');

  timeInputs.forEach((input) => {
    input.pattern = "[0-1]{1}[0-9]{1}[\:][0-5]{1}[0-9]{1}|[2]{1}[0-4]{1}[\:][0-5]{1}[0-9]{1}";
    input.title = 'Формат ввода времени ХХ:ХХ';
    input.onkeyup = (e) => {
      if (e.target.value.length == 2) {
        e.target.value += ':';
      }
      validate();
    }
   
    function validate() {

      let pattern = "[0-1]{1}[0-9]{1}[\:][0-5]{1}[0-9]{1}|[2]{1}[0-4]{1}[\:][0-5]{1}[0-9]{1}";
      if (input.value.match(pattern)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
      }
      else {
        input.classList.remove("valid");
        input.classList.add("invalid");
      }

      if(input.value == "") {
        input.classList.add("valid");
        input.classList.remove("invalid");
      }
      
    }
  });

  offsetInputs.forEach((input) => {
    input.pattern = "[0-]{1}[0-2]{1}[\:][0-5]{1}[0-9]{1}";
    input.title = 'Формат сдвига ХХ:ХХ, не более ±02:59';
    input.onkeyup = (e) => {
      if (e.target.value.length == 2) {
        e.target.value += ':';
      }
      validate();
    }
   
    function validate() {

      let pattern = "[0-]{1}[0-4]{1}[\:][0-5]{1}[0-9]{1}";
      if (input.value.match(pattern)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
      }
      else {
        input.classList.remove("valid");
        input.classList.add("invalid");
      }

      if(input.value == "") {
        input.classList.add("valid");
        input.classList.remove("invalid");
      }
      
    }
  });

  const nightMode = item.nightMode;
  const morningMode = item.morningMode;
  const daytimeMode = item.daytimeMode;
  const eveningMode = item.eveningMode;
  const closingMode = item.closingMode;

  if (nightMode === 'time') {
    nightModeTime.checked = true;
    nightOffset.disabled = true;
  } else {
    nightModeOffset.checked = true;
    nightTime.disabled = true;
  }

  if (morningMode === 'time') {
    morningModeTime.checked = true;
    morningOffset.disabled = true;
  } else {
    morningModeOffset.checked = true;
    morningTime.disabled = true;
  }

  if (daytimeMode === 'time') {
    daytimeModeTime.checked = true;
    daytimeOffset.disabled = true;
  } else {
    daytimeModeOffset.checked = true;
    daytimeTime.disabled = true;
  }

  if (eveningMode === 'time') {
    eveningModeTime.checked = true;
    eveningOffset.disabled = true;
  } else {
    eveningModeOffset.checked = true;
    eveningTime.disabled = true;
  }

  if (closingMode === 'time') {
    closingModeTime.checked = true;
    closingOffset.disabled = true;
  } else {
    closingModeOffset.checked = true;
    closingTime.disabled = true;
  }

  // dayTitle.textContent = week[dayNumber] || "";
  // nightTime.value = item.nightTime || "";
  // nightOffset.value = item.nightOffset || "";
  // nightScene.value = item.nightScene || "";
  // morningTime.value = item.morningTime || "";
  // morningOffset.value = item.morningOffset || "";
  // morningScene.value = item.morningScene || "";
  // daytimeTime.value = item.daytimeTime || "";
  // daytimeOffset.value = item.daytimeOffset || "";
  // eveningTime.value = item.eveningTime || "";
  // eveningOffset.value = item.eveningOffset || "";
  // eveningScene.value = item.eveningScene || "";
  // closingTime.value = item.closingTime || "";
  // closingOffset.value = item.closingOffset || "";
  // closingScene.value = item.closingScene || "";

  dayTitle.textContent = week[dayNumber] || "";
  nightTime.value = item.nightTime || "";
  let nightOffsetTimeString = convertMinsToTimeString(item.nightOffset)
  nightOffset.value = nightOffsetTimeString || "";
  nightScene.value = item.nightScene || "";
  morningTime.value = item.morningTime || "";
  let morningOffsetTimeString = convertMinsToTimeString(item.morningOffset)
  morningOffset.value = morningOffsetTimeString || "";
  morningScene.value = item.morningScene || "";
  daytimeTime.value = item.daytimeTime || "";
  let daytimeOffsetTimeString = convertMinsToTimeString(item.daytimeOffset)
  daytimeOffset.value = daytimeOffsetTimeString || "";
  eveningTime.value = item.eveningTime || "";
  let eveningOffsetTimeString = convertMinsToTimeString(item.eveningOffset)
  eveningOffset.value = eveningOffsetTimeString || "";
  eveningScene.value = item.eveningScene || "";
  closingTime.value = item.closingTime || "";
  let closingOffsetTimeString = convertMinsToTimeString(item.closingOffset)
  closingOffset.value = closingOffsetTimeString || "";
  closingScene.value = item.closingScene || "";

  template.querySelector('.day').setAttribute('data-daynumber', dayNumber);

  template.querySelector('.day').addEventListener('change', (event) => {
    const element = event.target;
    const currentDay = element.closest('.day');

    if (element.classList.contains('night-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['nightTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('night-offset-input')) {
      const valueBlockData = {};
      const valueInMins = convertTimeStringToMins(element.value);
      valueBlockData.inPortValue = valueInMins;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['nightOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('night-scene-select')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['nightScene-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('night-time-radio') || element.classList.contains('night-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['nightMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        nightOffset.disabled = false;
        nightTime.disabled = true;
      } else {
        nightOffset.disabled = true;
        nightTime.disabled = false;
      }
    };

    if (element.classList.contains('morning-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['morningTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('morning-offset-input')) {
      const valueBlockData = {};
      const valueInMins = convertTimeStringToMins(element.value);
      valueBlockData.inPortValue = valueInMins;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['morningOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('morning-scene-select')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['morningScene-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('morning-time-radio') || element.classList.contains('morning-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['morningMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        morningOffset.disabled = false;
        morningTime.disabled = true;
      } else {
        morningOffset.disabled = true;
        morningTime.disabled = false;
      }
    };

    if (element.classList.contains('daytime-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['daytimeTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('daytime-offset-input')) {
      const valueBlockData = {};
      const valueInMins = convertTimeStringToMins(element.value);
      valueBlockData.inPortValue = valueInMins;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['daytimeOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('daytime-time-radio') || element.classList.contains('daytime-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['daytimeMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        daytimeOffset.disabled = false;
        daytimeTime.disabled = true;
      } else {
        daytimeOffset.disabled = true;
        daytimeTime.disabled = false;
      }
    };

    if (element.classList.contains('evening-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['eveningTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('evening-offset-input')) {
      const valueBlockData = {};
      const valueInMins = convertTimeStringToMins(element.value);
      valueBlockData.inPortValue = valueInMins;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['eveningOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('evening-scene-select')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['eveningScene-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('evening-time-radio') || element.classList.contains('evening-offset-radio')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['eveningMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        eveningOffset.disabled = false;
        eveningTime.disabled = true;
      } else {
        eveningOffset.disabled = true;
        eveningTime.disabled = false;
      }
    };

    if (element.classList.contains('closing-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['closingTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('closing-offset-input')) {
      const valueBlockData = {};
      const valueInMins = convertTimeStringToMins(element.value);
      valueBlockData.inPortValue = valueInMins;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['closingOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('closing-scene-select')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['closingScene-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('closing-time-radio') || element.classList.contains('closing-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['closingMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        closingOffset.disabled = false;
        closingTime.disabled = true;
      } else {
        closingOffset.disabled = true;
        closingTime.disabled = false;
      }
    };
  })

  return template;
}

function getLogoDay(item) {
  const template = document.querySelector('.template-logo-day').content.cloneNode(true);

  const dayNumber = window.store.logoWeekNotes.indexOf(item);

  const radioButtons = template.querySelectorAll('input[type=radio]');
  radioButtons.forEach(radio => {
    const oldName = radio.name;
    radio.name = `logo_${weekEng[dayNumber]}${oldName}`;
  });

  const dayTitle = template.querySelector('.day-title');

  const lightboxMorningOnModeTime = template.querySelector('input[type=radio][name*="lightbox-morning-on"][value="time"]');
  const lightboxMorningOnTime = template.querySelector('.lightbox-morning-on-time-input');
  const lightboxMorningOnModeOffset = template.querySelector('input[type=radio][name*="lightbox-morning-on"][value="offset"]');
  const lightboxMorningOnOffset = template.querySelector('.lightbox-morning-on-offset-input');
  const lightboxMorningOffModeTime = template.querySelector('input[type=radio][name*="lightbox-morning-off"][value="time"]');
  const lightboxMorningOffTime = template.querySelector('.lightbox-morning-off-time-input');
  const lightboxMorningOffModeOffset = template.querySelector('input[type=radio][name*="lightbox-morning-off"][value="offset"]');
  const lightboxMorningOffOffset = template.querySelector('.lightbox-morning-off-offset-input');

  const lightboxEveningOnModeTime = template.querySelector('input[type=radio][name*="lightbox-evening-on"][value="time"]');
  const lightboxEveningOnTime = template.querySelector('.lightbox-evening-on-time-input');
  const lightboxEveningOnModeOffset = template.querySelector('input[type=radio][name*="lightbox-evening-on"][value="offset"]');
  const lightboxEveningOnOffset = template.querySelector('.lightbox-evening-on-offset-input');
  const lightboxEveningOffModeTime = template.querySelector('input[type=radio][name*="lightbox-evening-off"][value="time"]');
  const lightboxEveningOffTime = template.querySelector('.lightbox-evening-off-time-input');
  const lightboxEveningOffModeOffset = template.querySelector('input[type=radio][name*="lightbox-evening-off"][value="offset"]');
  const lightboxEveningOffOffset = template.querySelector('.lightbox-evening-off-offset-input');

  const logotypeMorningOnModeTime = template.querySelector('input[type=radio][name*="logotype-morning-on"][value="time"]');
  const logotypeMorningOnTime = template.querySelector('.logotype-morning-on-time-input');
  const logotypeMorningOnModeOffset = template.querySelector('input[type=radio][name*="logotype-morning-on"][value="offset"]');
  const logotypeMorningOnOffset = template.querySelector('.logotype-morning-on-offset-input');
  const logotypeMorningOffModeTime = template.querySelector('input[type=radio][name*="logotype-morning-off"][value="time"]');
  const logotypeMorningOffTime = template.querySelector('.logotype-morning-off-time-input');
  const logotypeMorningOffModeOffset = template.querySelector('input[type=radio][name*="logotype-morning-off"][value="offset"]');
  const logotypeMorningOffOffset = template.querySelector('.logotype-morning-off-offset-input');

  const logotypeEveningOnModeTime = template.querySelector('input[type=radio][name*="logotype-evening-on"][value="time"]');
  const logotypeEveningOnTime = template.querySelector('.logotype-evening-on-time-input');
  const logotypeEveningOnModeOffset = template.querySelector('input[type=radio][name*="logotype-evening-on"][value="offset"]');
  const logotypeEveningOnOffset = template.querySelector('.logotype-evening-on-offset-input');
  const logotypeEveningOffModeTime = template.querySelector('input[type=radio][name*="logotype-evening-off"][value="time"]');
  const logotypeEveningOffTime = template.querySelector('.logotype-evening-off-time-input');
  const logotypeEveningOffModeOffset = template.querySelector('input[type=radio][name*="logotype-evening-off"][value="offset"]');
  const logotypeEveningOffOffset = template.querySelector('.logotype-evening-off-offset-input');

  const lightboxMorningOnMode = item.lightboxMorningOnMode;
  const lightboxMorningOffMode = item.lightboxMorningOffMode;
  const lightboxEveningOnMode = item.lightboxEveningOnMode;
  const lightboxEveningOffMode = item.lightboxEveningOffMode;

  const logotypeMorningOnMode = item.logotypeMorningOnMode;
  const logotypeMorningOffMode = item.logotypeMorningOnMode;
  const logotypeEveningOnMode = item.logotypeEveningOnMode;
  const logotypeEveningOffMode = item.logotypeEveningOnMode;

  if (lightboxMorningOnMode === 'time') {
    lightboxMorningOnModeTime.checked = true;
    lightboxMorningOnOffset.disabled = true;
  } else {
    lightboxMorningOnModeOffset.checked = true;
    lightboxMorningOnTime.disabled = true;
  }

  if (lightboxMorningOffMode === 'time') {
    lightboxMorningOffModeTime.checked = true;
    lightboxMorningOffOffset.disabled = true;
  } else {
    lightboxMorningOffModeOffset.checked = true;
    lightboxMorningOffTime.disabled = true;
  }

  if (lightboxEveningOnMode === 'time') {
    lightboxEveningOnModeTime.checked = true;
    lightboxEveningOnOffset.disabled = true;
  } else {
    lightboxEveningOnModeOffset.checked = true;
    lightboxEveningOnTime.disabled = true;
  }

  if (lightboxEveningOffMode === 'time') {
    lightboxEveningOffModeTime.checked = true;
    lightboxEveningOffOffset.disabled = true;
  } else {
    lightboxEveningOffModeOffset.checked = true;
    lightboxEveningOffTime.disabled = true;
  }


  if (logotypeMorningOnMode === 'time') {
    logotypeMorningOnModeTime.checked = true;
    logotypeMorningOnOffset.disabled = true;
  } else {
    logotypeMorningOnModeOffset.checked = true;
    logotypeMorningOnTime.disabled = true;
  }

  if (logotypeMorningOffMode === 'time') {
    logotypeMorningOffModeTime.checked = true;
    logotypeMorningOffOffset.disabled = true;
  } else {
    logotypeMorningOffModeOffset.checked = true;
    logotypeMorningOffTime.disabled = true;
  }

  if (logotypeEveningOnMode === 'time') {
    logotypeEveningOnModeTime.checked = true;
    logotypeEveningOnOffset.disabled = true;
  } else {
    logotypeEveningOnModeOffset.checked = true;
    logotypeEveningOnTime.disabled = true;
  }

  if (logotypeEveningOffMode === 'time') {
    logotypeEveningOffModeTime.checked = true;
    logotypeEveningOffOffset.disabled = true;
  } else {
    logotypeEveningOffModeOffset.checked = true;
    logotypeEveningOffTime.disabled = true;
  }

  dayTitle.textContent = week[dayNumber] || "";
  lightboxMorningOnTime.value = item.lightboxMorningOnTime || "";
  lightboxMorningOnOffset.value = item.lightboxMorningOnOffset || "";
  lightboxMorningOffTime.value = item.lightboxMorningOffTime || "";
  lightboxMorningOffOffset.value = item.lightboxMorningOffOffset || "";
  lightboxEveningOnTime.value = item.lightboxEveningOnTime || "";
  lightboxEveningOnOffset.value = item.lightboxEveningOnOffset || "";
  lightboxEveningOffTime.value = item.lightboxEveningOffTime || "";
  lightboxEveningOffOffset.value = item.lightboxEveningOffOffset || "";

  logotypeMorningOnTime.value = item.logotypeMorningOnTime || "";
  logotypeMorningOnOffset.value = item.logotypeMorningOnOffset || "";
  logotypeMorningOffTime.value = item.logotypeMorningOffTime || "";
  logotypeMorningOffOffset.value = item.logotypeMorningOffOffset || "";
  logotypeEveningOnTime.value = item.logotypeEveningOnTime || "";
  logotypeEveningOnOffset.value = item.logotypeEveningOnOffset || "";
  logotypeEveningOffTime.value = item.logotypeEveningOffTime || "";
  logotypeEveningOffOffset.value = item.logotypeEveningOffOffset || "";

  template.querySelector('.day').setAttribute('data-daynumber', dayNumber);

  template.querySelector('.day').addEventListener('change', (event) => {
    const element = event.target;
    const currentDay = element.closest('.day');

    // Lightboxes MORNING
    if (element.classList.contains('lightbox-morning-on-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['lightboxMorningOnTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('lightbox-morning-on-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['lightboxMorningOnOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('lightbox-morning-on-time-radio') || element.classList.contains('lightbox-morning-on-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['lightboxMorningOnMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        lightboxMorningOnOffset.disabled = false;
        lightboxMorningOnTime.disabled = true;
      } else {
        lightboxMorningOnOffset.disabled = true;
        lightboxMorningOnTime.disabled = false;
      }
    };

    if (element.classList.contains('lightbox-morning-off-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['lightboxMorningOffTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('lightbox-morning-off-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['lightboxMorningOffOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('lightbox-morning-off-time-radio') || element.classList.contains('lightbox-morning-off-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['lightboxMorningOffMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        lightboxMorningOffOffset.disabled = false;
        lightboxMorningOffTime.disabled = true;
      } else {
        lightboxMorningOffOffset.disabled = true;
        lightboxMorningOffTime.disabled = false;
      }
    };

    // Lightboxes EVENING
    if (element.classList.contains('lightbox-evening-on-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['lightboxEveningOnTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('lightbox-evening-on-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['lightboxEveningOnOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('lightbox-evening-on-time-radio') || element.classList.contains('lightbox-evening-on-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['lightboxEveningOnMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        lightboxEveningOnOffset.disabled = false;
        lightboxEveningOnTime.disabled = true;
      } else {
        lightboxEveningOnOffset.disabled = true;
        lightboxEveningOnTime.disabled = false;
      }
    };

    if (element.classList.contains('lightbox-evening-off-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['lightboxEveningOffTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('lightbox-evening-off-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['lightboxEveningOffOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('lightbox-evening-off-time-radio') || element.classList.contains('lightbox-evening-off-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['lightboxEveningOffMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        lightboxEveningOffOffset.disabled = false;
        lightboxEveningOffTime.disabled = true;
      } else {
        lightboxEveningOffOffset.disabled = true;
        lightboxEveningOffTime.disabled = false;
      }
    };


    // Logotypes MORNING
    if (element.classList.contains('logotype-morning-on-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['logotypeMorningOnTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('logotype-morning-on-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['logotypeMorningOnOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('logotype-morning-on-time-radio') || element.classList.contains('logotype-morning-on-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['logotypeMorningOnMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        logotypeMorningOnOffset.disabled = false;
        logotypeMorningOnTime.disabled = true;
      } else {
        logotypeMorningOnOffset.disabled = true;
        logotypeMorningOnTime.disabled = false;
      }
    };

    if (element.classList.contains('logotype-morning-off-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['logotypeMorningOffTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('logotype-morning-off-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['logotypeMorningOffOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('logotype-morning-off-time-radio') || element.classList.contains('logotype-morning-off-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['logotypeMorningOffMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        logotypeMorningOffOffset.disabled = false;
        logotypeMorningOffTime.disabled = true;
      } else {
        logotypeMorningOffOffset.disabled = true;
        logotypeMorningOffTime.disabled = false;
      }
    };

    // Logotypes EVENING
    if (element.classList.contains('logotype-evening-on-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['logotypeEveningOnTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('logotype-evening-on-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['logotypeEveningOnOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('logotype-evening-on-time-radio') || element.classList.contains('logotype-evening-on-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['logotypeEveningOnMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        logotypeEveningOnOffset.disabled = false;
        logotypeEveningOnTime.disabled = true;
      } else {
        logotypeEveningOnOffset.disabled = true;
        logotypeEveningOnTime.disabled = false;
      }
    };

    if (element.classList.contains('logotype-evening-off-time-input')) {
      const valueBlockData = {};
      const timeString = element.value;
      if (timeString[0] === '0') {
        valueBlockData.inPortValue = timeString.slice(1);
      } else {
        valueBlockData.inPortValue = timeString;
      }
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['logotypeEveningOffTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('logotype-evening-off-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['logotypeEveningOffOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('logotype-evening-off-time-radio') || element.classList.contains('logotype-evening-off-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.logoWeekNotes[currentDay.dataset.daynumber]['logotypeEveningOffMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));

      if (element.value === 'offset') {
        logotypeEveningOffOffset.disabled = false;
        logotypeEveningOffTime.disabled = true;
      } else {
        logotypeEveningOffOffset.disabled = true;
        logotypeEveningOffTime.disabled = false;
      }
    };
  })

  return template;

}

function renderSouthWeek(notes) {
  // weekList.innerHTML = '';
  southWeekList.append(...(notes.map(getSouthDay)));
}

function renderNorthWeek(notes) {
  // weekList.innerHTML = '';
  northWeekList.append(...(notes.map(getNorthDay)));
}

function renderLogoWeek(notes) {
  // weekList.innerHTML = '';
  logoWeekList.append(...(notes.map(getLogoDay)));
}