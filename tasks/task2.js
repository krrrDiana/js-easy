// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  let nonNumericChars = '';
  for (let i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i]))) { // Если символ не число
      nonNumericChars += str[i];
    }
  }
  let reversed = '';
  for (let i = nonNumericChars.length - 1; i >= 0; i--) {
    reversed += nonNumericChars[i];
  }
  
  return reversed;
}


console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;