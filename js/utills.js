const createElms = () => {
  const rectangle = document.querySelector("#box");
  STATE.circles.forEach((circle) => {
    rectangle.appendChild(circle);
  });
};

const randomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const updateElmPos = (elm, top, left) => {
  elm.style.top = top + "px";
  elm.style.left = left + "px";
};

const updateElmColor = (elm) => {
  const { WHITE, GREY, RED } = COLORS;
  const colors = [WHITE, GREY, RED];
  elm.style.backgroundColor = colors[randomInt(colors.length)];
};

const updateElmDirection = (elm) => {
  const directions = ["r", "l"];
  elm.direction = directions[randomInt(directions.length)];
};

const playDisable = () => {
  const play_btn = document.querySelector(PLAYBTNID);
  play_btn.disabled = true;
};

const playEnable = () => {
  const play_btn = document.querySelector(PLAYBTNID);
  play_btn.disabled = false;
};

const stopDisable = () => {
  const stop_btn = document.querySelector(STOPBTNID);
  stop_btn.disabled = true;
};

const stopEnable = () => {
  const play_btn = document.querySelector(STOPBTNID);
  play_btn.disabled = false;
};

const inputDisable = () => {
  const input = document.querySelector(INPUTBTNID);
  input.disabled = true;
};

const inputEnable = () => {
  const input_btn = document.querySelector(INPUTBTNID);
  input.value = "";
  input_btn.disabled = false;
};

const clacPos = (pos, limit, elm) => {
  elm.direction === "r"
    ? pos >= limit
      ? (elm.direction = "l")
      : (pos += 2)
    : pos <= 0
    ? (elm.direction = "r")
    : (pos -= 2);
  return pos;
};
