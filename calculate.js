function calculate() {
    var firstNumber = document.getElementById("first_number").value;
    var secondNumber = document.getElementById("second_number").value;

    // Handle any missing numbers.
    if (!firstNumber || !secondNumber || firstNumber == 'undefined' || secondNumber == 'undefined') {
        alert('Please enter valid numbers :)');
    }

    // Handle divide by 0 issue.
    else if (secondNumber == 0) {
        alert('You can\'t divide by 0 :P');
    }

    else {
        // Divide the first number by the second number.
        let result = firstNumber + ' is ' + (firstNumber / secondNumber * 100.0) + '% of ' + secondNumber + '!';

        // Display the result.
        document.getElementById("result").innerHTML = result;
    }
}
