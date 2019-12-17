const denominations = {
    ONE_HUNDRED_DOLLAR_BILL: 100.00,
    TWENTY_DOLLAR_BILL: 20.00,
    TEN_DOLLAR_BILL: 10.00,
    FIVE_DOLLAR_BILL: 5.00,
    ONE_DOLLAR_BILL: 1.00,
    QUARTER: 0.25,
    DIME: 0.10,
    NICKEL: 0.05,
    PENNY: 0.01
};

const countNumberOfDenominationNeeded = (change, denominationValue) => {
    let count = 0;

    console.log('change is initially ' + change + ' and denomValue is ' + denominationValue);

    while(change >= denominationValue){
        count++;
        change  -=  denominationValue;
        console.log('change is now ' + change)
    }

    return count;
};



function checkCashRegister(price, cash, cid) {

    let change = cash - price;
    console.log('change is  ' + change);

    console.log("count is " + countNumberOfDenominationNeeded(change, 0.25) );
     

    // for (denomination in denominations) {
    //     if (denominations[denomination] < change) {
    //         console.log('now using denomination: ' + denominations[denomination]);

    //         // while(change <  denominations[denomination] ){

    //         // }
    //     }
    //     //console.log(denominations[denomination]);
    // }


    // Here is your change, ma'am.

     
    return change;
}

 


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]



checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60],
["ONE HUNDRED", 100]]);
