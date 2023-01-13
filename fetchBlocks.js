const weekEng = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

async function getValueBlocks() {

  url = apiUrl + "workflow/blocks/values";
  response = await getData(url);
  store.blockNotes = response;
  return response;

  // url = apiUrl + "workflow/blocks/values";
  // getData(url)
  //   .then(response => {
  //     console.log(response);
  //     return response;
  //   })
  //     .then(response => {
  //       store.blockNotes = response;
  //     })
  //   .catch(error => alert("An error occurred: Message = " + error.message));
}

function getColorBlocks() {
  const colorBlocks = store.blockNotes.filter((item) => {
    return item.displayName.startsWith("South_custom") || item.displayName.startsWith("North_custom");
  });
  // store.colorBlocks = colorBlocks;
  return colorBlocks;
}

function getSouthDayBlocks(day) {
  const southDayBlocks = store.blockNotes.filter((item) => {
    return item.displayName.startsWith(`S_${day}`);
  });
  return southDayBlocks;
}

function getNorthDayBlocks(day) {
  const northDayBlocks = store.blockNotes.filter((item) => {
    return item.displayName.startsWith(`N_${day}`);
  });
  return northDayBlocks;
}

function colorBlockstoStore() {
  store.colorNotes = [];
  const colorBlocks = getColorBlocks();
  colorBlocks.forEach((block, index) => {
    const name = block.displayName;
    const id = `${name}-id`;
    const colorObj = {};
    colorObj[name] = block.outPortValue;
    colorObj[id] = block.id;
    store.colorNotes.push(colorObj)
  })
}

function southBlocksToStorebyDay(day) {
  const dayNumber = weekEng.indexOf(day);
  const southDayBlocks = getSouthDayBlocks(day);
  southDayBlocks.forEach((block) => {
    const name = block.displayName.replace(`S_${day}_`, '');
    const id = `${name}-id`;
    store.southWeekNotes[dayNumber][name] = block.outPortValue;
    store.southWeekNotes[dayNumber][id] = block.id;
  })
}

function northBlocksToStorebyDay(day) {
  const dayNumber = weekEng.indexOf(day);
  const northDayBlocks = getNorthDayBlocks(day);
  northDayBlocks.forEach((block) => {
    const name = block.displayName.replace(`N_${day}_`, '');
    const id = `${name}-id`;
    store.northWeekNotes[dayNumber][name] = block.outPortValue;
    store.northWeekNotes[dayNumber][id] = block.id;
  })
}

function saveBlocksToStore() {
  colorBlockstoStore();
  weekEng.forEach((day) => {
    southBlocksToStorebyDay(day);
    northBlocksToStorebyDay(day);
  })
}

