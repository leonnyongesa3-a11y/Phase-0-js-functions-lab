function calculateTax(amount) {
    return amount * 0.1; 
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
  } 

function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}

console.log(calculateTax(100)); // Should print 10
console.log(convertToUpperCase("hello")); // Should print "HELLO"
console.log(findMaximum(5, 10)); // Should print 10
console.log(isPalindrome("racecar")); // Should print true
console.log(calculateDiscountedPrice(100, 20)); // Should print 80


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };