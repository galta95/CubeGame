const play = () => {
  const circles = [
    g_state.circle1,
    g_state.circle2,
    g_state.circle3,
    g_state.circle4,
  ];
  circles.forEach((circle, idx) => {
    g_state.play_intervals.push(setElmInterval(circle, idx, randomInt(10)));
  });
};

const stop = () => {
  g_state.play_intervals.forEach((inter) => {
    clearInterval(inter);
  });
};

const reset = () => {
  g_state.circle_num = 4;
  stop();
  initCirclesPos();
};

const startTimer = () => {
  g_state.timer.textContent
    ? g_state.play_intervals.push(
        setInterval(() => {
          const timer = parseInt(g_state.timer.textContent);
          g_state.timer.textContent = timer - 1;
          if (parseInt(g_state.timer.textContent) == 0) {
            stop();
            stopTimer();
            playEnable();
            gameOverMsg();
          }
        }, 1000)
      )
    : undefined;
};

const stopTimer = () => {
  inputEnable();
  stopDisable();
};

const resetTimer = () => {
  g_state.timer.textContent = undefined;
};

const changeTime = (e) => {
  const boxWidth = document.querySelector("#box").getBoundingClientRect().width;
  const timerWidth = g_state.timer.getBoundingClientRect().width;

  g_state.timer.style.left = boxWidth / 2 - timerWidth / 2 + "px";
  g_state.timer.textContent = e.target.value;
};

const gameOverMsg = () => {
  if (parseInt(g_state.timer.textContent) === 0 || !g_state.timer.textContent) {
    const msg = "GAME OVER";
    g_state.timer.textContent = msg;

    const boxWidth = document
      .querySelector("#box")
      .getBoundingClientRect().width;
    const msgWidth = g_state.timer.getBoundingClientRect().width;

    g_state.timer.style.left = boxWidth / 2 - msgWidth / 2 + "px";
  }
};

const removeMsg = () => {
  g_state.timer.textContent = undefined;
};

const beforeUnload = (e) => {
  e.preventDefault();
  const confirmationMessage = "Changes you made may not be saved.";
  e.returnValue = confirmationMessage;
};
