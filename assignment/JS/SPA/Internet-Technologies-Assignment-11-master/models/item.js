export class Item{
    constructor(item_code, item_name, item_price, item_quantity) {
        this._item_code = item_code;
        this._item_name = item_name;
        this._item_price = item_price;
        this._item_quantity = item_quantity;
    }
    get item_code(){
        return this._item_code;
    }
    get item_name(){
        return this._item_name;
    }
    get item_price(){
        return this._item_price;
    }
    get item_quantity(){
        return this._item_quantity;
    }
    set item_code(item_code){
        this._item_code = item_code;
    }
    set item_name(item_name){
        this._item_name = item_name;
    }
    set item_price(item_price){
        this._item_price = item_price;
    }
    set item_quantity(item_quantity){
        this._item_quantity = item_quantity;
    }
}