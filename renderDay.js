const mondayList = document.querySelector('.monday');

mondayList.addEventListener('change', (event) => {
  const element = event.target;
  const classNames = [
    'monday-before-time-input',
    'monday-before-offset-input',
    'monday-before-scene-select',
    'monday-morning-time-input',
    'monday-morning-offset-input',
    'monday-morning-scene-select',
    'monday-evening-time-input',
    'monday-evening-offset-input',
    'monday-evening-scene-select',
    'monday-after-time-input',
    'monday-after-offset-input',
    'monday-after-scene-select',];
  if (!classNames.some(className => element.classList.contains(className))) {
    return;
  }

  if (element.classList.contains('monday-before-time-input')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    localStorage.setItem(element.className, element.value);
    url = apiUrl + "workflow/blocks/values/" + "0d8eb784-f423-4173-a15a-ff1d5da8442c";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-before-offset-input')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    localStorage.setItem(element.className, element.value);

    url = apiUrl + "workflow/blocks/values/" + "ad565a5f-d492-4922-ae6e-31232bbcaf25";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-before-scene-select')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    url = apiUrl + "workflow/blocks/values/" + "7e218153-45b2-4044-a828-b37c9a7bed54";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-morning-time-input')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    url = apiUrl + "workflow/blocks/values/" + "4dc3c06f-f207-43ca-bfab-2a6bce65b554";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-morning-offset-input')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    url = apiUrl + "workflow/blocks/values/" + "11b6008a-0451-4cba-815c-03ed0c83dc1c";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-morning-scene-select')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    url = apiUrl + "workflow/blocks/values/" + "eaacc54d-8b70-4e74-bc4a-7bad9a5e248e";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-evening-time-input')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    url = apiUrl + "workflow/blocks/values/" + "f1663d29-37db-4ce7-92e7-5563f95156ad";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-evening-offset-input')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    url = apiUrl + "workflow/blocks/values/" + "06c00f14-a068-4be8-a845-7f92057e768f";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-evening-scene-select')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    url = apiUrl + "workflow/blocks/values/" + "cb84318d-7c28-4ee7-8336-608d161a3705";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-after-time-input')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    url = apiUrl + "workflow/blocks/values/" + "d9b6ad06-ba73-4dc4-9584-e76c84398f22";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-after-offset-input')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    url = apiUrl + "workflow/blocks/values/" + "f8562f11-2919-4b8e-9db8-7578751e5f15";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  // if (element.classList.contains('monday-after-scene-select')) {
  //   const valueBlockData = {};
  //   valueBlockData.inPortValue = element.value;
  //   url = apiUrl + "workflow/blocks/values/" + "cb84318d-7c28-4ee7-8336-608d161a3705";
  //   putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  // }
});

function getMondayBlocks() {
  url = apiUrl + "workflow/blocks/values";

  getData(url)
    .then(response => {
      const mondayBlocks = response.filter((item) => {
        return item.displayName.startsWith('Mon');
      });
      console.log(mondayBlocks);
      return mondayBlocks;
    })
    .then(mondayBlocks => {
      const mondayBeforeTimeInput = document.querySelector('.monday-before-time-input');
      const mondayBeforeOffsetInput = document.querySelector('.monday-before-offset-input');
      const mondayBeforeSceneSelect = document.querySelector('.monday-before-scene-select');
      const mondayMorningTimeInput = document.querySelector('.monday-morning-time-input');
      const mondayMorningOffsetInput = document.querySelector('.monday-morning-offset-input');
      const mondayMorningSceneSelect = document.querySelector('.monday-morning-scene-select');
      const mondayEveningTimeInput = document.querySelector('.monday-evening-time-input');
      const mondayEveningOffsetInput = document.querySelector('.monday-evening-offset-input');
      const mondayEveningSceneSelect = document.querySelector('.monday-evening-scene-select');
      const mondayAfterTimeInput = document.querySelector('.monday-after-time-input');
      const mondayAfterOffsetInput = document.querySelector('.monday-after-offset-input');
      const mondayAfterSceneSelect = document.querySelector('.monday-after-scene-select');

      const mondayBeforeTimeBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Mon_TBD_NB';
      });
      const mondayBeforeOffsetBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Mon_BD_O_NB';
      });
      const mondayBeforeSceneBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Mon_BD_S_NB';
      });
      const mondayMorningTimeBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Mon_TM_NB';
      });
      const mondayMorningOffsetBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Mon_M_O_NB';
      });
      const mondayMorningSceneBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Mon_M_S_NB';
      });
      const mondayEveningTimeBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Mon_TE_NB';
      });
      const mondayEveningOffsetBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Mon_E_O_NB';
      });
      const mondayEveningSceneBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Mon_E_S_NB';
      });
      const mondayAfterTimeBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Mon_TN_NB';
      });
      const mondayAfterOffsetBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Mon_N_O_NB';
      });
      // const mondayAfterSceneBlock = mondayBlocks.find((block) => {
      //   return block.displayName === 'Mon_N_S_NB';
      // });

      mondayBeforeTimeInput.value = mondayBeforeTimeBlock.outPortValue;
      mondayBeforeOffsetInput.value = mondayBeforeOffsetBlock.outPortValue;
      mondayBeforeSceneSelect.value = mondayBeforeSceneBlock.outPortValue;
      mondayMorningTimeInput.value = mondayMorningTimeBlock.outPortValue;
      mondayMorningOffsetInput.value = mondayMorningOffsetBlock.outPortValue;
      mondayMorningSceneSelect.value = mondayMorningSceneBlock.outPortValue;
      mondayEveningTimeInput.value = mondayEveningTimeBlock.outPortValue;
      mondayEveningOffsetInput.value = mondayEveningOffsetBlock.outPortValue;
      mondayEveningSceneSelect.value = mondayEveningSceneBlock.outPortValue;
      mondayAfterTimeInput.value = mondayAfterTimeBlock.outPortValue;
      mondayAfterOffsetInput.value = mondayAfterOffsetBlock.outPortValue;
      // mondayAfterSceneSelect.value = mondayAfterSceneBlock.outPortValue;
    })
    .catch(error => alert("An error occurred: Message = " + error.message));
}

const buttonGetMonday = document.querySelector('.button-get-monday');
buttonGetMonday.addEventListener('click', () => {

  getMondayBlocks();

})

function setValueToBlock() {
  // Fill object to put
  valueBlockData = {};
  valueBlockData.inPortValue = document.getElementById("serial").value;

  // Build REST API call url
  url = apiUrl + "workflow/blocks/values/" + document.getElementById("valueBlockId").value;

  // Put data
  putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
}

// Подвал

function getAllValueBlocks() {

  url = apiUrl + "workflow/blocks/values";

  getData(url)
    .then(response => {
      // console.log(response); // dev-logs
      return response;
    }).catch(error => alert("An error occurred: Message = " + error.message));
}

// function getDayList(item) {
//   const template = document.querySelector('.template-todo-card').content.cloneNode(true);

//   const title = template.querySelector('.card-title');
//   const user = template.querySelector('.card-user');
//   const date = template.querySelector('.card-date');

//   title.textContent = item.title;
//   user.textContent = item.user;
//   date.textContent = item.date;
//   template.querySelector('.todo-card').setAttribute('data-id', item.id);

//   return template;
// }

// function renderDay(notes) {
//   todoListElement.innerHTML = '';
//   todoListElement.append(...(notes.map(getTodoCard)));
// }