import {Customer} from "../models/customer.js";
import {getCustomerDB, saveCustomerDB} from "../db/db.js";
// --------------------------------------------------

const data = "DATA";
export class CustomerController{
    constructor() {
        $('#btn_add').click(this.handleSaveCustomerValidation.bind(this));
        $('#btn_update').click(this.handleUpdateCustomer.bind(this));
        $('#btn_delete').click(this.handleDeleteCustomer.bind(this));
        this.handleSaveCustomer.bind(this);
        this.handleLoadCustomer();
    }
    handleSaveCustomerValidation(){
        var customer_id = $('#txtNewCustomerID').val();
        var customer_nic = $('#txtNewCustomerNIC').val();
        var customer_name = $('#txtNewCustomerName').val();
        var customer_salary =  $('#txtNewCustomerSalary').val();
        var customer_address =  $('#txtNewCustomerAddress').val();
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

        (!regexNumber.test(customer_id)) ? alert("InValid id"):
            (!customer_nic)? alert("InValid Nic"):
                (!customer_name)?alert("InValid Name"):
                    (!customer_salary)?  alert("InValid Salary"):
                        (!customer_address)?alert("InValid Address"):
                            this.handleSaveCustomer();

    }
    handleLoadCustomer(){
        // $('#tblCustomerBody tr').remove();
        $('#tblCustomerBody').empty();
        // let customer_data_arr = JSON.parse(localStorage.getItem(data));
        var customer_data_arr = getCustomerDB();
        if(!customer_data_arr)return;
        customer_data_arr.map((result, index) => {
            var row = "<tr>" +
                "<td>"+ result._customer_id +"</td>" +
                "<td>"+ result._customer_nic +"</td>" +
                "<td>"+ result._customer_name +"</td>" +
                "<td>"+ result._customer_salary +"</td>" +
                "<td>"+ result._customer_address +"</td>" +
                "</tr>";
            $('#tblCustomerBody').append(row);
        })
    }
    handleSaveCustomer(){
        console.log("handleSaveCustomer")
        var customer_id = $('#txtNewCustomerID').val();
        var customer_nic = $('#txtNewCustomerNIC').val();
        var customer_name = $('#txtNewCustomerName').val();
        var customer_salary =  $('#txtNewCustomerSalary').val();
        var customer_address =  $('#txtNewCustomerAddress').val();

        var customer = new Customer(customer_id, customer_nic, customer_name, customer_salary, customer_address);

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
        saveCustomerDB(customer);

        this.handleLoadCustomer();
    }
    handleUpdateCustomer(){
        var customer_id = $('#txtEditCustomerID').val();

        let customer_data_arr = JSON.parse(localStorage.getItem(data));
        let index = customer_data_arr.findIndex(customer => customer._customer_id === customer_id )
        if (index < 0){
            alert("not found customer for this index : "+index);
            return;
        }

        customer_data_arr[index].id = customer_id;
        customer_data_arr[index]._customer_nic = $('#txtEditCustomerNIC').val();
        customer_data_arr[index]._customer_name = $('#txtEditCustomerName').val();
        customer_data_arr[index]._customer_salary = $('#txtEditCustomerSalary').val();
        customer_data_arr[index]._customer_address = $('#txtEditCustomerAddress').val();

        localStorage.setItem(data, JSON.stringify(customer_data_arr));
        this.handleLoadCustomer();
    }
    handleDeleteCustomer(){
        var customer_id = $('#txtEditCustomerID').val();

        let customer_data_arr = JSON.parse(localStorage.getItem(data));
        let index = customer_data_arr.findIndex(customer => customer._customer_id === customer_id )
        if (index < 0){
            alert("not found customer for this index : "+index);
            return;
        }

        customer_data_arr.splice(index, 1);
        localStorage.setItem(data, JSON.stringify(customer_data_arr));

        $('#txtEditCustomerNIC').val("");
        $('#txtEditCustomerName').val("");
        $('#txtEditCustomerSalary').val("");
        $('#txtEditCustomerAddress').val("");

        this.handleLoadCustomer();
    }
}
new CustomerController();

// --------------- or -----------------------------------

// const data = "DATA";
//

$('#tblCustomerBody').on('click', 'tr', (event)=>{
    let row = $(event.target).closest('tr').find('td');

    $('#tblCustomerBody tr').removeClass('selected')

    // $(event.currentTarget).addClass('selected'); // 1
    $(event.target).closest('tr').addClass('selected'); // 2

    // document.getElementById('customer_id').value = row.eq(0).text();
    // document.getElementById('first_name').value = row.eq(1).text();
    // document.getElementById('last_name').value = row.eq(2).text();
    // document.getElementById('customer_address').value = row.eq(3).text()



    $('#txtEditCustomerID').val(row.eq(0).text());
    $('#txtEditCustomerNIC').val(row.eq(1).text());
    $('#txtEditCustomerName').val(row.eq(2).text());
    $('#txtEditCustomerSalary').val(row.eq(3).text());
    $('#txtEditCustomerAddress').val(row.eq(4).text());
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
