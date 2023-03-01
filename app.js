// import './modules/store.js';
// import './utils.js';
// import './dev-api.js';
// import './renderMonday.js';
// import {renderWeek} from './renderWeek';

window.addEventListener('load', async (event) => {
  clockStart();
  await authorizeAutomatic();
  await getValueBlocks();
  saveBlocksToStore();
  renderNorthWeek(window.store.northWeekNotes);
  renderSouthWeek(window.store.southWeekNotes);
  renderLogoWeek(window.store.logoWeekNotes);

  fetchModeStart();
  fetchEmergencyStart();
  pageReloadStart();

});
