const southWeekList = document.querySelector('.week-table__south');
const northWeekList = document.querySelector('.week-table__north');

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
  nightOffset.value = item.nightOffset || "";
  nightScene.value = item.nightScene || "";
  morningTime.value = item.morningTime || "";
  morningOffset.value = item.morningOffset || "";
  morningScene.value = item.morningScene || "";
  daytimeTime.value = item.daytimeTime || "";
  daytimeOffset.value = item.daytimeOffset || "";
  eveningTime.value = item.eveningTime || "";
  eveningOffset.value = item.eveningOffset || "";
  eveningScene.value = item.eveningScene || "";
  closingTime.value = item.closingTime || "";
  closingOffset.value = item.closingOffset || "";
  closingScene.value = item.closingScene || "";

  template.querySelector('.day').setAttribute('data-daynumber', dayNumber);

  template.querySelector('.day').addEventListener('change', (event) => {
    const element = event.target;
    const currentDay = element.closest('.day');

    if (element.classList.contains('night-time-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['nightTime-id'];
      // localStorage.setItem(element.className, element.value);
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('night-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
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
      valueBlockData.inPortValue = element.value;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['morningTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('morning-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
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
      valueBlockData.inPortValue = element.value;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['daytimeTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('daytime-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
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
      valueBlockData.inPortValue = element.value;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['eveningTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('evening-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
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
      valueBlockData.inPortValue = element.value;
      blockId = store.southWeekNotes[currentDay.dataset.daynumber]['closingTime-id'];
      // localStorage.setItem(element.className, element.value);
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('closing-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
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
  nightOffset.value = item.nightOffset || "";
  nightScene.value = item.nightScene || "";
  morningTime.value = item.morningTime || "";
  morningOffset.value = item.morningOffset || "";
  morningScene.value = item.morningScene || "";
  daytimeTime.value = item.daytimeTime || "";
  daytimeOffset.value = item.daytimeOffset || "";
  eveningTime.value = item.eveningTime || "";
  eveningOffset.value = item.eveningOffset || "";
  eveningScene.value = item.eveningScene || "";
  closingTime.value = item.closingTime || "";
  closingOffset.value = item.closingOffset || "";
  closingScene.value = item.closingScene || "";

  template.querySelector('.day').setAttribute('data-daynumber', dayNumber);

  template.querySelector('.day').addEventListener('change', (event) => {
    const element = event.target;
    const currentDay = element.closest('.day');

    if (element.classList.contains('night-time-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['nightTime-id'];
      // localStorage.setItem(element.className, element.value);
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('night-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
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
      valueBlockData.inPortValue = element.value;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['morningTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('morning-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
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
      valueBlockData.inPortValue = element.value;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['daytimeTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('daytime-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
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
      valueBlockData.inPortValue = element.value;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['eveningTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('evening-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
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
      valueBlockData.inPortValue = element.value;
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
      valueBlockData.inPortValue = element.value;
      blockId = store.northWeekNotes[currentDay.dataset.daynumber]['closingTime-id'];
      // localStorage.setItem(element.className, element.value);
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('closing-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
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
  
}

function renderSouthWeek(notes) {
  // weekList.innerHTML = '';
  southWeekList.append(...(notes.map(getSouthDay)));
}

function renderNorthWeek(notes) {
  // weekList.innerHTML = '';
  northWeekList.append(...(notes.map(getNorthDay)));
}