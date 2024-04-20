function displayText(){
  var text = document.getElementById("textInput").value;
  var color = document.getElementById("colorInput").value;
  var displayParagraph = document.getElementById("displayParagraph");

  displayParagraph.textContent = text;
  displayParagraph.style.color = color;
}