console.log("helo");
document.getElementById("btn").addEventListener("click", calculate);
function calculate() {
  console.log("fejjej");
  const height = getId("input-base");
  const base = getId("input-height");
  let area;
  if (!isNaN(height) && !isNaN(height)) {
    area = 0.5 * base * height;
  } else {
    return;
  }
  setelement(area);
}

function getId(text) {
  const valu = parseFloat(document.getElementById(text).value);
  if (isNaN(valu)) {
    return "enter a number";
  }
  return valu;
}

function setelement(value) {
  let p = document.createElement("p");
  p.innerText = value;
  document.getElementById("calculated").appendChild(p);
}

document.getElementById("card1").addEventListener("mouseenter", function () {
  document.getElementById("card1").style.backgroundColor = "red";
});
document.getElementById("card1").addEventListener("mouseleave", function () {
  document.getElementById("card1").style.backgroundColor = "grey";
});
