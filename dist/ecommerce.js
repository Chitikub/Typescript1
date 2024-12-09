"use strict";
class payment {
    constructor(amount) {
        this.amount = amount;
    }
}
class Check extends payment {
    constructor(name, bankID, amount) {
        super(amount);
        this.name = name;
        this.bankID = bankID;
    }
}
