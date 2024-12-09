class Customer {
    private name: string;
    private address: any;

    constructor (name: string,address: any){
        this.name = name;
        address = address;
    }
}
class Order{
    private date: string;
    private status: string;

    constructor (date: string,status: string){
        this.date = date;
        this.status = status;
    }
    public calcSubTotal(){

    }
    public calcTax(){

    }
    public calcTotal(){

    }
    public calcTotalweight(){

    }
}
class OderDetail{
    private quantity: any;
    private taxstatus: string;

    constructor (quantity: any,taxstatus:string){
        this.quantity = quantity;
        this.taxstatus = taxstatus;
    }
    public calcSubtotal(){

    }
    public calcWegiht(){

    }
    public calcTax(){

    }
}
class Item {
    private shippingWeight: any;
    private description: string;

    constructor(shippingWeight: any,description: string) {
        this.shippingWeight= shippingWeight;
        this.description = description;
    }
    public getPriceForQuantity(){

    }
        public getTax(){

        }
        public intStock(){

        }
}
class Payment {
    private amount: number;

    constructor (amount: number){
        this.amount = amount
    }
}

class Check extends Payment{ 
    private name : string;
    private bankID : string;

    constructor (name: string,bankID: string,amount: number)
    {
        super(amount);
        this.name = name;
        this.bankID = bankID;
    }   


    public authorized() {
        
    }
}
class Cash extends Payment{
    private cashTendered: number;

    constructor (cashTendered: number,amount: number){
        super(amount);
        this.cashTendered = cashTendered;
    }
}
    class Credit extends Payment{
        private number: String;
        private type: String;
        private expDate: String

        constructor (number: String,type: String,amount: number,expDate: String){
            super(amount);
            this.number = number;
            this.type = type;
            this.expDate = expDate;    
        }
        public authorized(){
            
        }
    }

