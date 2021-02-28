let buttons = document.querySelectorAll("#buttons button");
let p = document.querySelector("#stringValue");

for (let i = 0; i < buttons.length; i++) {
  const btn = buttons[i];
  btn.addEventListener("click", onClick);
}
let str = "";
function onClick(event) {
  console.log(event.currentTarget.innerText);
  let val = event.currentTarget.innerText;

  if (val == "SPACE") {
    str += "&nbsp;";
  } else {
    str += val;
  }
  p.innerHTML = str;
}
