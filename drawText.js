const titleString = "CRIME COMMITTER V";
function drawBox(screenWidthInCharacters, screenHeightInCharacters) {
  var wholeScreenTextBuffer = "";
  // draw top bar
  var singleRow = "";
  for (let index = 0; index < screenWidthInCharacters; index++) {
    singleRow += "█";
  }
  // add to buffer with newline too
  wholeScreenTextBuffer += singleRow + "<br>";
  //middle rows
  for (let index = 0; index < screenHeightInCharacters - 2; index++) {
    singleRow = "";

    // add first column
    singleRow += "█";
    // add many blank columns
    if (index == 0) {
      singleRow +=
        "&nbsp".repeat((screenWidthInCharacters - 2 - titleString.length) / 2) +
        titleString +
        "&nbsp".repeat((screenWidthInCharacters - 2 - titleString.length) / 2);
      singleRow += "&nbsp";
    } else {
      singleRow += "&nbsp".repeat(screenWidthInCharacters - 2);
    }
    //add final column
    singleRow += "█";
    //add to buffer
    wholeScreenTextBuffer += singleRow + "<br>";
  }
  singleRow = "";
  // create final row of bars
  for (let index = 0; index < screenWidthInCharacters; index++) {
    singleRow += "█";
  }
  wholeScreenTextBuffer += singleRow;
  return wholeScreenTextBuffer;
}
