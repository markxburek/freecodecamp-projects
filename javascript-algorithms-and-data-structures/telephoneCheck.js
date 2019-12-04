/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as 
it has the format of a valid US number. 

The following are examples of valid formats for US numbers (refer to
the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as 
800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or 
reject the US phone number based on any combination of the formats 
provided above. The area code is required. If the country code is 
provided, you must confirm that the country code is 1. 

Return true if the string is a valid US phone number; 
otherwise return false.

*/

function telephoneCheck(str) {
  // Good luck!
  let nonPhoneNumberSymbolsRegex = /[^0-9\(\)\-\s]/g;
  let eliminateWhiteSpace = /[^\s]/g;


  let phoneRegex1 = /^\d\d\d-\d\d\d-\d\d\d\d$/;
  let phoneRegex2 = /^\(\d\d\d\)\d\d\d-\d\d\d\d$/;
  let phoneRegex3 = /^\1\(\d\d\d\)\d\d\d-\d\d\d\d$/;
  let phoneRegex4 = /^\d\d\d\d\d\d\d\d\d\d$/;

  let digits = /[0-9]/g;
  //  let filteredString = str.match(phoneNumberSymbolsRegex).join('') ;
  //   console.log(filteredString);

  if (nonPhoneNumberSymbolsRegex.test(str)) return false;

  let noWhiteSpaceString = str.match(eliminateWhiteSpace);
  // console.log(noWhiteSpaceString);

  // console.log("before: " +noWhiteSpaceString);
  if (noWhiteSpaceString[0] === "1") {
    noWhiteSpaceString.shift();
    //noWhiteSpaceString = noWhiteSpaceString.join('');

  } else {
    //noWhiteSpaceString =noWhiteSpaceString.join('');
  }

  if (noWhiteSpaceString[0] === "(") {

    
    if (noWhiteSpaceString[4] !== ")") {
      return false;
    }
  }




  noWhiteSpaceString = noWhiteSpaceString.join('');

  console.log("after: " + noWhiteSpaceString);







  if (phoneRegex1.test(noWhiteSpaceString)) {
    console.log("match regex1: " + noWhiteSpaceString)
    return true;

  }
  if (phoneRegex2.test(noWhiteSpaceString)) {
    console.log("match regex2: " + noWhiteSpaceString)
    return true;

  }
  if (phoneRegex3.test(noWhiteSpaceString)) {
    console.log("match regex3: " + noWhiteSpaceString)
    return true;

  }
  if (phoneRegex4.test(noWhiteSpaceString)) {
    console.log("match regex4: " + noWhiteSpaceString)
    return true;

  }



  console.log(undefined);
  return undefined;
}


telephoneCheck("1 555-555-5555");

const testPhoneNumberPatterns = filteredString => {
  if (phoneRegex1.test(filteredString)
    || phoneRegex2.test(filteredString)
    || phoneRegex3.test(filteredString)
    || phoneRegex4.test(filteredString)

  ) {
    console.log("match regex: " + filteredString)
    return true;
  }
}


