console.log("hello world");

let MyNumber = 10 + 20;

console.log(MyNumber);

document.getElementById("changeColor").addEventListener("click", function () {
  const box = document.getElementById("box");
  const color = ["red", "blue", "green", "purple", "orange"];
  const randomColor = color[Math.floor(Math.random() * color.length)];
  box.style.backgroundColor = randomColor;
  console.log("fargen er endret!");
});

console.log(document.getElementById("showName"));
document.getElementById("showName").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value;
  const greetingMessage = `God kveld til deg, ${name}!`;
  document.getElementById("greeting").innerText = greetingMessage;
  console.log(greetingMessage);
});

