const colors = [
  "#FF0000",
  "#00FF00",
  "blue", // CSS color naming format
  "#FFFF00",
  "magenta", // CSS color naming format
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)",
  "#FFA500",
  "#800080",
  "purple", // CSS color naming format
  "#008000",
  "#000080",
  "#800000",
  "maroon", // CSS color naming format
  "#008080",
  "#808000",
  "gray", // CSS color naming format
];

const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

let hex = false;

document.getElementById("hex").addEventListener("click", function () {
  hex = true;
  console.log("hex", hex);
});

document.querySelector("#simple").addEventListener("click", function () {
  hex = false;
  console.log("simple", hex);
});

const spanColor = document.querySelector("#color-des");

document.querySelector("#main-button").addEventListener("click", function () {
  console.log(hex);

  if (hex === false) {
    const random = Math.floor(Math.random() * colors.length);
    const color = colors[random];
    console.log("color", color);
    document.querySelector("#color-des").textContent = color;
    document.body.style.backgroundColor = color;
  } else {
    let hexColor = generateRandomColor();
    console.log("hexvalue", hexColor);
    document.querySelector("#color-des").textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
  }
});

function generateRandomColor() {
  let hexValue = "#";
  for (let index = 0; index < 6; index++) {
    let random = Math.floor(Math.random() * hexValues.length);
    hexValue += hexValues[random];
  }

  console.log("hexvalue", hexValue);
  return hexValue;
}
