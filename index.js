function myParseInt(num, radix = 10) {
  let result = NaN;

  // Convert num to a string and remove spaces
  num = String(num).trim();

  // Use a while loop to handle invalid inputs
  while (num == "" || num != num || num == null) {
    return NaN;
  }

  // Validate radix
  if (radix < 2 || radix > 36) return NaN;

  let sign = 1, i = 0, hasValidDigit = false;

  // Handle signs
  if (num[i] === "-") {
    sign = -1;
    i++;
  } else if (num[i] === "+") {
    i++;
  }

  result = 0; // Initialize result

  while (i < num.length) {
    let digit = num.charCodeAt(i);

    if (digit >= 48 && digit <= 57) {
      digit -= 48; // Convert '0' - '9' to 0-9
    } else if (digit >= 65 && digit <= 90) {
      digit -= 55; // Convert 'A' - 'Z' to 10-35
    } else if (digit >= 97 && digit <= 122) {
      digit -= 87; // Convert 'a' - 'z' to 10-35
    } else {
      break; // Stop at the first invalid character
    }

    if (digit >= radix) break; // If digit is not valid in given radix, stop parsing

    hasValidDigit = true; // Mark that at least one valid digit was found
    result = result * radix + digit;
    i++;
  }

  return hasValidDigit ? sign * result : NaN;
}





console.log(`conversion string to number in decimal number system myParseInt("123")=123 ${myParseInt(123) == 123}`)
console.log(`conversion string to number in binary number system myParseInt("123",2)=123 ${myParseInt(123, 2) == 1}`)
console.log(`conversion string to number in 36-th number system myParseInt("z.", 36) = 35 ${myParseInt("z.", 36) == 35}`)
console.log(`conversion string to number in decimal number system myParseInt("123.6", 10) = 35 ${myParseInt("123.6", 10) == 123}`)
console.log(`NaN conversion if first symbol doesn't exist in the specified number system myParseInt(".z", 36)=NaN ${(myParseInt(".z", 36))}`)
console.log(`NaN conversion if radix is incorrect myParseInt("123", 37)=NaN ${isNaN(myParseInt("123", 37))}`);
console.log(`NaN conversion if radix is incorrect myParseInt("123", 1)=NaN ${isNaN(myParseInt("123", 1))}`);
console.log(`conversion string with spaces myParseInt(" 123 ")=123 ${myParseInt(" 123 ") == 123}`)
console.log(`conversion string with spaces myParseInt(" 12 3 ")=12 ${myParseInt(" 12 3 ") == 12}`)
console.log(`conversion empty string myParseInt("")=NaN ${isNaN(myParseInt(""))}`)
console.log(`conversion blank string myParseInt("  ")=NaN ${isNaN(myParseInt("  "))}`)
console.log(`conversion string with a negative number myParseInt("-123") = -123 ${myParseInt("-123") == -123}`)
console.log(`conversion if string is a number myParseInt(123) = 123 ${myParseInt(123) == 123}`)