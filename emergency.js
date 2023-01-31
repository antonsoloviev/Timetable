let northShufo_1_controller = document.querySelector('div.north-block-keyplan > .schufo-container-1 > .controller');
let northShufo_1_luminaire = document.querySelector('div.north-block-keyplan > .schufo-container-1 > .luminaire');
let northShufo_2_controller = document.querySelector('div.north-block-keyplan > .schufo-container-2 > .controller');
let northShufo_2_luminaire = document.querySelector('div.north-block-keyplan > .schufo-container-2 > .luminaire');
let northShufo_3_controller = document.querySelector('div.north-block-keyplan > .schufo-container-3 > .controller');
let northShufo_3_luminaire = document.querySelector('div.north-block-keyplan > .schufo-container-3 > .luminaire');
let northShufo_4_controller = document.querySelector('div.north-block-keyplan > .schufo-container-4 > .controller');
let northShufo_4_luminaire = document.querySelector('div.north-block-keyplan > .schufo-container-4 > .luminaire');
let northShufo_5_controller = document.querySelector('div.north-block-keyplan > .schufo-container-5 > .controller');
let northShufo_5_luminaire = document.querySelector('div.north-block-keyplan > .schufo-container-5 > .luminaire');
let northShufo_6_controller = document.querySelector('div.north-block-keyplan > .schufo-container-6 > .controller');
let northShufo_6_luminaire = document.querySelector('div.north-block-keyplan > .schufo-container-6 > .luminaire');
let northShufo_7_controller = document.querySelector('div.north-block-keyplan > .schufo-container-7 > .controller');
let northShufo_7_luminaire = document.querySelector('div.north-block-keyplan > .schufo-container-7 > .luminaire');

let southShufo_1_controller = document.querySelector('div.south-block-keyplan > .schufo-container-1 > .controller');
let southShufo_1_luminaire = document.querySelector('div.south-block-keyplan > .schufo-container-1 > .luminaire');
let southShufo_2_controller = document.querySelector('div.south-block-keyplan > .schufo-container-2 > .controller');
let southShufo_2_luminaire = document.querySelector('div.south-block-keyplan > .schufo-container-2 > .luminaire');
let southShufo_3_controller = document.querySelector('div.south-block-keyplan > .schufo-container-3 > .controller');
let southShufo_3_luminaire = document.querySelector('div.south-block-keyplan > .schufo-container-3 > .luminaire');
let southShufo_4_controller = document.querySelector('div.south-block-keyplan > .schufo-container-4 > .controller');
let southShufo_4_luminaire = document.querySelector('div.south-block-keyplan > .schufo-container-4 > .luminaire');
let southShufo_5_controller = document.querySelector('div.south-block-keyplan > .schufo-container-5 > .controller');
let southShufo_5_luminaire = document.querySelector('div.south-block-keyplan > .schufo-container-5 > .luminaire');

