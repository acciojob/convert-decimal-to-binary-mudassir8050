function decimalToBinary(num) {
    // Check if the input is a non-negative integer
    if (Number.isInteger(num) && num >= 0) {
        // Special case for 0
        if (num === 0) {
            return '0';
        }

        // Use toString() with base 2 to convert decimal to binary
        return num.toString(2);
    } else {
        // Handle invalid input
        return 'Invalid input. Please provide a non-negative integer.';
    }
}

const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));
