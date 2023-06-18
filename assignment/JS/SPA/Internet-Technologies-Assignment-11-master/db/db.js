 const data = "DATA"
//
// export function saveCustomerDB(new_customer){
//   let pre_data = localStorage.getItem(data);
//
//   let data_arr = [];
//
//   if(pre_data) {
//    data_arr = JSON.parse(pre_data);
//   }
//
//   data_arr.push(new_customer);
//   localStorage.setItem(data, JSON.stringify(data_arr));
//
// }
// export function getCustomerDB(){
//  var pre_data = localStorage.getItem(data);
//  var data_Arr = [];
//  if (pre_data){
//   data_Arr = JSON.parse(pre_data);
//  }
//
//  return data_Arr;
// }

export function saveItemDB(new_item){
    let pre_data = localStorage.getItem(data);

    let data_arr = [];

    if(pre_data) {
        data_arr = JSON.parse(pre_data);
    }

    data_arr.push(new_item);
    localStorage.setItem(data, JSON.stringify(data_arr));

}
export function getItemDB(){
    var pre_data = localStorage.getItem(data);
    var data_Arr = [];
    if (pre_data){
        data_Arr = JSON.parse(pre_data);
    }

    return data_Arr;
}