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
const keyArrRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
const div = document.createElement('div');
const textarea = document.createElement('textarea');
const header = document.createElement('p');
const descr = document.createElement('span');
let lang = 'en';
let checkCaps = false;

function setLocalStorage() {
  localStorage.setItem('lang', lang.value);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang.value = localStorage.getItem('lang');
  }
}

window.addEventListener('load', getLocalStorage);

header.className = 'task-name';
document.body.append(header);
header.innerText = 'virtual-keyboard';

descr.className = 'descr';
document.body.append(descr);
descr.innerText = 'Keyboard for Windows. For change language use ShiftLeft + AltLeft';

textarea.className = 'textarea';
document.body.append(textarea);
div.className = 'keyboard';

document.body.append(div);
function setFocus() {
  document.querySelector('.textarea').focus();
}
document.body.addEventListener('onload', setFocus());

function init() {
  if (lang === 'en') {
    let out = '';
    for (let i = 0; i < keyArr.length; i += 1) {
      if ((keyArr[i] === 'q') || (keyArr[i] === 'w') || (keyArr[i] === 'e') || (keyArr[i] === 'r') || (keyArr[i] === 't')
        || (keyArr[i] === 'y') || (keyArr[i] === 'u') || (keyArr[i] === 'i') || (keyArr[i] === 'o') || (keyArr[i] === 'p')
        || (keyArr[i] === 'a') || (keyArr[i] === 's') || (keyArr[i] === 'd') || (keyArr[i] === 'f') || (keyArr[i] === 'g')
        || (keyArr[i] === 'h') || (keyArr[i] === 'j') || (keyArr[i] === 'k') || (keyArr[i] === 'l') || (keyArr[i] === 'z')
        || (keyArr[i] === 'x') || (keyArr[i] === 'c') || (keyArr[i] === 'v') || (keyArr[i] === 'b') || (keyArr[i] === 'n') || (keyArr[i] === 'm')) {
        out += `<div class = "k-key alphabet" id = '${keyArr[i]}' data = '${codeArr[i]}'>${keyArr[i]}</div>`;
        document.querySelector('.keyboard').innerHTML = out;
      } else {
        out += `<div class = "k-key" id = '${keyArr[i]}' data = '${codeArr[i]}'>${keyArr[i]}</div>`;
        document.querySelector('.keyboard').innerHTML = out;
      }
    }
  } else {
    let out = '';
    for (let i = 0; i < keyArrRu.length; i += 1) {
      if ((keyArrRu[i] === 'ё') || (keyArrRu[i] === 'й') || (keyArrRu[i] === 'ц') || (keyArrRu[i] === 'у') || (keyArrRu[i] === 'к')
        || (keyArrRu[i] === 'е') || (keyArrRu[i] === 'н') || (keyArrRu[i] === 'г') || (keyArrRu[i] === 'ш') || (keyArrRu[i] === 'щ')
        || (keyArrRu[i] === 'з') || (keyArrRu[i] === 'х') || (keyArrRu[i] === 'ъ') || (keyArrRu[i] === 'ф') || (keyArrRu[i] === 'ы')
        || (keyArrRu[i] === 'в') || (keyArrRu[i] === 'а') || (keyArrRu[i] === 'п') || (keyArrRu[i] === 'р') || (keyArrRu[i] === 'о')
        || (keyArrRu[i] === 'л') || (keyArrRu[i] === 'д') || (keyArrRu[i] === 'ж') || (keyArrRu[i] === 'э') || (keyArrRu[i] === 'я')
        || (keyArrRu[i] === 'ч') || (keyArrRu[i] === 'с') || (keyArrRu[i] === 'м') || (keyArrRu[i] === 'и') || (keyArrRu[i] === 'т')
        || (keyArrRu[i] === 'ь') || (keyArrRu[i] === 'б') || (keyArrRu[i] === 'ю')) {
        out += `<div class = "k-key alphabet" id = '${keyArrRu[i]}' data = '${codeArr[i]}'>${keyArrRu[i]}</div>`;
        document.querySelector('.keyboard').innerHTML = out;
      } else {
        out += `<div class = "k-key" id = '${keyArrRu[i]}' data = '${codeArr[i]}'>${keyArrRu[i]}</div>`;
        document.querySelector('.keyboard').innerHTML = out;
      }
    }
  }
}

init();

const caps = function () {
  const alphabet = document.querySelectorAll('.alphabet');
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
  if (event.code === 'ShiftLeft') {
    document.onkeyup = function (ev) {
      if (ev.code === 'AltLeft') {
        if (lang === 'en') lang = 'ru';
        else lang = 'en';
      }
      init();
    };
  }
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
    el.classList.remove('active');
  });
});
