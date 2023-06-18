export class Customer{
    constructor(customer_id, customer_nic, customer_name, customer_salary, customer_address) {
        this._customer_id = customer_id;
        this._customer_nic = customer_nic;
        this._customer_name = customer_name;
        this._customer_salary = customer_salary;
        this._customer_address = customer_address;
    }
    get customer_id(){
        return this._customer_id;
    }
    get customer_nic(){
        return this._customer_nic;
    }
    get customer_name(){
        return this._customer_name;
    }
    get customer_salary(){
        return this._customer_salary;
    }
    get customer_address(){
        return this._customer_address;
    }
    set customer_id(customer_id){
        this._customer_id = customer_id;
    }
    set customer_nic(customer_nic){
        this._customer_nic = customer_nic;
    }
    set customer_name(customer_name){
        this._customer_name = customer_name;
    }
    set customer_salary(customer_salary){
        this._customer_salary = customer_salary;
    }
    set customer_address(customer_address){
        this._customer_address = customer_address;
    }
}

export class Item {
}