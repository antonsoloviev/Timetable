const weekList = document.querySelector('.week-table');
const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

function getDay(item) {
  const template = document.querySelector('.template-day').content.cloneNode(true);

  const dayTitle = template.querySelector('.day-title');
  const beforeTime = template.querySelector('.before-time-input');
  const beforeOffset = template.querySelector('.before-offset-input');
  const beforeScene = template.querySelector('.before-scene-select');
  const morningTime = template.querySelector('.morning-time-input');
  const morningOffset = template.querySelector('.morning-offset-input');
  const morningScene = template.querySelector('.morning-scene-select');
  const eveningTime = template.querySelector('.evening-time-input');
  const eveningOffset = template.querySelector('.evening-offset-input');
  const eveningScene = template.querySelector('.evening-scene-select');
  const afterTime = template.querySelector('.after-time-input');
  const afterOffset = template.querySelector('.after-offset-input');
  const afterScene = template.querySelector('.after-scene-select');

  const dayNumber = window.store.weekNotes.indexOf(item);

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
  // template.querySelector('.day').setAttribute('data-id', item.title);

  template.querySelector('.day').addEventListener('change', (event) => {
    const element = event.target;
    const currentDay = element.closest('.day');

    if (element.classList.contains('before-time-input')) {
      
      const valueBlockData = {};
      valueBlockData.inPortValue = element.value;
      blockId = store.weekNotes[currentDay.dataset.daynumber]['beforeTime-id'];
      console.log(blockId);
      // localStorage.setItem(element.className, element.value);
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