function performMathOperations(){
    var firstNumber = parseFloat(document.getElementById("firstNumber").value);
    var secondNumber = parseFloat(document.getElementById("secondNumber").value);
    
    var addition = firstNumber + secondNumber;
    var subtraction = firstNumber - secondNumber;
    var multiplication = firstNumber * secondNumber;
    var division = firstNumber / secondNumber;

    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<p>Addition: " + addition + "</p>" +
                            "<p>Subtraction: " + subtraction + "</p>" +
                            "<p>Multiplication: " + multiplication + "</p>" +
                            "<p>Division: " + division + "</p>";
}