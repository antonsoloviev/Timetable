const weekList = document.querySelector('.week-table');
const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

function getDay(item) {
  const template = document.querySelector('.template-day').content.cloneNode(true);

  const dayNumber = window.store.weekNotes.indexOf(item);

  const radioButtons = template.querySelectorAll('input[type=radio]');
  radioButtons.forEach(radio => {
    const oldName = radio.name;
    radio.name = weekEng[dayNumber] + oldName;
  });

  // input[name*="before"] input[value*="time"]

  const dayTitle = template.querySelector('.day-title');
  const beforeTime = template.querySelector('.before-time-input');
  const beforeOffset = template.querySelector('.before-offset-input');
  const beforeScene = template.querySelector('.before-scene-select');
  const beforeModeTime = template.querySelector('input[type=radio][name*="before"][value="time"]');
  const beforeModeOffset = template.querySelector('input[type=radio][name*="before"][value="offset"]');
  const morningTime = template.querySelector('.morning-time-input');
  const morningOffset = template.querySelector('.morning-offset-input');
  const morningScene = template.querySelector('.morning-scene-select');
  const morningModeTime = template.querySelector('input[type=radio][name*="morning"][value="time"]');
  const morningModeOffset = template.querySelector('input[type=radio][name*="morning"][value="offset"]');
  const eveningTime = template.querySelector('.evening-time-input');
  const eveningOffset = template.querySelector('.evening-offset-input');
  const eveningScene = template.querySelector('.evening-scene-select');
  const eveningModeTime = template.querySelector('input[type=radio][name*="evening"][value="time"]');
  const eveningModeOffset = template.querySelector('input[type=radio][name*="evening"][value="offset"]');
  const afterTime = template.querySelector('.after-time-input');
  const afterOffset = template.querySelector('.after-offset-input');
  const afterScene = template.querySelector('.after-scene-select');
  const afterModeTime = template.querySelector('input[type=radio][name*="after"][value="time"]');
  const afterModeOffset = template.querySelector('input[type=radio][name*="after"][value="offset"]');

  const beforeMode = item.beforeMode;
  const morningMode = item.morningMode;
  const eveningMode = item.eveningMode;
  const afterMode = item.afterMode;

  if (beforeMode === 'time') {
    beforeModeTime.checked = true
  } else if (beforeMode === 'offset') {
    beforeModeOffset.checked = true;
  }

  if (morningMode === 'time') {
    morningModeTime.checked = true
  } else if (morningMode === 'offset') {
    morningModeOffset.checked = true;
  }

  if (eveningMode === 'time') {
    eveningModeTime.checked = true
  } else if (eveningMode === 'offset') {
    eveningModeOffset.checked = true;
  }

  if (afterMode === 'time') {
    afterModeTime.checked = true
  } else if (afterMode === 'offset') {
    afterModeOffset.checked = true;
  }


  dayTitle.textContent = week[dayNumber] || "";
  beforeTime.value = item.beforeTime || "";
  beforeOffset.value = item.beforeOffset || "";
  beforeScene.value = item.beforeScene || "";
  morningTime.value = item.morningTime || "";
  morningOffset.value = item.morningOffset || "";
  morningScene.value = item.morningScene || "";
  eveningTime.value = item.eveningTime || "";
  eveningOffset.value = item.eveningOffset || "";
  eveningScene.value = item.eveningScene || "";
  afterTime.value = item.afterTime || "";
  afterOffset.value = item.afterOffset || "";
  afterScene.value = item.afterScene || "";

  template.querySelector('.day').setAttribute('data-daynumber', dayNumber);

  template.querySelector('.day').addEventListener('change', (event) => {
    const element = event.target;
    const currentDay = element.closest('.day');

    if (element.classList.contains('before-time-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['beforeTime-id'];
      // localStorage.setItem(element.className, element.value);
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('before-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['beforeOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('before-scene-select')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['beforeScene-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('before-time-radio') || element.classList.contains('before-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['beforeMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('morning-time-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['morningTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('morning-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['morningOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('morning-scene-select')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['morningScene-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('morning-time-radio') || element.classList.contains('morning-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['morningMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('evening-time-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['eveningTime-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('evening-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['eveningOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('evening-scene-select')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['eveningScene-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('evening-time-radio') || element.classList.contains('evening-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['eveningMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('after-time-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['afterTime-id'];
      // localStorage.setItem(element.className, element.value);
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('after-offset-input')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['afterOffset-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('after-scene-select')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['afterScene-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };

    if (element.classList.contains('after-time-radio') || element.classList.contains('after-offset-radio')) {
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['afterMode-id'];
      url = apiUrl + "workflow/blocks/values/" + blockId;
      putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
    };
  })

  return template;
}

function renderWeek(notes) {
  // weekList.innerHTML = '';
  weekList.append(...(notes.map(getDay)));
}