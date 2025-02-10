function myParseInt(num, radix = 10) {
  let result;
  
 
  num = String(num); // Convert to string if necessary
  num = num.trim(); // Remove leading and trailing spaces

   if (num === "") {
    result = NaN;
    return result;
  }


  if (radix < 2 || radix > 36) return NaN; // Check valid radix range

  let sign = 1, i = 0;
  if (num[i] === "-") { // Handle negative sign
    sign = -1;
    i++;
  } else if (num[i] === "+") { // Handle explicit positive sign
    i++;
  }

  result = 0;
  for (; i < num.length; i++) {
    let digit = num.charCodeAt(i);

    if (digit >= 48 && digit <= 57) digit -= 48;       // '0' - '9' → 0-9
    else if (digit >= 65 && digit <= 90) digit -= 55;  // 'A' - 'Z' → 10-35
    else if (digit >= 97 && digit <= 122) digit -= 87; // 'a' - 'z' → 10-35
    else break; // Stop at invalid character

    if (digit >= radix) break; // Stop if digit is not valid in given radix

    result = result * radix + digit;
  }

  return sign * result;
}





console.log(`conversion string to number in decimal number system myParseInt("123")=123 ${myParseInt(123) == 123}`);
console.log(`conversion string to number in binary number system myParseInt("123",2)=123 ${myParseInt(123, 2) == 1}`);
console.log(`conversion string to number in 36-th number system myParseInt("z.", 36) = 35 ${myParseInt("z.", 36) == 35}`);
console.log(`conversion string to number in decimal number system myParseInt("123.6", 10) = 35 ${myParseInt("123.6", 10) == 123}`);
console.log(`NaN conversion if first symbol doesn't exist in the specified number system myParseInt(".z", 36)=NaN ${isNaN(myParseInt(".z", 36))}`);
console.log(`NaN conversion if radix is incorrect myParseInt("123", 37)=NaN ${isNaN(myParseInt("123", 37))}`);
console.log(`NaN conversion if radix is incorrect myParseInt("123", 1)=NaN ${isNaN(myParseInt("123", 1))}`);
console.log(`conversion string with spaces myParseInt(" 123 ")=123 ${myParseInt(" 123 ") == 123}`);
console.log(`conversion string with spaces myParseInt(" 12 3 ")=12 ${myParseInt(" 12 3 ") == 12}`);
console.log(`conversion empty string myParseInt("")=NaN ${isNaN(myParseInt(""))}`);
console.log(`conversion blank string myParseInt("  ")=NaN ${isNaN(myParseInt("  "))}`);
console.log(`conversion string with a negative number myParseInt("-123") = -123 ${myParseInt("-123") == -123}`);
  console.log(`conversion if string is a number myParseInt(123) = 123 ${myParseInt(123) == 123}`);