import {Item} from "../models/item.js";
import {getItemDB, saveItemDB} from "../db/db.js";


const data = "DATA";
export class ItemController{
    constructor() {
        $('#btn_add').click(this.handleSaveItemValidation.bind(this));
        $('#btn_update').click(this.handleUpdateItem.bind(this));
        $('#btn_delete').click(this.handleDeleteItem.bind(this));
        this.handleSaveItem.bind(this);
        this.handleLoadItem();
    }
    handleSaveItemValidation(){
        var item_code = $('#txtNewItemCode').val();
        var item_name = $('#txtNewItemName').val();
        var item_quantity = $('#txtNewItemQuantity').val();
        var item_price =  $('#txtNewItemPrice').val();
        const regexNumber = /^\d+$/;
        // if (!regexNumber.test(customer_id)){
        //     alert("InValid id");
        //     return;
        // }else if (!customer_nic){
        //     alert("InValid Nic");
        //     return;
        // }else if (!customer_name){
        //     alert("InValid Name");
        //     return;
        // }else if (!customer_salary){
        //     alert("InValid Salary");
        //     return;
        // }else if (!customer_address){
        //     alert("InValid Address");
        //     return;
        // }else {
        //     this.handleSaveCustomer();
        // }

        (!regexNumber.test(item_code)) ? alert("InValid code"):
            (!item_name)? alert("InValid Name"):
                (!item_quantity)?alert("InValid Quantity"):
                    (!item_price)?  alert("InValid Price"):
                            this.handleSaveItem();

    }
    handleLoadItem(){
        // $('#tblCustomerBody tr').remove();
        $('#tblItemBody').empty();
        // let customer_data_arr = JSON.parse(localStorage.getItem(data));
        var item_data_arr = getItemDB();
        if(!item_data_arr)return;
        item_data_arr.map((result, index) => {
            var row = "<tr>" +
                "<td>"+ result._item_code +"</td>" +
                "<td>"+ result._item_name +"</td>" +
                "<td>"+ result._item_quantity +"</td>" +
                "<td>"+ result._item_price +"</td>" +
                "</tr>";
            $('#tblItemBody').append(row);
        })
    }
    handleSaveItem(){
        console.log("handleSaveItem")
        var item_code = $('#txtNewItemCode').val();
        var item_name = $('#txtNewItemName').val();
        var item_quantity = $('#txtNewItemQuantity').val();
        var item_price =  $('#txtNewItemPrice').val();

        var item = new Item(item_code, item_name, item_quantity, item_price);

        // let pre_data = localStorage.getItem(data);
        //
        // let data_arr = [];
        //
        // if(pre_data) {
        //     data_arr = JSON.parse(pre_data);
        // }
        // var customer = new Customer(customer_id, customer_nic, customer_name, customer_salary, customer_address);
        //
        // data_arr.push(customer);
        // localStorage.setItem(data, JSON.stringify(data_arr));
        saveItemDB(item);

        this.handleLoadItem();
    }
    handleUpdateItem(){
        var item_code = $('#txtEditItemCode').val();

        let item_data_arr = JSON.parse(localStorage.getItem(data));
        let index = item_data_arr.findIndex(item => item._item_code === item_code )
        if (index < 0){
            alert("not found item for this index : "+index);
            return;
        }

        item_data_arr[index].code = item_code;
        item_data_arr[index]._item_name = $('#txtEditItemName').val();
        item_data_arr[index]._item_quantity = $('#txtEditItemQuantity').val();
        item_data_arr[index]._item_price = $('#txtEditItemPrice').val();

        localStorage.setItem(data, JSON.stringify(item_data_arr));
        this.handleLoadItem();
    }
    handleDeleteItem(){
        var item_code = $('#txtEditItemCode').val();

        let item_data_arr = JSON.parse(localStorage.getItem(data));
        let index = item_data_arr.findIndex(item => item._item_code === item_code )
        if (index < 0){
            alert("not found item for this index : "+index);
            return;
        }

        item_data_arr.splice(index, 1);
        localStorage.setItem(data, JSON.stringify(item_data_arr));

        $('#txtEditItemName').val("");
        $('#txtEditItemQuantity').val("");
        $('#txtEditItemPrice').val("");

        this.handleLoadItem();
    }
}
new ItemController();

// --------------- or -----------------------------------

// const data = "DATA";
//

$('#tblItemBody').on('click', 'tr', (event)=>{
    let row = $(event.target).closest('tr').find('td');

    $('#tblItemBody tr').removeClass('selected')

    // $(event.currentTarget).addClass('selected'); // 1
    $(event.target).closest('tr').addClass('selected'); // 2

    // document.getElementById('customer_id').value = row.eq(0).text();
    // document.getElementById('first_name').value = row.eq(1).text();
    // document.getElementById('last_name').value = row.eq(2).text();
    // document.getElementById('customer_address').value = row.eq(3).text()



    $('#txtEditItemCode').val(row.eq(0).text());
    $('#txtEditItemName').val(row.eq(1).text());
    $('#txtEditItemQuantity').val(row.eq(2).text());
    $('#txtEditItemPrice').val(row.eq(3).text());
})

