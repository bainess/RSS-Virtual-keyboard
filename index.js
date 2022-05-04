"use strict";

const divMainFrame = document.createElement('div');
divMainFrame.className = 'main-frame';
document.body.append(divMainFrame);

function createKeys (keyNum) {
    const keysArr = [];
    for (let i = 0; i < keyNum; i++) {
        let key = document.createElement('div');
        key.className = 'keys';
        divMainFrame.append(key);
        keysArr.push(key);
    }
    return keysArr;
}
const keysArr = createKeys(64);

const keysValues = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Delete', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", "&#92", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/',  '⇧','Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '⇦', '⇩', '⇨', 'Ctrl'];
function nameKeys () {
    for (let i = 0; i < keysArr.length; i++) {
        let keyVal = keysValues[i];
        let key = keysArr[i];
        key.innerHTML = keyVal;
    }
    
}
nameKeys();


