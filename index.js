const employee = {
    name: "Sam",
    street:  "123 Abc Street",
    name: "Kimberly",
    street: "456 Def Street",
};
employee;

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
};

updateEmployeeWithKeyAndValue(employee, "Sam","11 Broadway" );

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
};
destructivelyUpdateEmployeeWithKeyAndValue(employee, "Sam", "11 Boardway")

function deleteFromEmployeeByKey(employee, key){
   const newEmployee = {...employee};
   delete newEmployee[key];
   return newEmployee;
};
deleteFromEmployeeByKey(employee,)

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
   return employee;
};
destructivelyDeleteFromEmployeeByKey()