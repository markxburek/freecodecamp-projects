 

const calculateTotalChangeToGive = (cash, price) => (cash * 100 - price * 100) / 100;

 
const calculateTotalMoneyInDrawer = cid => {

    let change = 0;

    //console.log('total amount in drawer: ' + cid[0])
    for (let i = 0; i < cid.length; i++) {
        change = (change*100 + cid[i][1]*100)/100;
             
    }

    return change;

};

/* fix-changeToGive */ 

class CashRegister{
    constructor(price, cash, cid){
        this.cid = cid;
        this.changeNeeded = this.calculateTotalChangeToGive(cash, price);
        this.currentDemominationIndex = cid.length -1;
        this.changeToGive =  [];
        this.denominationNumericalValue = {
            HUNDRED: 100.00,
            TWENTY: 20.00,
            TEN: 10.00,
            FIVE: 5.00,
            ONE: 1.00,
            QUARTER: 0.25,
            DIME: 0.10,
            NICKEL: 0.05,
            PENNY: 0.01
        };

    }

     

    calculateTotalChangeToGive(cash, price){
        return (cash * 100 - price * 100) / 100;
    }


  
    updateDemonimationIndex() {
        this.currentDemominationIndex--;
        


        // if(this.currentDemonimation > -1){
        //     this.currentDemomination--;
        // }

    }

    getCurrentDemonimation() {
        return this.cid[this.currentDemominationIndex][0];

    }

    getRegister(){
        return this.cid;
    }

    isCurrentDenominationEmpty(){
        if(this.cid[this.currentDemominationIndex][1] > 0) return false;
        
        return true;

    }

    getCurrentDemonimationIndex(){
        return this.currentDemominationIndex;
    }

    getTotalMoneyInSlot(){
        return this.cid[this.currentDemominationIndex][1];
    }

    removeMoneyFromRegister(){

        let denominationValue = this.denominationNumericalValue[this.getCurrentDemonimationIndex()];

        console.log('now money in slot is ' + this.getTotalMoneyInSlot() );

        // console.log( 'change needed: ' +this.changeNeeded + ' '+
        //  'denom value:  ' + this.denominationNumericalValue[this.getCurrentDemonimation()]
        //  + ' ' + 'change to give: ' +this.changeToGive[this.getCurrentDemonimationIndex()][1]
        //  );

         let moneyToBeTransfered = 0;
         while(this.changeNeeded >=  this.denominationNumericalValue[this.getCurrentDemonimation()]  && this.getTotalMoneyInSlot() > 0){

            this.cid[this.currentDemominationIndex][1] =
            (this.cid[this.currentDemominationIndex][1]*100 - 
             this.denominationNumericalValue[this.getCurrentDemonimation()]*100)/100;

            // this.changeToGive[this.getCurrentDemonimationIndex()][1] =

            // (this.changeToGive[this.getCurrentDemonimationIndex()][1]*100 + 
            // this.denominationNumericalValue[this.getCurrentDemonimation()]*100)/100;

            moneyToBeTransfered =

            (moneyToBeTransfered*100 + 
            this.denominationNumericalValue[this.getCurrentDemonimation()]*100)/100;

            this.changeNeeded = 
            Math.round(this.changeNeeded*100 - 
                this.denominationNumericalValue[this.getCurrentDemonimation()]*100)/100;
            
         }

         console.log('current denomination is ' + this.getCurrentDemonimation());
         console.log('money to transfer is ' + moneyToBeTransfered)

         if(moneyToBeTransfered > 0){
            this.changeToGive.push( [this.getCurrentDemonimation(), moneyToBeTransfered] )

         }

          



         console.log('now money in slot is ' + this.getTotalMoneyInSlot() );

    }

    


};



function checkCashRegister(price, cash, cid) {

    const cashRegister = new CashRegister(price, cash, cid);

    let totalCashInRegister = 0;

    for(let i = 0; i< cashRegister.cid.length; i++){

        totalCashInRegister = (totalCashInRegister*100 + cashRegister.cid[i][1]*100)/100;




    }

    console.log('total in register is ' +totalCashInRegister);




    let changeNeeded = calculateTotalChangeToGive(cash, price);

    while(cashRegister.getCurrentDemonimationIndex() >=0){
        if(cashRegister.isCurrentDenominationEmpty()){
            cashRegister.updateDemonimationIndex();

        }  
        else {
            cashRegister.removeMoneyFromRegister();



            cashRegister.updateDemonimationIndex();

        }
        console.log('current denom is ' +cashRegister.getCurrentDemonimationIndex() )
    }

    console.log('end of function');

    /*  
    CLOSED means enough funds for change AND there's no more money in register
    INSUFFICIENT FUNDS means changeNeeded didn't reduce down to 0

    */



 



    let statusChangeObject = {status: null , change: null};

    statusChangeObject.change = cashRegister.changeToGive;

    if(totalCashInRegister === 0 && cashRegister.changeNeeded === 0 ){
        statusChangeObject.status = "CLOSED";
    } else if (cashRegister.changeNeeded !== 0){
        statusChangeObject.status = "INSUFFICIENT_FUNDS";
        statusChangeObject.change = [];

    } else {
        statusChangeObject.status = "OPEN";
    }




    console.log(statusChangeObject);

    

  

    return statusChangeObject;
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) ;



