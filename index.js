const codeArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const keyArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
const div = document.createElement('div');
const textarea = document.createElement('textarea');
textarea.className = 'textarea';
document.body.append(textarea);
div.className = 'keyboard';
document.body.append(div);
function setFocus() {
  document.querySelector('.textarea').focus();
}
document.body.addEventListener('onload', setFocus());
function init() {
  let out = '';
  for (let i = 0; i < keyArr.length; i += 1) {
    if ((keyArr[i] === 'q') || (keyArr[i] === 'w') || (keyArr[i] === 'e') || (keyArr[i] === 'r') || (keyArr[i] === 't')
    || (keyArr[i] === 'y') || (keyArr[i] === 'u') || (keyArr[i] === 'i') || (keyArr[i] === 'o') || (keyArr[i] === 'p')
    || (keyArr[i] === 'a') || (keyArr[i] === 's') || (keyArr[i] === 'd') || (keyArr[i] === 'f') || (keyArr[i] === 'g')
    || (keyArr[i] === 'h') || (keyArr[i] === 'j') || (keyArr[i] === 'k') || (keyArr[i] === 'l') || (keyArr[i] === 'z')
    || (keyArr[i] === 'x') || (keyArr[i] === 'c') || (keyArr[i] === 'v') || (keyArr[i] === 'b') || (keyArr[i] === 'n') || (keyArr[i] === 'm')) {
      out += `<div class = "k-key-alphabet" id = '${keyArr[i]}' data = '${codeArr[i]}'>${keyArr[i]}</div>`;
      document.querySelector('.keyboard').innerHTML = out;
    } else {
      out += `<div class = "k-key" id = '${keyArr[i]}' data = '${codeArr[i]}'>${keyArr[i]}</div>`;
      document.querySelector('.keyboard').innerHTML = out;
    }
  }
}

init();

// caps
const alphabet = document.querySelectorAll('.k-key-alphabet');

let checkCaps = false;
const caps = function () {
  if (checkCaps === false) {
    for (let i = 0; i < alphabet.length; i += 1) {
      let getAlpha = alphabet[i].textContent;
      const up = getAlpha.toUpperCase();
      alphabet[i].textContent = up;
    }
    checkCaps = true;
  } else {
    for (let i = 0; i < alphabet.length; i += 1) {
      let getAlpha = alphabet[i].textContent;
      const low = getAlpha.toLowerCase();
      alphabet[i].textContent = low;
    }
    checkCaps = false;
  }
};

document.onkeydown = function (event) {
  document.querySelector(`.k-key[data="${event.code}"]`).classList.add('active');
  if (event.code === 'CapsLock') {
    caps();
  }
};

document.onkeyup = function (event) {
  document.querySelector(`.k-key[data="${event.code}"]`).classList.remove('active');
};

document.querySelectorAll('.k-key').forEach((el) => {
  el.addEventListener('mousedown', () => {
    el.classList.add('active');
  });
});

document.querySelectorAll('.k-key').forEach((el) => {
  el.addEventListener('mouseup', () => {
    el.classList.remove('active', 200);
  });
});
