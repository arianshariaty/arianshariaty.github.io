console.log(texts);

let transcripts = document.getElementsByClassName("transcript");

const updateTranscript = (e, i) => {
  currentTime = e.target.currentTime;
  let curText = "";
  if (currentTime > 0.874 && currentTime < 2.928) {
    curText = texts[i][0];
  } else if (currentTime > 3.539 && currentTime < 5.05) {
    curText = texts[i][1];
  } else if (currentTime > 5.679 && currentTime < 7.088) {
    curText = texts[i][2];
  } else if (currentTime > 7.818 && currentTime < 9.363) {
    curText = texts[i][3];
  } else if (currentTime > 9.753 && currentTime < 10.246) {
    curText = texts[i][4];
  } else if (currentTime > 10.382 && currentTime < 11.74) {
    curText = texts[i][5];
  } else if (currentTime > 12.3 && currentTime < 14.779) {
    curText = texts[i][6];
  } else if (currentTime > 15.679 && currentTime < 17.325) {
    curText = texts[i][7];
  } else if (currentTime > 18.005 && currentTime < 19.601) {
    curText = texts[i][8];
  } else if (currentTime > 19.855 && currentTime < 20.144) {
    curText = texts[i][9];
  } else if (currentTime > 20.738 && currentTime < 22.453) {
    curText = texts[i][10];
  } else if (currentTime > 22.911 && currentTime < 24.592) {
    curText = texts[i][11];
  } else if (currentTime > 25.288 && currentTime < 27.292) {
    curText = texts[i][12];
  } else if (currentTime > 27.903 && currentTime < 30.415) {
    curText = texts[i][13];
  } else if (currentTime > 31.264 && currentTime < 33.675) {
    curText = texts[i][14];
  } else if (currentTime > 34.388 && currentTime < 37.342) {
    curText = texts[i][15];
  } else if (currentTime > 37.546 && currentTime < 39.923) {
    curText = texts[i][16];
  } else if (currentTime > 40.534 && currentTime < 42.232) {
    curText = texts[i][17];
  }
  transcripts[i].innerHTML = curText;
};

let arabicAudio = document.getElementById("audio1");
let chineseAudio = document.getElementById("audio2");
let englishAudio = document.getElementById("audio3");
let filipinoAudio = document.getElementById("audio4");
let frenchAudio = document.getElementById("audio5");
let germanAudio = document.getElementById("audio6");
let greekAudio = document.getElementById("audio7");
let hindiAudio = document.getElementById("audio8");
let italianAudio = document.getElementById("audio9");
let koreanAudio = document.getElementById("audio10");
let russianAudio = document.getElementById("audio11");
let spanishAudio = document.getElementById("audio12");
let ukrainianAudio = document.getElementById("audio13");

arabicAudio.addEventListener("timeupdate", (e) => updateTranscript(e, 0));
chineseAudio.addEventListener("timeupdate", (e) => updateTranscript(e, 1));
englishAudio.addEventListener("timeupdate", (e) => updateTranscript(e, 2));
filipinoAudio.addEventListener("timeupdate", (e) => updateTranscript(e, 3));
frenchAudio.addEventListener("timeupdate", (e) => updateTranscript(e, 4));
germanAudio.addEventListener("timeupdate", (e) => updateTranscript(e, 5));
greekAudio.addEventListener("timeupdate", (e) => updateTranscript(e, 6));
hindiAudio.addEventListener("timeupdate", (e) => updateTranscript(e, 7));
italianAudio.addEventListener("timeupdate", (e) => updateTranscript(e, 8));
koreanAudio.addEventListener("timeupdate", (e) => updateTranscript(e, 9));
russianAudio.addEventListener("timeupdate", (e) => updateTranscript(e, 10));
spanishAudio.addEventListener("timeupdate", (e) => updateTranscript(e, 11));
ukrainianAudio.addEventListener("timeupdate", (e) => updateTranscript(e, 12));

const emptyTranscripts = (i) => {
  transcripts[i].innerHTML = "";
};

arabicAudio.addEventListener("pause", () => emptyTranscripts(0));
chineseAudio.addEventListener("pause", () => emptyTranscripts(1));
englishAudio.addEventListener("pause", () => emptyTranscripts(2));
filipinoAudio.addEventListener("pause", () => emptyTranscripts(3));
frenchAudio.addEventListener("pause", () => emptyTranscripts(4));
germanAudio.addEventListener("pause", () => emptyTranscripts(5));
greekAudio.addEventListener("pause", () => emptyTranscripts(6));
hindiAudio.addEventListener("pause", () => emptyTranscripts(7));
italianAudio.addEventListener("pause", () => emptyTranscripts(8));
koreanAudio.addEventListener("pause", () => emptyTranscripts(9));
russianAudio.addEventListener("pause", () => emptyTranscripts(10));
spanishAudio.addEventListener("pause", () => emptyTranscripts(11));
ukrainianAudio.addEventListener("pause", () => emptyTranscripts(12));

// let currentTime = audio.currentTime;
// if (currentTime > 0.874 && currentTime < 2.928) {
//   transcript.innerHTML = texts[0][0];
// } else if (currentTime > 3.539 && currentTime < 5.05) {
//   transcript.innerHTML = texts[0][1];
// } else if (currentTime > 5.679 && currentTime < 7.088) {
//   transcript.innerHTML = texts[0][2];
// } else if (currentTime > 7.818 && currentTime < 9.363) {
//   transcript.innerHTML = texts[0][3];
// } else if (currentTime > 9.753 && currentTime < 10.246) {
//   transcript.innerHTML = texts[0][4];
// } else if (currentTime > 10.382 && currentTime < 11.74) {
//   transcript.innerHTML = texts[0][5];
// } else if (currentTime > 12.3 && currentTime < 14.779) {
//   transcript.innerHTML = texts[0][6];
// } else if (currentTime > 15.679 && currentTime < 17.325) {
//   transcript.innerHTML = texts[0][7];
// } else if (currentTime > 18.005 && currentTime < 19.601) {
//   transcript.innerHTML = texts[0][8];
// } else if (currentTime > 19.855 && currentTime < 20.144) {
//   transcript.innerHTML = texts[0][9];
// } else if (currentTime > 20.738 && currentTime < 22.453) {
//   transcript.innerHTML = texts[0][10];
// } else if (currentTime > 22.911 && currentTime < 24.592) {
//   transcript.innerHTML = texts[0][11];
// } else if (currentTime > 25.288 && currentTime < 27.292) {
//   transcript.innerHTML = texts[0][12];
// } else if (currentTime > 27.903 && currentTime < 30.415) {
//   transcript.innerHTML = texts[0][13];
// } else if (currentTime > 31.264 && currentTime < 33.675) {
//   transcript.innerHTML = texts[0][14];
// } else if (currentTime > 34.388 && currentTime < 37.342) {
//   transcript.innerHTML = texts[0][15];
// } else if (currentTime > 37.546 && currentTime < 39.923) {
//   transcript.innerHTML = texts[0][16];
// } else if (currentTime > 40.534 && currentTime < 42.232) {
//   transcript.innerHTML = texts[0][17];
// }
