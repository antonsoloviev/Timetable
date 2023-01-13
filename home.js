document.getElementById("range-south").addEventListener("change", function() {
  console.log(this.value);
});

function getSouthRangeValue (value) {
  document.getElementById("south-rangeValue").innerHTML = value;
}

function getNorthRangeValue (value) {
  document.getElementById("north-rangeValue").innerHTML = value;
}