// function loadData() {
//     $('#tblCustomerBody tr').remove();
//     let customer_data_arr = JSON.parse(localStorage.getItem(data));
//     console.log(customer_data_arr)
//     if(!customer_data_arr)return;
//     customer_data_arr.map((result, index) => {
//         var row = "<tr>" +
//             "<td>"+ result._customer_id +"</td>" +
//             "<td>"+ result._customer_nic +"</td>" +
//             "<td>"+ result._customer_name +"</td>" +
//             "<td>"+ result._customer_salary +"</td>" +
//             "<td>"+ result._customer_address +"</td>" +
//             "</tr>";
//         $('#tblCustomerBody').append(row);
//     })
// }



//
// $('#btn_add').click(function () {
//     // var customer_id = document.getElementById("customer_id").value;
//     // var customer_first_name = document.getElementById("first_name").value;
//     // var customer_last_name = document.getElementById("last_name").value;
//     // var customer_address = document.getElementById("customer_address").value;
//
//     var customer_id = $('#txtNewCustomerID').val();
//     var customer_nic = $('#txtNewCustomerNIC').val();
//     var customer_name = $('#txtNewCustomerName').val();
//     var customer_salary =  $('#txtNewCustomerSalary').val();
//     var customer_address =  $('#txtNewCustomerAddress').val();
//
//     /*
//     <tr>
//         <td scope="row">1</th>
//         <td>Mark</td>
//         <td>Otto</td>
//         <td>123A, flower Rd, Colombo</td>
//     </tr>
//     */
//
//     let pre_data = localStorage.getItem(data);
//
//     let data_arr = [];
//
//     // undefine/ null/ "" / false
//     if(pre_data) {
//         data_arr = JSON.parse(pre_data);
//     }
//
//     var customer = new Customer(customer_id, customer_nic, customer_name, customer_salary, customer_address);
//     // {
//     //     customer_id: customer_id,
//     //     customer_first_name: customer_first_name,
//     //     customer_last_name: customer_last_name,
//     //     customer_address: customer_address
//     // }
//
//     data_arr.push(customer);
//     localStorage.setItem(data, JSON.stringify(data_arr));
//
//     var row = "<tr>" +
//         "<td>"+ customer.customer_id +"</td>" +
//         "<td>"+ customer.customer_nic +"</td>" +
//         "<td>"+ customer.customer_name +"</td>" +
//         "<td>"+ customer.customer_salary +"</td>" +
//         "<td>"+ customer.customer_address +"</td>" +
//         "</tr>";
//     $('tbody').append(row);
//     // loadData();
// })
//
// $('#btn_update').click(function (){
//     var customer_id = $('#txtNewCustomerID').val();
//
//     let customer_data_arr = JSON.parse(localStorage.getItem(data));
//     let index = customer_data_arr.findIndex(customer => customer.customer_id === customer_id )
//     if (index < 0){
//         alert("not found customer for this index : "+index);
//         return;
//     }
//
//     customer_data_arr[index].id = customer_id;
//     customer_data_arr[index]._customer_nic = $('#txtNewCustomerNIC').val();
//     customer_data_arr[index]._customer_name = $('#txtNewCustomerName').val();
//     customer_data_arr[index]._customer_salary = $('#txtNewCustomerSalary').val();
//     customer_data_arr[index]._customer_address = $('#txtNewCustomerAddress').val();
//
//     localStorage.setItem(data, JSON.stringify(customer_data_arr));
//     loadData();
// })
//
// $('#btn_delete').click(function (){
//     var customer_id = $('#txtNewCustomerID').val();
//
//     let customer_data_arr = JSON.parse(localStorage.getItem(data));
//     let index = customer_data_arr.findIndex(customer => customer.customer_id === customer_id )
//     if (index < 0){
//         alert("not found customer for this index : "+index);
//         return;
//     }
//
//     // var newArr = [];
//     // for (let i = 0; i<customer_data_arr.length; i++){
//     //     if (i !== index){
//     //         newArr.push(customer_data_arr[i])
//     //     }
//     // }
//     // localStorage.setItem(data, JSON.stringify(newArr));
//     // loadData();
//
//     customer_data_arr.splice(index, 1);
//     localStorage.setItem(data, JSON.stringify(customer_data_arr));
//     loadData();
//
//     reset();
// })
//
// $('#btn_reset').on('click', ()=>{
//     reset();
// })
//
// function reset(){
//     $('#txtNewCustomerID').val("");
//     $('#txtNewCustomerNIC').val("");
//     $('#txtNewCustomerName').val("");
//     $('#txtNewCustomerSalary').val("");
//     $('#txtNewCustomerAddress').val("");
// }
