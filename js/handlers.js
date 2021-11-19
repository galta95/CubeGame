const play = () => {
  const circles = [
    STATE.circle1,
    STATE.circle2,
    STATE.circle3,
    STATE.circle4,
  ];
  circles.forEach((circle, idx) => {
    STATE.play_intervals.push(setElmInterval(circle, idx, randomInt(10)));
  });
};

const stop = () => {
  STATE.play_intervals.forEach((inter) => {
    clearInterval(inter);
  });
};

const reset = () => {
  STATE.circle_num = 4;
  stop();
  initCirclesPos();
};

const startTimer = () => {
  STATE.timer.textContent
    ? STATE.play_intervals.push(
        setInterval(() => {
          const timer = parseInt(STATE.timer.textContent);
          STATE.timer.textContent = timer - 1;
          if (parseInt(STATE.timer.textContent) == 0) {
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
  STATE.timer.textContent = undefined;
};

const changeTime = (e) => {
  const boxWidth = document.querySelector("#box").getBoundingClientRect().width;
  const timerWidth = STATE.timer.getBoundingClientRect().width;

  STATE.timer.style.left = boxWidth / 2 - timerWidth / 2 + "px";
  STATE.timer.textContent = e.target.value;
};

const gameOverMsg = () => {
  if (parseInt(STATE.timer.textContent) === 0 || !STATE.timer.textContent) {
    const msg = "GAME OVER";
    STATE.timer.textContent = msg;

    const boxWidth = document
      .querySelector("#box")
      .getBoundingClientRect().width;
    const msgWidth = STATE.timer.getBoundingClientRect().width;

    STATE.timer.style.left = boxWidth / 2 - msgWidth / 2 + "px";
  }
};

const removeMsg = () => {
  STATE.timer.textContent = undefined;
};

const beforeUnload = (e) => {
  e.preventDefault();
  const confirmationMessage = "Changes you made may not be saved.";
  e.returnValue = confirmationMessage;
};
