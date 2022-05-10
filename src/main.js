/* global document window localStorage */
const divMain = document.createElement('div');
divMain.className = 'main-wrapper';
document.body.append(divMain);

const divMainFrame = document.createElement('div');
divMainFrame.className = 'main-frame';
divMain.append(divMainFrame);

const divInputArea = document.createElement('textarea');
divInputArea.type = 'text';
divInputArea.className = 'input-area';
divMain.prepend(divInputArea);

const divLangSwitchHint = document.createElement('div');
divLangSwitchHint.className = 'language-switcher-hint';
divMain.append(divLangSwitchHint);
divLangSwitchHint.innerHTML = 'To Switch Languages use SHIFT+ALT';
divLangSwitchHint.style = 'font-size:25px';

function createKeys(keyNum) {
  const keysArr = [];
  for (let i = 0; i < keyNum; i += 1) {
    const key = document.createElement('div');
    key.className = 'keys';
    divMainFrame.append(key);
    keysArr.push(key);
  }
  return keysArr;
}
const keysArr = createKeys(64);

const keysValues = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 
'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Delete', 
'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '&#92', 'Enter', 
'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '⇧', 'Shift', 
'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '⇦', '⇩', '⇨', 'Ctrl'];
function nameKeysEn() {
  for (let i = 0; i < keysArr.length; i += 1) {
    const keyVal = keysValues[i];
    const key = keysArr[i];
    key.innerHTML = keyVal;
  }
}

// controls name
const spaceKey = keysArr[58];
const leftShift = keysArr[42];
leftShift.classList.add('keys', 'leftShift');
const rightShift = keysArr[54];
rightShift.classList.add('keys', 'rightShift');
const leftCtrl = keysArr[55];
leftCtrl.classList.add('rightCtrl');
const rightCtrl = keysArr[63];
rightCtrl.classList.add('leftCtrl');
const winKey = keysArr[56];
winKey.classList.add('winKey');
const leftAlt = keysArr[57];
winKey.classList.add('leftAlt');
const rightAlt = keysArr[59];
rightAlt.classList.add('rightAlt');
const capsLock = keysArr[28];
capsLock.classList.add('capsLock');
const arrowUp = keysArr[53];
arrowUp.classList.add('arrowUp');
const arrowDown = keysArr[61];
arrowDown.classList.add('arrowDown');
const arrowLeft = keysArr[60];
arrowLeft.classList.add('arrowLeft');
const arrowRight = keysArr[62];
arrowRight.classList.add('arrowRight');

for (let i = 0; i < keysArr.length; i += 1) {
  keysArr[i].setAttribute('keyname', keysArr[i].innerText);
  keysArr[i].setAttribute('lowerCaseKeyName', keysArr[i].innerText.toLowerCase());
}

// global window
window.addEventListener('keydown', function keysFunctions(e) {
  if (e.key === 'CapsLock') {
    capsLock.classList.toggle('active');
    return;
  }
  if (e.code === 'Space') {
    spaceKey.classList.add('active');
    return;
  }
  if (e.code === 'ControlLeft') {
    leftCtrl.classList.add('active');
    return;
  }
  if (e.code === 'ControlRight') {
    rightCtrl.classList.add('active');
    return;
  }
  if (e.code === 'AltLeft') {
    leftAlt.classList.add('active');
    return;
  }
  if (e.code === 'AltRight') {
    rightAlt.classList.add('active');
    return;
  }
  if (e.code === 'ArrowDown') {
    arrowDown.classList.add('active');
    return;
  }
  if (e.code === 'ArrowLeft') {
    arrowLeft.classList.add('active');
    return;
  }
  if (e.code === 'ArrowRight') {
    arrowRight.classList.add('active');
    return;
  }
  if (e.code === 'ArrowUp') {
    arrowUp.classList.add('active');
    return;
  }
  if (e.code === 'MetaLeft') {
    winKey.classList.add('active');
    this.setTimeout(() => {
      winKey.classList.remove('active');
    }, 200);
    return;
  }
  for (let i = 0; i < keysArr.length; i += 1) {
    if (e.key === keysArr[i].getAttribute('keyname') || e.key === keysArr[i].getAttribute('lowerCaseKeyName')) {
      if (e.code === 'ShiftLeft') {
        leftShift.classList.add('active');
        return;
      }
      if (e.code === 'ShiftRight') {
        rightShift.classList.add('active');
        return;
      }
      keysArr[i].classList.add('active');
    }
  }
});

window.addEventListener('keyup', (e) => {
  if (e.code === 'ControlLeft') {
    leftCtrl.classList.remove('active');
    return;
  }
  if (e.code === 'ControlRight') {
    rightCtrl.classList.remove('active');
    return;
  }
  if (e.code === 'ArrowDown') {
    arrowDown.classList.remove('active');
    return;
  } if (e.code === 'ArrowLeft') {
    arrowLeft.classList.remove('active');
    return;
  } if (e.code === 'ArrowRight') {
    arrowRight.classList.remove('active');
    return;
  } if (e.code === 'ArrowUp') {
    arrowUp.classList.remove('active');
    return;
  }
  if (e.code === 'ArrowUp') {
    arrowUp.classList.remove('active');
    return;
  }
  for (let i = 0; i < keysArr.length; i += 1) {
    if (e.key === keysArr[i].getAttribute('keyname') || e.key === keysArr[i].getAttribute('lowerCaseKeyName')) keysArr[i].classList.remove('active');
  }
  if (e.code === 'Space') {
    spaceKey.classList.remove('active');
  }
});

const keysValuesRus = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Delete',
  'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '&#92', 'Enter', 
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '⇧', 'Shift', 
  'Ctrl', 'Alt', 'Win', 'Space', 'Alt', '⇦', '⇩', '⇨', 'Ctrl'];
function nameKeysRus() {
  for (let i = 0; i < keysArr.length; i += 1) {
    const keyVal = keysValuesRus[i];
    const key = keysArr[i];
    key.innerHTML = keyVal;
  }
}

// // init keyboard
if (!localStorage.getItem('currentLang')) localStorage.setItem('currentLang', 'en');

// function switchLanguage ()
// switchLanguage();

// switch lang
function switchLanguage(init) {
  const a = localStorage.getItem('currentLang');
  if (init) {
    if (a === 'ru') {
      nameKeysRus();
    } else {
      nameKeysEn();
    }
  } else if (a === 'en') {
    nameKeysRus();
    localStorage.setItem('currentLang', 'ru');
  } else {
    nameKeysEn();
    localStorage.setItem('currentLang', 'en');
  }
}

window.addEventListener('keydown', (e) => {
  if (e.getModifierState('Shift') && e.getModifierState('Alt')) {
    switchLanguage(false);
  }
});

switchLanguage(true);
// window.addEventListener('keydown', function (e){
//   if (e.getModifierState('Shift') && e.getModifierState('Control')) nameKeys();

// })
