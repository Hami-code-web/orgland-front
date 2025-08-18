function switchLocation(counter) {
  if (counter == 0) {
    counter = 1;
    setTimeout(function () {
      switchLocation(counter);
    }, 500);
  } else {
    window.location = "futsal.html";
  }
}
