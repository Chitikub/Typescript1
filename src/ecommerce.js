"use strict";
class Customer {
    constructor(name, address) {
        this.name = name;
        address = address;
    }
}
class Order {
    constructor(date, status) {
        this.date = date;
        this.status = status;
    }
    calcSubTotal() {
    }
    calcTax() {
    }
    calcTotal() {
    }
    calcTotalweight() {
    }
}
class OderDetail {
    constructor(quantity, taxstatus) {
        this.quantity = quantity;
        this.taxstatus = taxstatus;
    }
    calcSubtotal() {
    }
    calcWegiht() {
    }
    calcTax() {
    }
}
class Item {
    constructor(shippingWeight, description) {
        this.shippingWeight = shippingWeight;
        this.description = description;
    }
    getPriceForQuantity() {
    }
    getTax() {
    }
    intStock() {
    }
}
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
}
class Check extends Payment {
    constructor(name, bankID, amount) {
        super(amount);
        this.name = name;
        this.bankID = bankID;
    }
    authorized() {
    }
}
class Cash extends Payment {
    constructor(cashTendered, amount) {
        super(amount);
        this.cashTendered = cashTendered;
    }
}
class Credit extends Payment {
    constructor(number, type, amount, expDate) {
        super(amount);
        this.number = number;
        this.type = type;
        this.expDate = expDate;
    }
    authorized() {
    }
}
