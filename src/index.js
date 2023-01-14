const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  " ": " ",
  "00": "",
  "10": ".",
  "11": "-",
};

function decode(expr) {
  let arr = [];
  let result = [];

  for (let i = 0; i <= expr.length - 10; i += 10) {
    arr.push(expr.slice(i, i + 10));
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "**********") {
      result[i] = " ";
    } else {
      result[i] = MORSE_TABLE[`${MORSE_TABLE[`${arr[i][0]}${arr[i][1]}`]}${MORSE_TABLE[`${arr[i][2]}${arr[i][3]}`]}${MORSE_TABLE[`${arr[i][4]}${arr[i][5]}`]}${MORSE_TABLE[`${arr[i][6]}${arr[i][7]}`]}${MORSE_TABLE[`${arr[i][8]}${arr[i][9]}`]}`];
    }
  }
  return result.flat().join("");
}

module.exports = {
  decode,
};
