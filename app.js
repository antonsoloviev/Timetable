// import './modules/store.js';
// import './utils.js';
// import './dev-api.js';
// import './renderMonday.js';
// import {renderWeek} from './renderWeek';

window.addEventListener('load', async (event) => {

  await authorizeAutomatic();
  await getValueBlocks();
  saveBlocksToStore();
  renderWeek(window.store.weekNotes);

});



