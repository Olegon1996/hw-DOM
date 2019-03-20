let buttonA = document.getElementById('button_a');
let buttonS = document.getElementById('button_s');
let buttonD = document.getElementById('button_d');
let buttonF = document.getElementById('button_f');
let buttonG = document.getElementById('button_g');
let buttonH = document.getElementById('button_h');
let buttonJ = document.getElementById('button_j');
let buttonK = document.getElementById('button_k');

// Елементи нижче, ті що викликаються при кліку
// мишки, чомусь не міг зробити через свіч кейс(
function colorBrown(){
    document.getElementById('audio_a').play();
}
function colorRed(){
    document.getElementById('audio_s').play();
}
function colorGray(){
    document.getElementById('audio_d').play();
}
function colorYellow(){
    document.getElementById('audio_f').play();
}
function colorGreen(){
    document.getElementById('audio_g').play();
}
function colorPurple(){
    document.getElementById('audio_h').play();
}
function colorOrange(){
    document.getElementById('audio_j').play();
}
function colorBlue(){
    document.getElementById('audio_k').play();
}

buttonA.addEventListener('click', colorBrown);
buttonS.addEventListener('click', colorRed);
buttonD.addEventListener('click', colorGray);
buttonF.addEventListener('click', colorYellow);
buttonG.addEventListener('click', colorGreen);
buttonH.addEventListener('click', colorPurple);
buttonJ.addEventListener('click', colorOrange);
buttonK.addEventListener('click', colorBlue);

document.addEventListener('keydown', function(eventPress) {
    switch (eventPress.keyCode) {
        case 65:
            document.getElementById('audio_a').play();
            break;
        case 83:
            document.getElementById('audio_s').play();
            break;
        case 68:
            document.getElementById('audio_d').play();
            break;
        case 70:
            document.getElementById('audio_f').play();
            break;
        case 71:
            document.getElementById('audio_g').play();
            break;
        case 72:
            document.getElementById('audio_h').play();
            break;
        case 74:
            document.getElementById('audio_j').play();
            break;
        case 75:
            document.getElementById('audio_k').play();
            break;
    }
});

// buttonA.addEventListener('click', function (eventClick) {
//     switch (eventClick.click) {
//         case ("button_a"):
//             document.getElementById('audio_a').play();
//             break;
//         case buttonS:
//             document.getElementById('audio_s').play();
//             break;
//         case buttonD:
//             document.getElementById('audio_d').play();
//             break;
//         case buttonF:
//             document.getElementById('audio_f').play();
//             break;
//         case buttonG:
//             document.getElementById('audio_g').play();
//             break;
//         case buttonH:
//             document.getElementById('audio_h').play();
//             break;
//         case buttonJ:
//             document.getElementById('audio_j').play();
//             break;
//         case buttonK:
//             document.getElementById('audio_k').play();
//             break;
//     }
//     console.log(eventClick);
// });








