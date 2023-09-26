// Write your solution in this file!

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updatedEmployee = {...employee};
    updatedEmployee[key]= value;
    return updatedEmployee;
}
const employee = {
    name:"Sam",
    streetAddress:"Broadway",
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
const newEmployee = {
    name:"Sam",
    streetAddress:"12 Broadway"
};
function deleteFromEmployeeByKey(employee,keyToDelete){
    const employeeClone = {...employee};
    if(keyToDelete in employeeClone){
        delete employeeClone[keyToDelete];
    }
    return employeeClone;
}
function destructivelyDeleteFromEmployeeByKey(employee,keyToDelete) {
    delete employee[keyToDelete];
    return employee;
}
