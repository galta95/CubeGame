const STATE = {
  circle1: {},
  circle2: {},
  circle3: {},
  circle4: {},
  circles: [],
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

  STATE.max_top = max_top;
  STATE.max_left = max_left;

  updateElmPos(STATE.circle1, 0, randomInt(max_left));
  updateElmPos(STATE.circle2, randomInt(max_top), max_left);
  updateElmPos(STATE.circle3, max_top, randomInt(max_left));
  updateElmPos(STATE.circle4, randomInt(max_top), 0);

  STATE.circles.forEach((circle) => {
    updateElmColor(circle);
    updateElmDirection(circle);
  });
};

const addPlayEventListeners = (play_btn) => {
  play_btn.addEventListener(CLICK, play);
  play_btn.addEventListener(CLICK, stopEnable);
  play_btn.addEventListener(CLICK, startTimer);
  play_btn.addEventListener(CLICK, playDisable);
  play_btn.addEventListener(CLICK, inputDisable);
  play_btn.addEventListener(CLICK, collision);
  play_btn.addEventListener(CLICK, stopOneCircle);
};

const addStopEventListeners = (stop_btn) => {
  stop_btn.addEventListener(CLICK, stop);
  stop_btn.addEventListener(CLICK, playEnable);
  stop_btn.addEventListener(CLICK, inputEnable);
  stop_btn.addEventListener(CLICK, stopTimer);
  stop_btn.addEventListener(CLICK, stopDisable);
};

const addResetEventListeners = (reset_btn) => {
  reset_btn.addEventListener(CLICK, reset);
  reset_btn.addEventListener(CLICK, stop);
  reset_btn.addEventListener(CLICK, resetTimer);
  reset_btn.addEventListener(CLICK, createElms);
  reset_btn.addEventListener(CLICK, initCirclesPos);
  reset_btn.addEventListener(CLICK, playEnable);
  reset_btn.addEventListener(CLICK, stopDisable);
  reset_btn.addEventListener(CLICK, inputEnable);
};

const init = () => {
  STATE.circle1 = document.querySelector("#circle1");
  STATE.circle2 = document.querySelector("#circle2");
  STATE.circle3 = document.querySelector("#circle3");
  STATE.circle4 = document.querySelector("#circle4");
  STATE.timer = document.querySelector("#timer");

  STATE.circles = [STATE.circle1, STATE.circle2, STATE.circle3, STATE.circle4];

  const play_btn = document.querySelector(PLAYBTNID);
  const stop_btn = document.querySelector(STOPBTNID);
  const reset_btn = document.querySelector(RESETBTNID);
  const t_input = document.querySelector(INPUTBTNID);

  initCirclesPos();
  stopDisable();

  addPlayEventListeners(play_btn);
  addStopEventListeners(stop_btn);
  addResetEventListeners(reset_btn);

  t_input.addEventListener("input", changeTime);
};

window.addEventListener("load", init);
window.addEventListener("beforeunload", beforeUnload);
