const createElms = () => {
  const rectangle = document.querySelector("#box");
  rectangle.appendChild(g_state.circle1);
  rectangle.appendChild(g_state.circle2);
  rectangle.appendChild(g_state.circle3);
  rectangle.appendChild(g_state.circle4);
};

const randomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const updateElmPos = (elm, top, left) => {
  elm.style.top = top + "px";
  elm.style.left = left + "px";
};

const updateElmColor = (elm) => {
  const colors = ["white", "red", "grey"];
  elm.style.backgroundColor = colors[randomInt(colors.length)];
};

const updateElmDirection = (elm) => {
  const directions = ["r", "l"];
  elm.direction = directions[randomInt(directions.length)];
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

const playDisable = () => {
  const play_btn = document.querySelector("#play");
  play_btn.disabled = true;
};

const playEnable = () => {
  const play_btn = document.querySelector("#play");
  play_btn.disabled = false;
};

const stopDisable = () => {
  const stop_btn = document.querySelector("#stop");
  stop_btn.disabled = true;
};

const stopEnable = () => {
  const play_btn = document.querySelector("#stop");
  play_btn.disabled = false;
};

const inputDisable = () => {
  const input = document.querySelector("#input");
  input.disabled = true;
};

const inputEnable = () => {
  const input_btn = document.querySelector("#input");
  input.value = "";
  input_btn.disabled = false;
};
