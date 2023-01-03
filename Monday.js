// import { getData, putData, postData} from './utils';

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
    url = apiUrl + "workflow/blocks/values/" + "1fb81587-e7fb-47ef-9a9e-74e04e5f3c1a";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-before-offset-input')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    localStorage.setItem(element.className, element.value);
    url = apiUrl + "workflow/blocks/values/" + "3bbe034d-32ec-43d2-be52-2239d5f99ada";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-before-scene-select')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    localStorage.setItem(element.className, element.value);
    url = apiUrl + "workflow/blocks/values/" + "d06cbf9c-a4af-4784-9528-1f7401a8c3c1";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-morning-time-input')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    localStorage.setItem(element.className, element.value);
    url = apiUrl + "workflow/blocks/values/" + "7329e48f-e7cb-415f-b1e9-41307d791bdb";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-morning-offset-input')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    localStorage.setItem(element.className, element.value);
    url = apiUrl + "workflow/blocks/values/" + "66b7eb67-8af4-4c0c-94f3-8ace29d9f913";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-morning-scene-select')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    localStorage.setItem(element.className, element.value);
    url = apiUrl + "workflow/blocks/values/" + "c6d3fa6c-3f6c-4816-9e32-bce0a84f5c4b";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-evening-time-input')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    localStorage.setItem(element.className, element.value);
    url = apiUrl + "workflow/blocks/values/" + "9e228d85-4752-421e-8453-669a49005a31";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-evening-offset-input')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    localStorage.setItem(element.className, element.value);
    url = apiUrl + "workflow/blocks/values/" + "e199b478-312b-4689-8b0a-1c085f7b5b87";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-evening-scene-select')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    localStorage.setItem(element.className, element.value);
    url = apiUrl + "workflow/blocks/values/" + "8fa4b390-792e-4214-89c0-ae07070c9f4b";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-after-time-input')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    localStorage.setItem(element.className, element.value);
    url = apiUrl + "workflow/blocks/values/" + "f094b2ce-b0d5-4aea-945b-c65c4f34401b";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-after-offset-input')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    localStorage.setItem(element.className, element.value);
    url = apiUrl + "workflow/blocks/values/" + "18182e80-3d85-4982-9a52-1a668fdf9f49";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }

  if (element.classList.contains('monday-after-scene-select')) {
    const valueBlockData = {};
    valueBlockData.inPortValue = element.value;
    localStorage.setItem(element.className, element.value);
    url = apiUrl + "workflow/blocks/values/" + "51835919-10e4-4977-ba63-35f61b7df13e";
    putData(url, valueBlockData).catch(error => alert("An error occurred: Message = " + error.message));
  }
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
        return block.displayName === 'Monday_beforeTime';
      });
      const mondayBeforeOffsetBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Monday_beforeOffset';
      });
      const mondayBeforeSceneBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Monday_beforeScene';
      });
      const mondayMorningTimeBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Monday_morningTime';
      });
      const mondayMorningOffsetBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Monday_morningOffset';
      });
      const mondayMorningSceneBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Monday_morningScene';
      });
      const mondayEveningTimeBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Monday_eveningTime';
      });
      const mondayEveningOffsetBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Monday_eveningOffset';
      });
      const mondayEveningSceneBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Monday_eveningScene';
      });
      const mondayAfterTimeBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Monday_afterTime';
      });
      const mondayAfterOffsetBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Monday_afterOffset';
      });
      const mondayAfterSceneBlock = mondayBlocks.find((block) => {
        return block.displayName === 'Monday_afterScene';
      });

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
      mondayAfterSceneSelect.value = mondayAfterSceneBlock.outPortValue;
    })
    .catch(error => alert("An error occurred: Message = " + error.message));
}

const buttonGetMonday = document.querySelector('.button-get-monday');
buttonGetMonday.addEventListener('click', () => {
  
  getMondayBlocks();
})