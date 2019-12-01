/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/
function rot13(str) { // LBH QVQ VG!
    //65=A 90=Z

    let stringLength = str.length;
    let decodedString = "";
    let cyperShift = 13;
    let numberOfLettersInTheAlphabet = 26;
    let asciiCodeOfTheLetterZ = 90;
    let asciiCodeOfWhiteSpace = 32;

    for (let i = 0; i < stringLength; i++) {

        let currentCharacter = str.charAt(i);

        let currentCharacterCode = currentCharacter.charCodeAt(0);
        console.log(currentCharacterCode);

        if (currentCharacterCode !== asciiCodeOfWhiteSpace) {

        // if (currentCharacterCode !== asciiCodeOfWhiteSpace) {

            currentCharacterCode = currentCharacter.charCodeAt(0) + cyperShift;



            if (currentCharacterCode > asciiCodeOfTheLetterZ) {
                decodedString += String.fromCharCode(currentCharacterCode - numberOfLettersInTheAlphabet);
            } else {
                decodedString += String.fromCharCode(currentCharacterCode);
            }

        } else {
            decodedString += " ";
        }



        let decodedCharacter = String.fromCharCode(currentCharacterCode);
        console.log("decoded character is " + decodedCharacter);

        console.log(decodedString)
    }

    //let stringArray = str.split('');
    //
    // stringArray.forEach(element => {
    //   let characterCode = element.charCodeAt(0);
    //   element = String.fromCharCode(characterCode + 13);
    //   console.log(element);

    // });



    //console.log(stringArray);
    return decodedString;
}