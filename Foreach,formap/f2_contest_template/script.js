/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}


function PrintDeveloperbyForEach() {
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}


function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(newEmployee);
}


function removeAdmin() {
  arr = arr.filter(employee => employee.profession !== "admin");
  console.log(arr);
}


function concatenateArray() {
  const newArray = [
    { id: 4, name: "emma", age: "22", profession: "designer" },
    { id: 5, name: "michael", age: "24", profession: "engineer" },
    { id: 6, name: "lucas", age: "21", profession: "analyst" }
  ];

  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
