// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u) 
// на певний символ, наприклад *.
function replaceVowels(str) {
  
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
 
let result = '';
for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    result += '*';
  }
  else {
    result += str[i];
  }
}

return result;
}
console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;