async function fetchEmergencyUpdate() {
  // Alarm_DMX_NB#1
  const block_DMX_NB1 = store.alarmNotes.find((item) => {
    return item.hasOwnProperty('Alarm_DMX_NB#1-id');
  });
  const block_DMX_NB1_id = block_DMX_NB1["Alarm_DMX_NB#1-id"];

  const block_DMX_NB2 = store.alarmNotes.find((item) => {
    return item.hasOwnProperty('Alarm_DMX_NB#2-id');
  });
  const block_DMX_NB2_id = block_DMX_NB2["Alarm_DMX_NB#2-id"];

  const block_DMX_NB3 = store.alarmNotes.find((item) => {
    return item.hasOwnProperty('Alarm_DMX_NB#3-id');
  });
  const block_DMX_NB3_id = block_DMX_NB3["Alarm_DMX_NB#3-id"];

  const block_DMX_NB4 = store.alarmNotes.find((item) => {
    return item.hasOwnProperty('Alarm_DMX_NB#4-id');
  });
  const block_DMX_NB4_id = block_DMX_NB4["Alarm_DMX_NB#4-id"];

  const block_DMX_NB5 = store.alarmNotes.find((item) => {
    return item.hasOwnProperty('Alarm_DMX_NB#5-id');
  });
  const block_DMX_NB5_id = block_DMX_NB5["Alarm_DMX_NB#5-id"];

  const block_DMX_NB6 = store.alarmNotes.find((item) => {
    return item.hasOwnProperty('Alarm_DMX_NB#6-id');
  });
  const block_DMX_NB6_id = block_DMX_NB6["Alarm_DMX_NB#6-id"];

  const block_DMX_NB7 = store.alarmNotes.find((item) => {
    return item.hasOwnProperty('Alarm_DMX_NB#7-id');
  });
  const block_DMX_NB7_id = block_DMX_NB7["Alarm_DMX_NB#7-id"];

  // Alarm_DMX_SB#1
  const block_DMX_SB1 = store.alarmNotes.find((item) => {
    return item.hasOwnProperty('Alarm_DMX_SB#1-id');
  });
  const block_DMX_SB1_id = block_DMX_SB1["Alarm_DMX_SB#1-id"];

  const block_DMX_SB2 = store.alarmNotes.find((item) => {
    return item.hasOwnProperty('Alarm_DMX_SB#2-id');
  });
  const block_DMX_SB2_id = block_DMX_SB2["Alarm_DMX_SB#2-id"];

  const block_DMX_SB3 = store.alarmNotes.find((item) => {
    return item.hasOwnProperty('Alarm_DMX_SB#3-id');
  });
  const block_DMX_SB3_id = block_DMX_SB3["Alarm_DMX_SB#3-id"];

  const block_DMX_SB4 = store.alarmNotes.find((item) => {
    return item.hasOwnProperty('Alarm_DMX_SB#4-id');
  });
  const block_DMX_SB4_id = block_DMX_SB4["Alarm_DMX_SB#4-id"];

  const block_DMX_SB5 = store.alarmNotes.find((item) => {
    return item.hasOwnProperty('Alarm_DMX_SB#5-id');
  });
  const block_DMX_SB5_id = block_DMX_SB5["Alarm_DMX_SB#5-id"];

// Alarm_NB_SHUFO-1
const block_SHUFO_NB1 = store.alarmNotes.find((item) => {
  return item.hasOwnProperty('Alarm_NB_SHUFO-1-id');
});
const block_SHUFO_NB1_id = block_SHUFO_NB1["Alarm_NB_SHUFO-1-id"];

const block_SHUFO_NB2 = store.alarmNotes.find((item) => {
  return item.hasOwnProperty('Alarm_NB_SHUFO-2-id');
});
const block_SHUFO_NB2_id = block_SHUFO_NB2["Alarm_NB_SHUFO-2-id"];

const block_SHUFO_NB3 = store.alarmNotes.find((item) => {
  return item.hasOwnProperty('Alarm_NB_SHUFO-3-id');
});
const block_SHUFO_NB3_id = block_SHUFO_NB3["Alarm_NB_SHUFO-3-id"];

const block_SHUFO_NB4 = store.alarmNotes.find((item) => {
  return item.hasOwnProperty('Alarm_NB_SHUFO-4-id');
});
const block_SHUFO_NB4_id = block_SHUFO_NB4["Alarm_NB_SHUFO-4-id"];

const block_SHUFO_NB5 = store.alarmNotes.find((item) => {
  return item.hasOwnProperty('Alarm_NB_SHUFO-5-id');
});
const block_SHUFO_NB5_id = block_SHUFO_NB5["Alarm_NB_SHUFO-5-id"];

const block_SHUFO_NB6 = store.alarmNotes.find((item) => {
  return item.hasOwnProperty('Alarm_NB_SHUFO-6-id');
});
const block_SHUFO_NB6_id = block_SHUFO_NB6["Alarm_NB_SHUFO-6-id"];

const block_SHUFO_NB7 = store.alarmNotes.find((item) => {
  return item.hasOwnProperty('Alarm_NB_SHUFO-7-id');
});
const block_SHUFO_NB7_id = block_SHUFO_NB7["Alarm_NB_SHUFO-7-id"];

// Alarm_SB_SHUFO-1
const block_SHUFO_SB1 = store.alarmNotes.find((item) => {
  return item.hasOwnProperty('Alarm_SB_SHUFO-1-id');
});
const block_SHUFO_SB1_id = block_SHUFO_SB1["Alarm_SB_SHUFO-1-id"];

const block_SHUFO_SB2 = store.alarmNotes.find((item) => {
  return item.hasOwnProperty('Alarm_SB_SHUFO-2-id');
});
const block_SHUFO_SB2_id = block_SHUFO_SB2["Alarm_SB_SHUFO-2-id"];

const block_SHUFO_SB3 = store.alarmNotes.find((item) => {
  return item.hasOwnProperty('Alarm_SB_SHUFO-3-id');
});
const block_SHUFO_SB3_id = block_SHUFO_SB3["Alarm_SB_SHUFO-3-id"];

const block_SHUFO_SB4 = store.alarmNotes.find((item) => {
  return item.hasOwnProperty('Alarm_SB_SHUFO-4-id');
});
const block_SHUFO_SB4_id = block_SHUFO_SB4["Alarm_SB_SHUFO-4-id"];

const block_SHUFO_SB5 = store.alarmNotes.find((item) => {
  return item.hasOwnProperty('Alarm_SB_SHUFO-5-id');
});
const block_SHUFO_SB5_id = block_SHUFO_SB5["Alarm_SB_SHUFO-5-id"];

  let block_DMX_NB1State = await getValueBlockOutportDataById(block_DMX_NB1_id);
  let block_DMX_NB2State = await getValueBlockOutportDataById(block_DMX_NB2_id);
  let block_DMX_NB3State = await getValueBlockOutportDataById(block_DMX_NB3_id);
  let block_DMX_NB4State = await getValueBlockOutportDataById(block_DMX_NB4_id);
  let block_DMX_NB5State = await getValueBlockOutportDataById(block_DMX_NB5_id);
  let block_DMX_NB6State = await getValueBlockOutportDataById(block_DMX_NB6_id);
  let block_DMX_NB7State = await getValueBlockOutportDataById(block_DMX_NB7_id);

  let block_DMX_SB1State = await getValueBlockOutportDataById(block_DMX_SB1_id);
  let block_DMX_SB2State = await getValueBlockOutportDataById(block_DMX_SB2_id);
  let block_DMX_SB3State = await getValueBlockOutportDataById(block_DMX_SB3_id);
  let block_DMX_SB4State = await getValueBlockOutportDataById(block_DMX_SB4_id);
  let block_DMX_SB5State = await getValueBlockOutportDataById(block_DMX_SB5_id);

  let block_SHUFO_NB1State = await getValueBlockOutportDataById(block_SHUFO_NB1_id);
  let block_SHUFO_NB2State = await getValueBlockOutportDataById(block_SHUFO_NB2_id);
  let block_SHUFO_NB3State = await getValueBlockOutportDataById(block_SHUFO_NB3_id);
  let block_SHUFO_NB4State = await getValueBlockOutportDataById(block_SHUFO_NB4_id);
  let block_SHUFO_NB5State = await getValueBlockOutportDataById(block_SHUFO_NB5_id);
  let block_SHUFO_NB6State = await getValueBlockOutportDataById(block_SHUFO_NB6_id);
  let block_SHUFO_NB7State = await getValueBlockOutportDataById(block_SHUFO_NB7_id);

  let block_SHUFO_SB1State = await getValueBlockOutportDataById(block_SHUFO_SB1_id);
  let block_SHUFO_SB2State = await getValueBlockOutportDataById(block_SHUFO_SB2_id);
  let block_SHUFO_SB3State = await getValueBlockOutportDataById(block_SHUFO_SB3_id);
  let block_SHUFO_SB4State = await getValueBlockOutportDataById(block_SHUFO_SB4_id);
  let block_SHUFO_SB5State = await getValueBlockOutportDataById(block_SHUFO_SB5_id);

  (block_DMX_NB1State === '204;') ? (northShufo_1_controller.classList.add('_bg-red')) : (northShufo_1_controller.classList.remove('_bg-red'));
  (block_DMX_NB2State === '206;') ? (northShufo_2_controller.classList.add('_bg-red')) : (northShufo_2_controller.classList.remove('_bg-red'));
  (block_DMX_NB3State === '208;') ? (northShufo_3_controller.classList.add('_bg-red')) : (northShufo_3_controller.classList.remove('_bg-red'));
  (block_DMX_NB4State === '210;') ? (northShufo_4_controller.classList.add('_bg-red')) : (northShufo_4_controller.classList.remove('_bg-red'));
  (block_DMX_NB5State === '212;') ? (northShufo_5_controller.classList.add('_bg-red')) : (northShufo_5_controller.classList.remove('_bg-red'));
  (block_DMX_NB6State === '214;') ? (northShufo_6_controller.classList.add('_bg-red')) : (northShufo_6_controller.classList.remove('_bg-red'));
  (block_DMX_NB7State === '216;') ? (northShufo_7_controller.classList.add('_bg-red')) : (northShufo_7_controller.classList.remove('_bg-red'));

  (block_DMX_SB1State === '232;') ? (southShufo_1_controller.classList.add('_bg-red')) : (southShufo_1_controller.classList.remove('_bg-red'));
  (block_DMX_SB2State === '234;') ? (southShufo_2_controller.classList.add('_bg-red')) : (southShufo_2_controller.classList.remove('_bg-red'));
  (block_DMX_SB3State === '236;') ? (southShufo_3_controller.classList.add('_bg-red')) : (southShufo_3_controller.classList.remove('_bg-red'));
  (block_DMX_SB4State === '238;') ? (southShufo_4_controller.classList.add('_bg-red')) : (southShufo_4_controller.classList.remove('_bg-red'));
  (block_DMX_SB5State === '240;') ? (southShufo_5_controller.classList.add('_bg-red')) : (southShufo_5_controller.classList.remove('_bg-red'));

  (block_SHUFO_NB1State === '252;') ? (northShufo_1_luminaire.classList.add('_bg-red')) : (northShufo_1_luminaire.classList.remove('_bg-red'));
  (block_SHUFO_NB2State === '254;') ? (northShufo_2_luminaire.classList.add('_bg-red')) : (northShufo_2_luminaire.classList.remove('_bg-red'));
  (block_SHUFO_NB3State === '256;') ? (northShufo_3_luminaire.classList.add('_bg-red')) : (northShufo_3_luminaire.classList.remove('_bg-red'));
  (block_SHUFO_NB4State === '258;') ? (northShufo_4_luminaire.classList.add('_bg-red')) : (northShufo_4_luminaire.classList.remove('_bg-red'));
  (block_SHUFO_NB5State === '260;') ? (northShufo_5_luminaire.classList.add('_bg-red')) : (northShufo_5_luminaire.classList.remove('_bg-red'));
  (block_SHUFO_NB6State === '262;') ? (northShufo_6_luminaire.classList.add('_bg-red')) : (northShufo_6_luminaire.classList.remove('_bg-red'));
  (block_SHUFO_NB7State === '264;') ? (northShufo_7_luminaire.classList.add('_bg-red')) : (northShufo_7_luminaire.classList.remove('_bg-red'));

  (block_SHUFO_SB1State === '266;') ? (southShufo_1_luminaire.classList.add('_bg-red')) : (southShufo_1_luminaire.classList.remove('_bg-red'));
  (block_SHUFO_SB2State === '268;') ? (southShufo_2_luminaire.classList.add('_bg-red')) : (southShufo_2_luminaire.classList.remove('_bg-red'));
  (block_SHUFO_SB3State === '270;') ? (southShufo_3_luminaire.classList.add('_bg-red')) : (southShufo_3_luminaire.classList.remove('_bg-red'));
  (block_SHUFO_SB4State === '272;') ? (southShufo_4_luminaire.classList.add('_bg-red')) : (southShufo_4_luminaire.classList.remove('_bg-red'));
  (block_SHUFO_SB5State === '274;') ? (southShufo_5_luminaire.classList.add('_bg-red')) : (southShufo_5_luminaire.classList.remove('_bg-red'));
  
  console.log('fetchEmergency done');

}

function fetchEmergencyStart() {
  fetchEmergencyId = setInterval(fetchEmergencyUpdate, 5000);

}