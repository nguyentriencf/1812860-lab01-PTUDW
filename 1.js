function sc() {
// slice string and get number
  rng = prompt("Enter the range");
  res = rng.split("-");
  // check lenght string was sliced
  if (res.length != 2) {
    alert("invalid range ");
    return;
  }
  // assignment variable and parse to Int
  first = parseInt(res[0]);
  second = parseInt(res[1]);
  // check Int sliced  first > second?
  if (first > second) {
    alert("invalid range ");
    return;
  }
  // if first < second is display string html 
  str = "<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
  for (i = first; i <= second; i++) {
      // connect str from first to second and use recipe square and Cube
    str = str + "<tr><td>" + i + "<td>" + i * i + "<td>" + i * i * i;
  }
  document.write(str);
}
