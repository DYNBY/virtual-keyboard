const codeArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const keyArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
const div = document.createElement('div');
const textarea = document.createElement('textarea');
document.onkeydown = function (event) {
  console.log(event);
  keyArr.push(event.key);
  console.log(keyArr);
};
textarea.className = 'textarea';
document.body.append(textarea);
div.className = 'keyboard';
document.body.append(div);

function init() {
  let out = '';
  for (let i = 0; i < keyArr.length; i += 1) {
    out += `<div class = "k-key" id = '${keyArr[i]}' data = '${codeArr[i]}'>${keyArr[i]}</div>`;
  }
  document.querySelector('.keyboard').innerHTML = out;
}

init();

document.onkeydown = function (event) {
  document.querySelector('.k-key[data="' + event.code + '"]').classList.add('active');
  textarea.innerHTML += event.key;
};

document.onkeyup = function (event) {
  document.querySelector('.k-key[data="' + event.code + '"]').classList.remove('active');
};
