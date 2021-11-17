const g_state = {
  circle1: {},
  circle2: {},
  circle3: {},
  circle4: {},
  circle_num: 4,
  timer: {},
  max_top: 0,
  max_left: 0,
  play_intervals: [],
};

const initCirclesPos = () => {
  const circle_size = 105;
  const border_size = 10;
  const boxSize = document.querySelector("#box").getBoundingClientRect();
  const max_top = boxSize.height - border_size - circle_size;
  const max_left = boxSize.width - border_size - circle_size;

  g_state.max_top = max_top;
  g_state.max_left = max_left;

  updateElmPos(g_state.circle1, 0, randomInt(max_left));
  updateElmPos(g_state.circle2, randomInt(max_top), max_left);
  updateElmPos(g_state.circle3, max_top, randomInt(max_left));
  updateElmPos(g_state.circle4, randomInt(max_top), 0);

  updateElmColor(g_state.circle1);
  updateElmColor(g_state.circle2);
  updateElmColor(g_state.circle3);
  updateElmColor(g_state.circle4);

  updateElmDirection(g_state.circle1);
  updateElmDirection(g_state.circle2);
  updateElmDirection(g_state.circle3);
  updateElmDirection(g_state.circle4);
};

const addPlayEventListeners = (play_btn) => {
  play_btn.addEventListener("click", play);
  play_btn.addEventListener("click", stopEnable);
  play_btn.addEventListener("click", startTimer);
  play_btn.addEventListener("click", playDisable);
  play_btn.addEventListener("click", inputDisable);
  play_btn.addEventListener("click", collision);
  play_btn.addEventListener("click", stopOneCircle);
};

const addStopEventListeners = (stop_btn) => {
  stop_btn.addEventListener("click", stop);
  stop_btn.addEventListener("click", playEnable);
  stop_btn.addEventListener("click", inputEnable);
  stop_btn.addEventListener("click", stopTimer);
  stop_btn.addEventListener("click", stopDisable);
};

const addResetEventListeners = (reset_btn) => {
  reset_btn.addEventListener("click", reset);
  reset_btn.addEventListener("click", stop);
  reset_btn.addEventListener("click", resetTimer);
  reset_btn.addEventListener("click", createElms);
  reset_btn.addEventListener("click", initCirclesPos);
  reset_btn.addEventListener("click", playEnable);
  reset_btn.addEventListener("click", stopDisable);
  reset_btn.addEventListener("click", inputEnable);
};

const init = () => {
  g_state.circle1 = document.querySelector("#circle1");
  g_state.circle2 = document.querySelector("#circle2");
  g_state.circle3 = document.querySelector("#circle3");
  g_state.circle4 = document.querySelector("#circle4");
  g_state.timer = document.querySelector("#timer");

  const play_btn = document.querySelector("#play");
  const stop_btn = document.querySelector("#stop");
  const reset_btn = document.querySelector("#reset");
  const t_input = document.querySelector("#input");

  initCirclesPos();
  stopDisable();

  addPlayEventListeners(play_btn);
  addStopEventListeners(stop_btn);
  addResetEventListeners(reset_btn);

  t_input.addEventListener("input", changeTime);
};

window.addEventListener("load", init);
window.addEventListener("beforeunload", beforeUnload);
