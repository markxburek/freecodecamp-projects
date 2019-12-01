/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

This will work any positive integer up to and including 10000. 
*/

function convertToRoman(num) {

    let romanConversionTable = {
        0: "",
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        20: "XX",
        30: "XXX",
        40: "XL",
        50: "L",
        60: "LX",
        70: "LXX",
        80: "LXXX",
        90: "XC",
        100: "C",
        200: "CC",
        300: "CCC",
        400: "CD",
        500: "D",
        600: "DC",
        700: "DCC",
        800: "DCCC",
        900: "CM",
        1000: "M",
        2000: "MM",
        3000: "MMM",
        4000: "(IV_)",
        5000: "(V_)",
        6000: "(VI_)",
        7000: "(VII)",
        8000: "(VIII_)",
        9000: "(IX)",
        10000:"(X_)"
    }; 

    if( (num > 10000) | (num < 0) ) return undefined;

    let arrayRepresentationOfNumber = num.toString().split('');  

    let arrayLength = arrayRepresentationOfNumber.length;
    let romanNumber = "";

    for (let i = 0; i < arrayLength; i++) {

        let decimalDeconstructionOfNumber = parseInt(arrayRepresentationOfNumber[i], 10) * Math.pow(10, arrayLength - i - 1);

        let romanNumeral = romanConversionTable[decimalDeconstructionOfNumber]
      
        romanNumber += romanNumeral.toString();
    }

    return romanNumber;
}

convertToRoman(2);
