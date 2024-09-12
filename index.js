let updatedPassengerNo = document.getElementById("counter");

let count = 0;
function increment() {
  count++;
  updatedPassengerNo.innerText = count;
}
function decrement() {
  count--;
  updatedPassengerNo.innerText = count;
}
function zero() {
  count = 0;
  updatedPassengerNo.innerText = count;
}

let saveEl = document.getElementById("save-el");

function save() {
  let prev = count + ", ";
  saveEl.textContent += prev;

  console.log(count);
}
