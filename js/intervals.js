const setElmInterval = (elm, elm_num, speed) => {
  return setInterval(() => {
    let curr_pos;
    let new_pos;
    switch (elm_num) {
      case 0:
        curr_pos = parseInt(elm.style.left);
        new_pos = clacPos(curr_pos, STATE.max_left, elm);
        updateElmPos(elm, 0, new_pos);
        break;
      case 1:
        curr_pos = parseInt(elm.style.top);
        new_pos = clacPos(curr_pos, STATE.max_top, elm);
        updateElmPos(elm, new_pos, STATE.max_left);
        break;
      case 2:
        curr_pos = parseInt(elm.style.left);
        new_pos = clacPos(curr_pos, STATE.max_left, elm);
        updateElmPos(elm, STATE.max_top, new_pos);
        break;
      case 3:
        curr_pos = parseInt(elm.style.top);
        new_pos = clacPos(curr_pos, STATE.max_top, elm);
        updateElmPos(elm, new_pos, 0);
        break;
      default:
        break;
    }
  }, speed);
};

const collision = () => {
  setInterval(() => {
    let circle1 = document.querySelector("#circle1");
    let circle2 = document.querySelector("#circle2");
    let circle3 = document.querySelector("#circle3");
    let circle4 = document.querySelector("#circle4");

    if (
      circle1 &&
      circle2 &&
      parseInt(circle1.style.left) > STATE.max_left - 90 &&
      parseInt(circle2.style.top) < 90
    ) {
      const arr = [circle1, circle2];
      const rand = arr[randomInt(arr.length)];
      rand.remove();
      STATE.circle_num--;
    }
    if (
      circle2 &&
      circle3 &&
      parseInt(circle2.style.top) > STATE.max_top - 90 &&
      parseInt(circle3.style.left) > STATE.max_left - 90
    ) {
      const arr = [circle2, circle3];
      const rand = arr[randomInt(arr.length)];
      rand.remove();
      STATE.circle_num--;
    }
    if (
      circle3 &&
      circle4 &&
      parseInt(circle3.style.left) < 90 &&
      parseInt(circle4.style.top) > STATE.max_top - 90
    ) {
      const arr = [circle3, circle4];
      const rand = arr[randomInt(arr.length)];
      rand.remove();
      STATE.circle_num--;
    }
    if (
      circle4 &&
      circle1 &&
      parseInt(circle4.style.top) < 90 &&
      parseInt(circle1.style.left) < 90
    ) {
      const arr = [circle4, circle1];
      const rand = arr[randomInt(arr.length)];
      rand.remove();
      STATE.circle_num--;
    }
  }, 1);
};

const stopOneCircle = () => {
  STATE.play_intervals.push(
    setInterval(() => {
      if (STATE.circle_num === 1) {
        STATE.timer.textContent = 0;
        stop();
        stopDisable();
        gameOverMsg();
      }
    }, 1)
  );
};
