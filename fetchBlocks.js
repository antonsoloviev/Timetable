const weekEng = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function getAllValueBlocks() {

  url = apiUrl + "workflow/blocks/values";
  getData(url)
    .then(response => {
      console.log(response);
      return response;
    })
      .then(response => {
        store.blockNotes = response;
      })
    .catch(error => alert("An error occurred: Message = " + error.message));
}

async function getValueBlocks() {

  url = apiUrl + "workflow/blocks/values";
  response = await getData(url);
  store.blockNotes = response;
  return response;
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

function getDayBlocks(day) {
  const dayBlocks = store.blockNotes.filter((item) => {
    return item.displayName.startsWith(day);
  });
  return dayBlocks;
}

function blocksToStorebyDay(day) {
  const dayNumber = weekEng.indexOf(day);
  const dayBlocks = getDayBlocks(day);
  dayBlocks.forEach((block) => {
    const name = block.displayName.replace(`${day}_`, '');
    const id = `${name}-id`;
    store.weekNotes[dayNumber][name] = block.outPortValue;
    store.weekNotes[dayNumber][id] = block.id;
  })
}

function saveBlocksToStore() {
  weekEng.forEach((day) => {
    blocksToStorebyDay(day);
  })
}