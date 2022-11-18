// Write your solution in this file!

const employee ={emply1:{name:"Alonzo", streetAddress:"malibu"},emply2:{name:"Maria",streetAddress:"Hawai"}}


function updateEmployeeWithKeyAndValue(employee, key, value){
    // const obj = {...employee};
    // obj[key] = value;

    // return obj;
    return {
        ...employee,
        [key]:value,
    };
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] =  value;
    return employee;
    };

function deleteFromEmployeeByKey(employee, key){
    //delete employee.key;
    const nwEmply = {...employee};
    delete nwEmply[key];
    return nwEmply;

}

function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key];
    return employee;

}

// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     const del = delete employee.key;
//     return del;
// }